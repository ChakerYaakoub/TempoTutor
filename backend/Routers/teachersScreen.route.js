const router = require("express").Router();

const {getTeachers,getTeachersById , getCoursesByInstructor,getAllTeachersAdmin,getAllStudentsAdmin} = require("../controllers/teachersScreenConjtroller");





router.get("/data", getTeachers ); 


router.get("/dataAdmin", getAllTeachersAdmin ); 

router.get("/dataAdminStudents", getAllStudentsAdmin ); 



router.get("/data/:id", getTeachersById ); 
router.get("/Course/Teacher/:id", getCoursesByInstructor ); 



module.exports = router;