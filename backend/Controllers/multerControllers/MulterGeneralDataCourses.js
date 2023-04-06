
const multer = require('multer');
const fs = require('fs');
const uuid = require('uuid').v4; // id for files 



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(req.headers)
    try {
      const CourseFolder =  req.headers.CourseFolder
      console.log("Uploading files...");
      const uploadPath = `uploads/Courses/${req.body.courseName.replace(/\s/g, "")}${CourseFolder}/general_info`;
      fs.mkdirSync(uploadPath, { recursive: true });
    
      cb(null, uploadPath);
    } catch (error) {
      console.error("Error:", error.message);
    }
  },
    filename: (req, file, cb) => {
      try {
        cb(null, `${Date.now()}-${uuid()}-${file.originalname}`);
      } catch (error) {
        console.error("Error:", error.message);
      }
    },
  });
const uploadGeneralFiles = multer({ storage });

module.exports = uploadGeneralFiles;

