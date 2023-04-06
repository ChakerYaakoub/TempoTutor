const router = require("express").Router();
const bodyParser = require("body-parser");
const coursesController = require("../Controllers/courses.controller");

router.get(
  "/allCourses",
  bodyParser.json(),
  coursesController.availableCourses
);
module.exports = router;
