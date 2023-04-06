const uploadGeneralFiles = require("./multerControllers/MulterSectionsCourses");
const Course = require('../Schema/Courses.schema');

exports.addSectionCours = async (req, res) => {
  const { id } = req.params;

  uploadGeneralFiles.fields([
    { name: 'sectionVideo' },
    { name: 'sectionImage' },
    { name: 'sectionPdf' },
  ])(req, res, async function (err) {
    if (err) {
      console.log(err);
      res.status(500).send('Server error');
    } else {
      const sectionVideo = req.files.sectionVideo[0].path;
 

      console.log(req.body.sectionImage)


      let sectionImage = null;
      if (req.files.sectionImage != null  && req.files.sectionImage[0]) {
        sectionImage = req.files.sectionImage[0].path;
      }
      
      let sectionPdf = null;
      if (req.files.sectionPdf != null  && req.files.sectionPdf[0]) {
        sectionPdf = req.files.sectionPdf[0].path;
      }
      


      const {
        sectionTitle,
        sectionNb,
        descriptionSectionBefor,
        descriptionSectionAfter,
        sectionNote,
        sectionYoutube
      } = req.body;

      const Newsection = {
        sectionTitle,
        sectionNb,
        descriptionSectionBefor,
        descriptionSectionAfter,
        sectionNote,
        sectionYoutube,
        sectionVideo,
        sectionImage,
        sectionPdf
      };



      try {
        const course = await Course.findById(id);
        if (!course) {
          return res.status(404).send('Course not found');
        }
        // if (!course.sections) {
        //   course.sections = [];
        // }
        course.sections.push(Newsection);
        course.sectionNb += 1; // increment the sectionNb by 1
        await course.save();
        console.log(course)
        res.status(200).json({ data: course });
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
      
    }
  });
};
