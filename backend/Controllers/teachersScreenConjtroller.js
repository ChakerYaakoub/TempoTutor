const User = require('../Schema/StudentTeacherAdmin.Schema');
const Course = require('../Schema/Courses.schema');

async function getTeachers(req, res) {
  try {
    const teachers = await User.find({ isTeacher: true ,IsCompleteSteps:true,IsActivated:true }).sort({ createdAt: -1 });
    res.status(200).json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function getAllTeachersAdmin(req, res) {
  try {
    const teachers = await User.find({ isTeacher: true }).sort({ createdAt: -1 });
    res.status(200).json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function getAllStudentsAdmin(req, res) {
  try {
    const users = await User.find({ isAdmin: false }).sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}




async function getTeachersById(req, res) {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher || !teacher.isTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}



async function getCoursesByInstructor(req, res) {
  try {
    const courses = await Course.find({ courseInstructor: req.params.id });
    if (!courses) {
      return res.status(404).json({ message: 'No courses found for this instructor.' });
    }
    res.status(200).json({ courses });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}



module.exports = { getTeachers,getTeachersById ,getCoursesByInstructor,getAllTeachersAdmin,getAllStudentsAdmin};

