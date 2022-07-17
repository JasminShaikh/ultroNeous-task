const { body } = require("express-validator");

const authCheckCredentials = [
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .isLength({ min: 1 })
    .withMessage("Password should not be empty!"),
];

module.exports = {
  authCheckCredentials,
};
