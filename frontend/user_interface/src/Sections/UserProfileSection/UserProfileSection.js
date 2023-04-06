import "./UserProfileSection.css";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle, FaCertificate, FaHeart } from "react-icons/fa";

import { MdClass } from "react-icons/md";

import { UserProfileInfoComponent } from "../../Components/index";
const UserProfileSection = () => {
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
          <div className="userInfoDiv">
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
      </div>
    </>
  );
};

export default UserProfileSection;
