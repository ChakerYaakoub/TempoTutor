const Course = require("../Schema/Courses.schema");
exports.getCourses = () => {
  return new Promise((resolve, reject) => {
    Course.find()
      .sort({ rate: -1 })
      .then((courses) => {
        resolve(courses);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
