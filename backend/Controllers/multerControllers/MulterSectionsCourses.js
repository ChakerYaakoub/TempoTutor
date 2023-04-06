
// const multer = require('multer');
// const fs = require('fs');
// const uuid = require('uuid').v4; // id for files 



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // console.log(req.headers)
//     try {
 
//           const uploadPath = `uploads/Courses/${req.headers['course-folder-name']}/sections/sections${req.body.sectionNumber}`;
//       fs.mkdirSync(uploadPath, { recursive: true });
    
//       cb(null, uploadPath);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   },
//     filename: (req, file, cb) => {
//       try {
//         cb(null, `${Date.now()}-${uuid()}-${file.originalname}`);
//       } catch (error) {
//         console.error("Error:", error.message);
//       }
//     },
//   });
// const uploadFilesSection = multer({ storage });



// module.exports = uploadFilesSection;








const multer = require('multer');
const fs = require('fs');
const uuid = require('uuid').v4;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create the destination directory if it does not exist
    const uploadPath = `uploads/Courses/${req.headers['course-folder-name']}/sections/sections${req.body.sectionNb}`;
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${uuid()}-${file.originalname}`);
  },
});

const uploadGeneralFiles = multer({
    storage
    // fileFilter: (req, file, cb) => {

        
    //   if (file.fieldname === 'sectionVideo' && file.mimetype !== 'video/mp4') {
    //     return cb(new Error('Invalid video format'));
    //   }else{
    //     return cb(null, true);
    //   }
   
  
    //   if (file.fieldname === 'sectionPdf') {
    //     // Check if the file exists before processing it with Multer
    //     if (!file.originalname) {
    //       console.log('No PDF file provided');
    //       return cb(null, true); // Skip processing the file
    //     }
    //   }
  
    //   if (file.fieldname === 'sectionImage') {
    //     // Check if the file exists before processing it with Multer
    //     if (!file.originalname) {
    //       console.log('No image file provided');
    //       return cb(null, true); // Skip processing the file
    //     }
    //   } 
    // },
  });
  
module.exports = uploadGeneralFiles;



















































// const multer = require('multer');
// const fs = require('fs');
// const uuid = require('uuid').v4;

// const storage = multer.diskStorage({

//     destination: (req, file, cb) => {
//       // Define the destination directory based on the type of file
//     //   let destDir = '';
   
  
//     //   if (file.fieldname === 'sectionVideo') {
//     //     destDir = 'videos';
//     //   } else if (file.fieldname === 'sectionPdf') {
//     //     destDir = 'pdfs';
//     //   } else if (file.fieldname === 'sectionImage') {
//     //     destDir = 'images';
//     //   }
  
//       // Create the destination directory if it does not exist
//       const uploadPath = `uploads/Courses/${req.headers['course-folder-name']}/sections/sections${req.body.sectionNumber}`;
//       if (!fs.existsSync(uploadPath)) {
//         fs.mkdirSync(uploadPath, { recursive: true });
//       }
  
//       cb(null, uploadPath);
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${uuid()}-${file.originalname}`);
//     },
//   });

  
// const uploadFilesSection = multer({
  
//   storage,
//   fileFilter: (req, file, cb) => {
//     // if (!path) {
//     //     return cb(null, false);
//     //   }
//     if (file.fieldname === 'sectionVideo' && file.mimetype !== 'video/mp4') {
//         return cb(new Error('Invalid video format'));
//       }

//     if (file.fieldname === 'sectionPdf') {
//       // Check if the file exists before processing it with Multer
//       if (!file.originalname) {
//         console.log('No PDF file provided');
//         return cb(null, true); // Skip processing the file
//       }
//     //   if (file.mimetype !== 'application/pdf') {
//     //     return cb(new Error('Invalid PDF format'));
//     //   }
//     }

//     if (file.fieldname === 'sectionImage') {
//       // Check if the file exists before processing it with Multer
//       if (!file.originalname) {
//         console.log('No image file provided');
//         return cb(null, true); // Skip processing the file
//       }
//     //   fs.access(file.path, fs.F_OK, (err) => {
//     //     if (err) {
//     //       console.log(`Image file does not exist: ${file.path}`);
//     //       return cb(null, false); // Skip processing the file
//     //     }
//     //     // cb(null, true);
//     //   });
//     } 
//     // else {
//     //   cb(null, true);
//     // }
//   },
// });

// module.exports = uploadFilesSection;
