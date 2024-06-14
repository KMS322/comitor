module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      user_pw: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      user_phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_address_jibun: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      user_address_detail: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      user_address_road: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {};
  return User;
};
