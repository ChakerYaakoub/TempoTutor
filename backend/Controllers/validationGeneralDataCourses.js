const formidable = require('formidable');
const uuid = require('uuid').v4; // id for Folder 



exports.validationGeneralDataCourses = (req, res, next) => {
    const CourseFolder = uuid();

 

   

    const originalReq = req;

    const form = formidable({ multiples: true });
  
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({ message: "Error parsing form data" });
      }
      if (!files || Object.keys(files).length === 0) {
        return res.status(400).json({ message: "Files are missing" });
    }
    if (!files.mainCover) {
        return res.status(400).json({ message: "mainCover file is missing" });
    }

    if (!files.secondCover) {
        return res.status(400).json({ message: "secondCover  file is missing" });
    }

    if (!files.courseIntroVideos) {
        return res.status(400).json({ message: "courseIntroVideos file is missing" });
    }
  
      // Check if required fields are present
        // Check other required fields
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
            sectionNb,
            price,

        } = fields;


        if (!courseName || !language || !courseSubject || !instructorName || !courseInstructor || !description
             || !briefDescription || !duration || !endText || !sectionNb || !price ) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        // console.log(`data ${duration}`);
        // CourseFolder =courseName.replace(/\s/g, "") + '-' + uuid();
      

    

  
   
    
    });
   
   

    req = originalReq;

    req.headers['CourseFolder'] = CourseFolder;
    next();
  };
  