import "./App.css";
import { useContext } from "react";
import { GlobalVariales } from "./UseContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  HomePage,
  SearchCourspage,
  RegisterTeachersPage,
  UserProfilePage,
  MyFavCoursesPage,
  CourseInCartPage,
  AddNewCoursPage, SectionPage, UserCertificatespage, InvoicePage, UserLearningPage, NotFound404Page
} from "./Pages/index";
import { Header, UserProfileSection, Register } from "./Sections/index";




import TeachersScreen from "./TeacherScreens/TeachersScreen";
import TeachersDetails from "./TeacherScreens/TeachersDetails";
import ProfielUser from "./UserScreen/ProfielUser";
import Cour from "./Sections/courses/Cour";
import Myorder from "./Sections/Payment/Myorder";
import Payment from "./Sections/Payment/PaymentForm";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import TeacherProfileSection from "./Sections/TeacherProfileSection/TeacherProfileSection";

import TermAndCondition from "./Components/TermAndCondition/TermAndCondition";

import MyLesson from "./Sections/TeacherProfileSection/MyLesson";


function App() {
  const { openForm, userId } = useContext(GlobalVariales);
  // console.log("gfiuasgf");
  // console.log(userId);
  // console.log("dwft");
  return (
    <div className="App">
      <Router>
        <Header />
        {openForm && <Register />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersScreen />} />
          <Route path="/teacherDetails/:id" element={<TeachersDetails />} />
          <Route path="/UserProfiel" element={<ProfielUser />} />
          <Route path="/course/:id" element={<Cour />} />
          <Route path="/myCoursesInCart" element={<Myorder />} />
          <Route path="/payment2" element={<Payment />} />
          <Route path="/searchCours" element={<SearchCourspage />} />
          <Route path="/About" element={<About />} />
          <Route path="/userProfile" element={<UserProfileSection />} />
          <Route path="/myFavCourses" element={<MyFavCoursesPage />} />

          {/* <Route path="/myCoursesInCart" element={<CourseInCartPage />} /> */}
          <Route path="/teacherProfile" element={<TeacherProfileSection />} />

          <Route path="/userLearning" element={<UserLearningPage />} />

          <Route path="/invoice/:id" element={<InvoicePage />} />


          <Route path="/userCertificates" element={<UserCertificatespage />} />

          <Route path="/Course/:id/sections/:title" element={<SectionPage />} />

          <Route path="/editTeacherProfiel" element={<RegisterTeachersPage />} />

  




          <Route path="/AddNewCours" element={<AddNewCoursPage />} />

          {/* <Route path="/TermsAndConditions" element={<TermAndCondition />} /> */}

          


          <Route path="/myLesson" element={<MyLesson/>} />
          <Route
            path="/RegisterTeachersSteps"
            element={<RegisterTeachersPage />}
          />


          <Route path="*" element={<NotFound404Page />} />

          {/* https://soundfly.com/courses/  */}
          
        </Routes>



        <Footer />
        {/* <MyFavCoursesPage /> */}
      </Router>



    </div>
  );
}

export default App;

