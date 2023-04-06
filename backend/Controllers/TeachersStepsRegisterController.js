const formidable = require('formidable');
const User = require('../Schema/StudentTeacherAdmin.Schema');

exports.validationDataTeachersSteps = (req, res, next) => {

    const originalReq = req;
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({ message: "Error parsing form data" });
        }

        // Check if required files are present
        if (!files || Object.keys(files).length === 0) {
            return res.status(400).json({ message: "Files are missing" });
        }

        // Check if specific files are null
        if (!files.cv) {
            return res.status(400).json({ message: "CV file is missing" });
        }

        if (!files.profilePicture) {
            return res.status(400).json({ message: "Profile picture file is missing" });
        }

        if (!files.certificate) {
            return res.status(400).json({ message: "Certificate file is missing" });
        }

        // Check other required fields
        const {
            country,
            nationality,
            phone,
            instruments,
            languages,
            experience,
            descriptionEXP,
            about,
        } = fields;

        if (!country || !nationality || !phone || !instruments || !languages || !experience || !descriptionEXP || !about) {
            return res.status(400).json({ message: "Missing required fields" });
        }


    });
    req = originalReq;
    next();
};


exports.addAllDataStepsTeachres = (req, res, next) => {
    try {
        const IDteacher = req.params.id;
        const profilePicture = req.files.profilePicture[0].path;
        const identification = req.files.identification[0].path;
        const cv = req.files.cv[0].path;
        const certificate = req.files.certificate[0].path;

        // Find the user with the given IDteacher
        User.findById(IDteacher)
            .then((foundUser) => {
                if (!foundUser) {
                    throw new Error("User not found");
                }

                // Save the new user information under the found user IsCompleteSteps
                foundUser.firstName = req.body.firstName;
                foundUser.lastName = req.body.lastName;
                foundUser.country = req.body.country;
                foundUser.nationality = req.body.nationality;
                foundUser.phone = req.body.phone;
                foundUser.profilePicture = profilePicture;
                foundUser.identification = identification;
                foundUser.instruments = req.body.instruments;
                foundUser.languages = req.body.languages;
                foundUser.cv = cv;
                foundUser.experience = req.body.experience;
                foundUser.descriptionEXP = req.body.descriptionEXP;
                foundUser.certificate = certificate;
                foundUser.about = req.body.about;
                foundUser.IsCompleteSteps =true;

                foundUser.save()
                    .then((savedUser) => {
                        console.error("Data Submited on succ ");
                        res.status(200).json(savedUser);
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(404).json({ message: err });
                    });
            })
            .catch((err) => {
                console.error(err);
                res.status(404).json({ message: err });
            });
    } catch (err) {
        console.error(err);
        throw err;
    }
};




// Middleware function to set the IsActivated field
exports.setIsActivated = async (req, res) => {
  try {
    // Find the teacher document by ID
    const teacher = await User.findById(req.params.id);
    console.log("here")

    // Check if the teacher exists
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
      console.log("here2")
    }

    // Set the IsActivated field to the value in the request body
    teacher.IsActivated = req.body.isActived;
    console.log("here3")

    // Save the updated teacher document
    await teacher.save();

    // Set the teacher document in the response locals
    // res.locals.teacher = teacher;



    res.status(200).json(teacher.IsActivated);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};



