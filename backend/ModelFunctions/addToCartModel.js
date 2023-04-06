const User = require("../Schema/StudentTeacherAdmin.Schema");

exports.addCourseToCart = (user_id, coursesInCart) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id })
      .then((user) => {
        if (!user) {
          reject("User not found");
        }
        const index = user.CoursesInCart_id.findIndex((id) =>
          id.equals(coursesInCart)
        );
        let update = {};
        if (index === -1) {
          update = { $addToSet: { CoursesInCart_id: coursesInCart } };
        } else {
          reject("already exist in your cart");
        }
        User.findByIdAndUpdate(
          user_id,
          update,
          { new: true },
          (error, updatedUser) => {
            if (error) {
              return reject(error);
            }
            resolve(updatedUser);
          }
        );
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
exports.removeCourseFromCart = (user_id, course_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id })
      .then((user) => {
        if (!user) {
          reject("User not found");
        }
        const index = user.CoursesInCart_id.findIndex((id) =>
          id.equals(course_id)
        );
        if (index === -1) {
          reject("Course not found in cart");
        } else {
          user.CoursesInCart_id.splice(index, 1);
          user.save((error, updatedUser) => {
            if (error) {
              reject(error);
            }
            resolve(updatedUser);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

exports.GetCoursesInCart = (user_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id })
      .populate("CoursesInCart_id")
      .select("CoursesInCart_id")
      .then((coursesInCart) => {
        const coursesInCartArray = coursesInCart.CoursesInCart_id;
        if (coursesInCartArray.length === 0) {
          reject("there is nothing in your cart");
        } else {
          resolve(coursesInCartArray);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
