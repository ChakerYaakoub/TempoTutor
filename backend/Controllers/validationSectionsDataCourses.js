// validationSectionsDataCourses.js


const formidable = require('formidable');
const uuid = require('uuid').v4; // id for Folder 



exports.validationSectionsDataCourses = (req, res, next) => {
    const originalReq = req;
    const form = formidable({ multiples: true });
  
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({ message: "Error parsing form data" });
      }
      if (!files || Object.keys(files).length === 0) {
        console.log("missing Files" );
        return res.status(400).json({ message: "Files are missing" });
      }
      console.log(files)
  
      // Check if sections are present and they are not empty
      const sections = fields.sections;
      if (!sections || !Array.isArray(sections) || sections.length === 0) {
        return res.status(400).json({ message: "No sections found" });
      }
  
      // Loop through each section and check if required fields are present
      
      for (const section of sections) {
        const {
          titleSection,
          sectionNumber,
          descriptionSectionBefor,
          descriptionSectionAfter,
          sectionNote,
        } = section;
  
        if (
          !titleSection ||
          !sectionNumber ||
          !descriptionSectionBefor ||
          !descriptionSectionAfter ||
          !sectionNote
        ) {
        
          return res.status(400).json({ message: "Missing required fields in section" });
        }
      }
    });
  
    req = originalReq;
 
  
    next();
  };
  