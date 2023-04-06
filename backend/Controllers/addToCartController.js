const addRemoveToFromCart = require("../ModelFunctions/addToCartModel");

exports.addCoursesToCart = (req, res, next) => {
  addRemoveToFromCart
    .addCourseToCart(req.user.user_id, req.body.course_id)
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.json(err);
    });
};
exports.removeCoursesFromCart = (req, res, next) => {
  addRemoveToFromCart
    .removeCourseFromCart(req.user.user_id, req.body.course_id)
    .then((coursesInCart) => {
      res.json(coursesInCart);
    })
    .catch((err) => {
      res.json(err);
    });
};
exports.GetCourses = (req, res, next) => {
  addRemoveToFromCart
    .GetCoursesInCart(req.user.user_id)
    .then((coursesIncart) => {
      res.json(coursesIncart);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
};
