const User = require("../Schema/StudentTeacherAdmin.Schema");

exports.postFavCourses = (user_id, favCourses_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id })
      .then((user) => {
        if (!user) {
          reject("User not found");
        }
        const index = user.favCourses_id.findIndex((id) =>
          id.equals(favCourses_id)
        );
        let update = {};
        if (index === -1) {
          update = { $addToSet: { favCourses_id: favCourses_id } };
        } else {
          update = { $pull: { favCourses_id: favCourses_id } };
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
// exports.postUserWatchList = (user_id, movieSeries_id) => {
//   return new Promise((resolve, reject) => {
//     connectDB
//       .geInstance()
//       .then(() => {
//         return User.findOne({ _id: user_id }).then((user) => {
//           const index = user.watchlist_id.findIndex((id) =>
//             id.equals(movieSeries_id)
//           );
//           let update = {};
//           if (index === -1) {
//             update = { $addToSet: { watchlist_id: movieSeries_id } };
//           } else {
//             update = { $pull: { watchlist_id: movieSeries_id } };
//           }
//           User.findByIdAndUpdate(
//             user_id,
//             update,
//             { new: true },
//             (error, updatedUser) => {
//               if (error) {
//                 return reject(error);
//               }
//               resolve(updatedUser);
//             }
//           );
//         });
//       })
//       .catch((err) => {
//         console.log(err);

//         reject(err);
//       });
//   });
// };
exports.GetFavCourses = (user_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id })
      .populate("favCourses_id")
      .select("favCourses_id")
      .then((favCourses) => {
        const favCoursesArray = favCourses.favCourses_id;
        if (favCoursesArray.length === 0) {
          reject("there is nothing");
        } else {
          resolve(favCoursesArray);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
