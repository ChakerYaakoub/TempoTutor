const express = require('express');
const router = express.Router();
const { validationGeneralDataCourses } = require("../controllers/validationGeneralDataCourses");
const uploadGeneralFiles = require("../controllers/multerControllers/MulterGeneralDataCourses");
 const {validationSectionsDataCourses} =require("../controllers/validationSectionsDataCourses");
 const {addSectionCours} =require("../controllers/ForEachSectionAdd");
 

const { createCourse,setisPublish } = require("../controllers/createCourseController");


// Create a new course
router.post(
    "/cours", 
    validationGeneralDataCourses,
      uploadGeneralFiles.fields([
        { name: "mainCover" },
        { name: "secondCover" },
        { name: "courseIntroVideos" },

    ]), 
    createCourse);

 
    
 

    router.post('/Sections/:id',addSectionCours );



    router.post(
        "/isPublish/:id",
    
        setisPublish
      );
    


// validationSectionsDataCourses,

    //   router.post('/Sections/:id', async (req, res) => {
    //     const { id } = req.params;
    //     console.log('i am here', id);
    //     console.log(` Folder is : ${req.headers['course-folder-name']}`)
    //     try {
    //         res.status(200).json({id });
    //     } catch (error) {
    //       console.error(error);
    //       res.status(500).send('Server error');
    //     }
    //   });

module.exports = router;
