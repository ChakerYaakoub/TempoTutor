const Course = require('../Schema/Courses.schema');

async function getCourses(req, res) {
  try {
    const Courses = await Course.find({isPublish:true}).sort({ createdAt: -1 });
    res.status(200).json(Courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function getAllALlCourses(req, res) {
  try {
    const Courses = await Course.find().sort({ createdAt: -1 });
    res.status(200).json(Courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function getCoursesById(req, res) {
  try {
    const MyCourse = await Course.findById(req.params.id);
    if (!MyCourse ) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(MyCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}


async function getCoursesByIdpopulate(req, res) {
  try {
    const MyCourse = await Course.findById(req.params.id)
      .populate("courseInstructor")
      .exec();
    if (!MyCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(MyCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}




module.exports = { getCourses,getCoursesById , getCoursesByIdpopulate ,getAllALlCourses};
