const favCoursesModel = require("../ModelFunctions/favoriteCourse.model");

exports.PostFavCourses = (req, res, next) => {
  favCoursesModel
    .postFavCourses(req.user.user_id, req.body.favCourse_id)
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.json(err);
    });
};
exports.GetFavCourses = (req, res, next) => {
  favCoursesModel
    .GetFavCourses(req.user.user_id)
    .then((favCoursesArray) => {
      res.json(favCoursesArray);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
};
