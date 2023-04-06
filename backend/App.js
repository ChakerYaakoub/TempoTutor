const express = require("express");
const app = express();
const connection = require("./connectDB");
const adminTools = require("./Routers/adminRoutes/adminTools");
require("dotenv/config");
const path = require("path");
const bodyParser = require("body-parser");
const authRouter = require("./Routers/auth.router"); 

const payment = require("./Routers/payment.route");


const favCoursesRouter = require("./Routers/favoriteCourses.router");
const coursesRouter = require("./Routers/courses.router");
const coursesInCartRouter = require("./Routers/addToCartRouter");

const isAutenticatedRouter = require("./Routers/isAuthenticated.router"); 
const TeachersStepsRegister = require("./Routers/TeachersStepsRegister.router"); 
const teachersScreen = require("./Routers/teachersScreen.route");
const Courses = require("./Routers/Courses.route");
const addNewCours = require("./Routers/addNewCours.route");
const Sections = require("./Routers/sections.Router"); 
const UserLearning = require("./Routers/UserLearningRoutes"); 



var cors = require("cors");
const port = process.env.PORT || 3000;
const Course = require("./Schema/Courses.schema");
//some require
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // chaker
app.use("/", isAutenticatedRouter);
app.use("/", authRouter);

//teachersScreen 
app.use("/teachersScreen", teachersScreen);


//Courses  
app.use("/Courses", Courses);


//addNewCours 
app.use("/addNewCours", addNewCours); 

app.use("/UserLearning", UserLearning); 


//sections

app.use("/Sections", Sections); 



app.use("/TeachersStepsRegister", TeachersStepsRegister);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", favCoursesRouter);
app.use("/", coursesInCartRouter);



/////All  Routes

//payments 

app.use("/", payment);

//admin Route
app.use("/admin", adminTools);
app.use("/", coursesRouter);
async function createCourse() {
  const course = new Course({
    courseName: "MERN STACK",
    courseSubject: "Guitar",
    courseRate: 4.7,
    coursePrice: 88,
  });
  await course.save();
}
// createCourse();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  connection.connectDB();
});
