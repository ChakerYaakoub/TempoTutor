const authModel = require("../ModelFunctions/auth.model");
const validationResult = require("express-validator").validationResult;
// const { validationFirstNameInput } = require("./validation");
let errObj = {};
let errObjLogin = {};
const jwt = require("jsonwebtoken");

// exports.postSignup = (req, res, next) => {
//   if (validationResult(req).isEmpty()) {
//     authModel
//       .createNewUser(
//         req.body.firstName,
//         req.body.lastName,
//         req.body.email,
//         req.body.password
//       )
//       .then(() => {
//         res.json("successfully create a user");
//       })
//       .catch((err) => {
//         errObj.usedEmail = err;
//         res.json(errObj);
//         console.log(errObj);
//       });
//   } else {
//     validationResult(req)
//       .array()
//       .forEach(function (li) {
//         if (li.param === "email") {
//           errObj.invalidEmail = li.msg;
//         } else if (li.param == "password") {
//           errObj.invalidPassword = li.msg;
//         } else if (li.param === "firstName") {
//           errObj.invalidFisrtName = li.msg;
//         } else if (li.param === "lastName") {
//           errObj.invalidLastName = li.msg;
//         } else if (li.param === "confirmPassword") {
//           errObj.passconfDontMatch = li.msg;
//         }
//       });
//     res.json(errObj);
//     console.log(validationResult(req).array());
//   }
// };
exports.postSignup = (req, res, next) => {
  if (validationResult(req).isEmpty()) {
    authModel
      .createNewUser(
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password,
        req.body.checkedRole
      )
      .then((token) => {
        res.json({ token: token });
      })
      .catch((err) => {
        errObj.usedEmail = err;
        res.json(errObj);
        console.log(errObj);
      });
  } else {
    validationResult(req)
      .array()
      .forEach(function (li) {
        if (li.param === "email") {
          errObj.invalidEmail = li.msg;
        } else if (li.param == "password") {
          errObj.invalidPassword = li.msg;
        } else if (li.param === "firstName") {
          errObj.invalidFisrtName = li.msg;
        } else if (li.param === "lastName") {
          errObj.invalidLastName = li.msg;
        } else if (li.param === "confirmPassword") {
          errObj.passconfDontMatch = li.msg;
        }
      });
    res.json(errObj);
    console.log(validationResult(req).array());
  }
};
exports.postLogin = (req, res, next) => {
  authModel
    .login(req.body.email, req.body.password)
    .then((token) => {
      res.json({ token: token });
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
      // res.redirect("/login");
    });
};
