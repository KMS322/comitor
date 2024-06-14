const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, UserResume, UserCareer, UserIndividual } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["user_pw"],
        },
        // include: [
        //   {
        //     model: UserResume,
        //     attributes: ["id"],
        //   },
        //   {
        //     model: UserCareer,
        //     attributes: ["id"],
        //   },
        // ],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["user_pw"],
        },
        include: [
          {
            model: UserResume,
            attributes: ["id"],
          },
          {
            model: UserCareer,
            attributes: ["id"],
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    // res.redirect("/");
  });
  res.status(201).send("ok");
});

router.post("/signup", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        user_member_id: req.body.user_member_id,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.user_member_pw, 12);

    const createdUser = await User.create({
      userType: req.body.userType,
      user_member_id: req.body.user_member_id,
      user_member_pw: hashedPassword,
    });
    if (req.body.userType === "individual") {
      await UserIndividual.create({
        user_member_name: req.body.user_member_name,
        user_member_num: req.body.user_member_num,
        user_member_jibunAddress: req.body.user_member_jibunAddress,
        user_member_detailAddress: req.body.user_member_detailAddress,
        user_member_roadAddress: req.body.user_member_roadAddress,
        user_member_tel: req.body.user_member_tel,
        user_member_email: req.body.user_member_email,
        IndividualId: createdUser.id,
      });
    }
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/checkId", isNotLoggedIn, async (req, res, next) => {
  try {
    if (req.body.user_member_id) {
      const sameIdUser = await User.findOne({
        where: {
          user_id: req.body.user_id,
        },
      });
      if (sameIdUser) {
        return res.status(403).send("이미 사용중인 아이디 입니다.");
      }
    } else if (req.body.user_id) {
      const sameIdUser = await User.findOne({
        where: {
          user_id: req.body.user_id,
        },
      });
      if (sameIdUser) {
        return res.status(403).send("이미 사용중인 아이디 입니다.");
      }
    }

    return res.status(200).send("사용하실 수 있는 아이디 입니다.");
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
