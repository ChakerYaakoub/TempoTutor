const Course = require('../Schema/Courses.schema');

exports.createCourse = async (req, res) => {
  const mainCover = req.files.mainCover[0].path;
  const secondCover = req.files.secondCover[0].path;
  const courseIntroVideos = req.files.courseIntroVideos[0].path;
  const CourseFolder = req.headers.CourseFolder
  try {
    const {
      courseName,
      language,
      courseSubject,
      instructorName,
      courseInstructor,
      description,
      briefDescription,
      duration,
      endText,
      courseLevels,
      sectionNb,
      price
    } = req.body;
    
    const courseFolderName = `${req.body.courseName.replace(/\s/g, "")}${CourseFolder}`;

    const course = new Course({
      courseName,
      mainCover,
      secondCover,
      courseIntroVideos,
      language,
      courseSubject,
      instructorName,
      courseInstructor,
      description,
      briefDescription,
      duration,
      endText,
      sectionNb,
      courseLevels,
      price,
      courseFolderName
    });

    const savedCourse = await course.save();
    const courseId = savedCourse._id;
    

    res.status(200).json({ courseId, courseFolderName });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};


// .then(data => {
//   console.log(data.courseId);
//   console.log(data.courseFolderName);
// })


exports.setisPublish= async (req, res) => {
  try {
    // Find the teacher document by ID
    const course = await Course.findById(req.params.id);
    console.log("here")

    // Check if the teacher exists
    if (!course) {
      return res.status(404).json({ message: "course not found" });
      console.log("here2")
    }

    // Set the IsActivated field to the value in the request body
    course.isPublish= req.body.isPublish;
    console.log("here3")

    // Save the updated teacher document
    await course.save();

    // Set the teacher document in the response locals
    // res.locals.teacher = teacher;



    res.status(200).json(course.isPublish);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

