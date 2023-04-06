const router = require("express").Router();
const bodyParser = require("body-parser");
// const { isAdmin } = require("../controllers/isAdminOrUser");
const { isAuthenticated } = require("../Controllers/UserAuthenticatioStatus");
const favCoursesController = require("../Controllers/favoriteCourse.controller");
router.post(
  "/favCourses",
  bodyParser.json(),
  isAuthenticated,
  favCoursesController.PostFavCourses
);

router.get(
  "/favCourses",
  bodyParser.json(),
  isAuthenticated,
  favCoursesController.GetFavCourses
);

module.exports = router;
