const coursesModel = require("../ModelFunctions/courses.model");
exports.availableCourses = (req, res, next) => {
  coursesModel
    .getCourses()
    .then((courses) => {
      res.json(courses);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
};
