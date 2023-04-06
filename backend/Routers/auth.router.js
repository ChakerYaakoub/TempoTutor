const router = require("express").Router();
const bodyParser = require("body-parser");
const authController = require("../controllers/auth.controller");
const check = require("express-validator").check;

const {
  isNotAuthenticated,
} = require("../Controllers/UserAuthenticatioStatus");
const { validationFirstNameInput } = require("../Controllers/UserValidation");
const { validationLastNameInput } = require("../Controllers/UserValidation");
const { validationEmailInput } = require("../Controllers/UserValidation");
const { validationPasswordInput } = require("../Controllers/UserValidation");
const { confirmPassword } = require("../Controllers/UserValidation");
router.post(
  "/signup",
  bodyParser.json(),
  isNotAuthenticated,
  validationFirstNameInput,
  validationLastNameInput,
  validationEmailInput,
  validationPasswordInput,
  confirmPassword,
  authController.postSignup
);
router.post(
  "/login",
  bodyParser.json(),
  isNotAuthenticated,
  authController.postLogin
);

module.exports = router;
