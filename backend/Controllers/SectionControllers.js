const Course = require('../Schema/Courses.schema');
const User = require('../Schema/StudentTeacherAdmin.Schema');
const uuid = require('uuid').v4; // id for files 

exports.addIdStudentDone = async (req, res) => {
  try {
    const { userId, sectionId, courseId } = req.body;

    // Find the corresponding Course and Section documents
    const course = await Course.findById(courseId);
    const section = course.sections.id(sectionId);

    // Check if userId is already in the studentDone array
    const alreadyDone = section.studentDone.some((student) => student._id.equals(userId));
    if (alreadyDone) {
      return res.status(200).send('Section already completed!');
    }

    // Add the new userId to the studentDone array
    section.studentDone.push({ _id: userId });
    await course.save();

    // Send a response to the client-side
    res.status(200).send('Section completed!');
    console.log("id++ to section done")
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.EndAllSection = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    // Find the corresponding Course and Section documents
    const course = await Course.findById(courseId);
    const user = await User.findById(userId);

    // Check if userId is already in the graduated array
    const alreadyGraduated = course.graduated.some((student) => student._id.equals(userId));
    if (alreadyGraduated) {
      return res.status(200).send('Already graduated from course!');
    }

    // Create a new certification object
    const certification = {
      courseId : courseId ,
      userfirstName: user.firstName,
      userlastName: user.lastName,
      courseName: course.courseName,
      courseduration: course.duration,
      certificationDate: new Date().toLocaleDateString(),
      CAId: uuid(),
    };

    // Add the new certification object to the certification array
    user.certification.push(certification);
    await user.save();

    // Add the new userId to the graduated array
    course.graduated.push({ _id: userId });
    await course.save();

    // Send a response to the client-side
    res.status(200).send('Congratulations!');
    console.log("graduated++ to course done")
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};




// async function getCertificationByCourseId(userId, courseId) {
//   try {
//     const user = await User.findById(userId);
//     const certification = user.certification.find(c => c.courseId.toString() === courseId);
//     return { certification }; // return the certification object in a JSON format
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

exports.getCertification = async (req, res) => {
  const userId = req.params.userId;
  const courseId = req.params.courseId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const certification = user.certification.find(cert => cert.courseId && cert.courseId.toString() === courseId);
    if (!certification) {
      return res.status(404).json({ message: "Certification not found" });
    }

    return res.json({ certification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}




exports.getCertificationByIdUser = async (req, res) => {
  const userId = req.params.userId;
  console.log("here1222")


  try {
    const user = await User.findById(userId);
    if (!user) {
      console.log("here1")
      return res.status(404).json({ message: "User not found" });
    }

    const certification = user.certification
    if (!certification) {
      console.log("here2")
      return res.status(404).json({ message: "Certification not found" });
    }

    return res.json({certification });
  } catch (error) {
    console.error(error);
    console.log("here3")
    res.status(500).json({ message: "Server error" });
  }
}

