
const multer = require('multer');
const fs = require('fs');
const uuid = require('uuid').v4; // id for files 



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      try {
        const teacherID = req.params.id.replace(/\s/g, "");
        // console.log("Uploading files...");
        const uploadPath = `uploads/teachers_Infos/${teacherID}`;
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
const upload = multer({ storage });

module.exports = upload;

