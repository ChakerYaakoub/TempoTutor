const check = require("express-validator").check;

exports.validationFirstNameInput = check("firstName")
  .not()
  .isEmpty()
  .withMessage("Please enter your first name");

exports.validationLastNameInput = check("lastName")
  .not()
  .isEmpty()
  .withMessage("Please enter your last name");

exports.validationEmailInput = check("email")
  .not()
  .isEmpty()
  .withMessage("Email field is required")
  .isEmail()
  .withMessage("Please enter a valid email address");

exports.validationPasswordInput = check("password")
  .isLength({ min: 6 })
  .withMessage("Password should be at least 8 characters long");

exports.confirmPassword = check("confirmPassword").custom((value, { req }) => {
  if (value === req.body.password) return true;
  else throw "Passwords do not match. Please try again";
});
//The email you entered is already in use. Please try another one
