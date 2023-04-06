const User = require("../Schema/StudentTeacherAdmin.Schema");
const bcrypt = require("bcryptjs");
const { createToken } = require("../Controllers/UserAuthenticatioStatus");
const loginFunction = require("./auth.model");

// exports.createNewUser = (firstName, lastName, email, password) => {
//   return new Promise((resolve, reject) => {
//     console.log("bla");
//     User.findOne({ email: email })
//       .then((user) => {
//         if (user) {
//           reject("email is used");
//         } else {
//           return bcrypt.hash(password, 10);
//         }
//       })
//       .then((hashedPassword) => {
//         let user = new User({
//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           password: hashedPassword,
//         });
//         return user.save();
//       })
//       .then(() => {
//         console.log("bli");
//         resolve();
//       })
//       .catch((err) => {
//         console.log(err);
//         reject(err);
//       });
//   });
// };
exports.createNewUser = (firstName, lastName, email, password, role) => {
  return new Promise((resolve, reject) => {
    let isTeacher = role === "teacher";
    console.log(isTeacher);
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          reject("email is used");
        } else {
          return bcrypt.hash(password, 10);
        }
      })
      .then((hashedPassword) => {
        let user = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword,
          isTeacher: isTeacher,
        });
        return user.save();
      })
      .then(() => {
        User.findOne({ email: email })
          .then((user) => {
            if (!user) {
              reject("email not found");
            } else {
              return bcrypt.compare(password, user.password).then((same) => {
                if (!same) {
                  reject("password isn't correct");
                } else {
                  const token = createToken(user);

                  resolve(token);
                }
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })

      .catch((err) => {
        reject(err);
      });
  });
};

exports.login = (email, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          reject({ emailNotFound: "email not found" });
        } else {
          return bcrypt.compare(password, user.password).then((same) => {
            if (!same) {
              reject({ incorrectPassword: "password isn't correct" });
            } else {
              const token = createToken(user);
              resolve(token);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
