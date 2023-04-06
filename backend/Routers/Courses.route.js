const router = require("express").Router();

const { getCourses,getCoursesById,getCoursesByIdpopulate,getAllALlCourses } = require("../controllers/AllCoursesController");


router.get("/data", getCourses ); 

router.get("/dataAdmin", getAllALlCourses ); 


router.get("/data/:id", getCoursesById ); 

router.get("/dataPopi/:id", getCoursesByIdpopulate ); 

router.get('/teacher/:id/courses', async (req, res) => {
    try {
      const courses = await courses.find({ courseInstructor: req.params.id });
      res.json(courses);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

module.exports = router;