const router = require("express").Router();
const { validationDataTeachersSteps, addAllDataStepsTeachres,setIsActivated } = require("../controllers/TeachersStepsRegisterController");
const upload = require("../controllers/multerControllers/AddFilesSetpsTeachers");


//steps register teashers Add data by id : 
router.post(
    "/data/:id",
    validationDataTeachersSteps,
    upload.fields([
      { name: "profilePicture" },
      { name: "identification" },
      { name: "cv" },
      { name: "certificate" },
    ]),
    addAllDataStepsTeachres
  );


  router.post(
    "/isActived/:id",

    setIsActivated
  );








module.exports = router;