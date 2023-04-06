const router = require("express").Router();
const bodyParser = require("body-parser");
const { isAuthenticated } = require("../Controllers/UserAuthenticatioStatus");
const CoursesInCartController = require("../Controllers/addToCartController");
router.post(
  "/addcourses",
  bodyParser.json(),
  isAuthenticated,
  CoursesInCartController.addCoursesToCart
);
router.post(
  "/removeCourses",
  bodyParser.json(),
  isAuthenticated,
  CoursesInCartController.removeCoursesFromCart
);

router.get(
  "/coursesInCart",
  bodyParser.json(),
  isAuthenticated,
  CoursesInCartController.GetCourses
);

module.exports = router;
