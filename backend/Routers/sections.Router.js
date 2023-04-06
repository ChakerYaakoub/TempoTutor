const router = require("express").Router();
const { addIdStudentDone ,EndAllSection,getCertification,getCertificationByIdUser } = require("../controllers/SectionControllers");

router.post( "/setSectionCompleted", addIdStudentDone );


router.post( "/EndAllSection", EndAllSection );

// /users/:userId/certification/:courseId

router.get( "/users/:userId/certification/:courseId", getCertification );

router.get( "/users/:userId", getCertificationByIdUser );




module.exports = router;