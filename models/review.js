module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      review_code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_code: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      order_code: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      review_comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Review.associate = (db) => {};
  return Review;
};
