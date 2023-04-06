import React, { useState, useEffect, useContext } from "react";
import "../UserProfileSection/UserProfileSection.css";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle, FaCertificate, FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { AllAlert, UserProfileInfoComponent } from "../../Components/index";
import { useNavigate } from 'react-router-dom';


import { RiErrorWarningFill } from "react-icons/ri";





const TeacherProfileSection = () => {

  const navigate = useNavigate();



  console.log(JSON.parse(localStorage.getItem("userInfo"))[0])



  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("userInfo"))[0].isCompleteSteps && JSON.parse(localStorage.getItem("userInfo"))[0].isTeacher) {
      navigate(`/RegisterTeachersSteps`)
    }


    if (!JSON.parse(localStorage.getItem("userInfo"))[0].isTeacher) {
      navigate(`/userProfile`)
    }


    if (!JSON.parse(localStorage.getItem("userInfo"))[0]) {
      navigate(`/`)
    }

  },
    [JSON.parse(localStorage.getItem("userInfo"))[0]
    ]);



  if (JSON.parse(localStorage.getItem("userInfo"))[0].isCompleteSteps
  && JSON.parse(localStorage.getItem("userInfo"))[0].isTeacher)

    return (
      <>
        <div className="contentUserProfile">
          <div className="imgFirstNameLastNameUser">
            <span className="userProfileImage">
              <FaUserCircle />
            </span>

            <span className="userFirstNameLastName">
              {JSON.parse(localStorage.getItem("userInfo"))[0].first_name}{" "}
              {JSON.parse(localStorage.getItem("userInfo"))[0].last_name}
            </span>
          </div>
          <div className="personalProfileDivContent">
            <p className="personalProfileParag">
              Explore your personal profile to discover how you can improve
              yourself personally and professionally.
            </p>
            <p>
              By analyzing your strengths, weaknesses, and areas for development,
              you can create a plan to enhance your personal and professional
              skills, and ultimately achieve your goals.
            </p>
          </div>

          <div className="contentUserInfoDiv">
            <div className="teacherInfoDiv">
              <UserProfileInfoComponent
                link="/myFavCourses"
                icon={<FaHeart />}
                parag="My favorites"
              />
              <UserProfileInfoComponent
                link="/myCoursesInCart"
                icon={<FaCartPlus />}
                parag="My Cart"
              />
              <UserProfileInfoComponent
                link="/userLearning"
                icon={<MdClass />}
                parag="My Learning"
              />
              <UserProfileInfoComponent
                link="/userCertificates"
                icon={<FaCertificate />}
                parag="My Certificates"
              />
            </div>
          </div>

          {JSON.parse(localStorage.getItem("userInfo"))[0].isActivated && <>

            <div className="teacherInfoDiv">

              <UserProfileInfoComponent
                link="/AddNewCours"
                icon={<i className="fa fa-plus-square" aria-hidden="true"></i>}
                parag="Add New Course"
              />
              <UserProfileInfoComponent
                link="/myLesson"
                icon={<i className="fa fa-book" aria-hidden="true"></i>}
                parag="My Lesson"
              />

              <UserProfileInfoComponent
                link="/editTeacherProfiel"
                icon={<i className="fa fa-user" aria-hidden="true"></i>}
                parag="Edit Profiel"
              />

              <UserProfileInfoComponent
                link="/teacherReviews"
                icon={<i className="fa fa-star" aria-hidden="true"></i>}
                parag="My Reviews"
              />

            </div>

          </>}


          {!JSON.parse(localStorage.getItem("userInfo"))[0].isActivated &&
            <>
              <br /><br />


              <AllAlert type={"warning"} message={<>
                <div className="AlertNotaCTIVETED">
                  <p>    <RiErrorWarningFill /> BTDUBS  </p>
                  we regret to inform you that your teacher account
                  <span> is not yet activated. </span> <br />

                  Our team is currently reviewing your information, and once your account has been approved,
                  you will be able to access all of the teacher tools, such as adding a
                  new course... <br />
                  We appreciate your patience and understanding in this matter.
                </div>


              </>

              } timeout={"1000000"} />





            </>}


        </div>
      </>
    );
};

export default TeacherProfileSection;
