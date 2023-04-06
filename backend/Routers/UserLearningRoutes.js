const router = require("express").Router();
const bodyParser = require("body-parser");
const { Allinvoice,getUserCourses,getUserGraduatedCourses,getUserCourNotDone,AllinvoiceDach } = require("../Controllers/UserLearningController");

router.get(
  "/AllPurchaseDach",
  // isAuthenticatedPayment,
  AllinvoiceDach

);

router.get(
  "/AllPurchase/:id",
  // isAuthenticatedPayment,
  Allinvoice

);

router.get(
  "/AllCourses/:id",
  // isAuthenticatedPayment,
  getUserCourses

);

router.get(
  "/GraduatedCourses/:id",
  // isAuthenticatedPayment,
  getUserGraduatedCourses

);

router.get(
  "/CourNotDone/:id",
  // isAuthenticatedPayment,
  getUserCourNotDone

);






module.exports = router;