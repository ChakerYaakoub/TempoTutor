import "./Header.css";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import appIcon from "../../assets/images/icons8-radio-waves-30.png";
import appIcon from "../../assets/images/icons8-radio-waves-50 (1).png";
import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { LinksHeaderComponents } from "../../Components/index";
import { IsAuthenticated } from "../../isAuthenticatedFunction";
import { useContext } from "react";
import useFetch from "../../getUseFetch";
import { GlobalVariales } from "../../UseContext";
const Header = () => {
  const {
    setUserFirstName,
    setUserLastName,
    setUserId,
    userId,
    userFirstName,
    setIsLogin,
  } = useContext(GlobalVariales);
  const [linkTop , setlinkTop]=useState('')
  const { data, loading, error } = useFetch(
    "http://localhost:3000/isAuthenticated",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
      },
    }
  );
  useEffect(() => {
    if (data) {
      setUserFirstName(data[0].first_name);
      setUserLastName(data[0].last_name);
      setUserId(data[0].idUser);
      if(data[0].isTeacher===false){
     
        setlinkTop('/userProfile')
      }else{
        setlinkTop('/teacherProfile')

      }
    }
  }, [data]);

  if (data && data[0].isTeacher === false) {
    console.log(data);
  }

  const myLogoutlink = useRef();
  const myProfileLink = useRef();
  const myPhoneNavBar = useRef();
  const myDropDown = useRef();
  const UserAutenticatedImg = useRef();
  const userImg = useRef();
  const toggleDropdownOnSmallScreen = (e) => {
    myPhoneNavBar.current.classList.toggle("showListSmallScreen");
  };

  IsAuthenticated((data) => {
    if (data !== "Not authenticated") {
      myLogoutlink.current.classList.add("showLogouProfileLinkOnSmallScreen");
      myProfileLink.current.classList.add("showLogouProfileLinkOnSmallScreen");
      UserAutenticatedImg.current.classList.add("showUserProfileOnheader");
      setUserFirstName(data[0].first_name);
      setUserId(data[0].idUser);
      setUserLastName(data[0].last_name);
      // console.log("sarsouuur");
      // console.log(userId);
      // console.log(userFirstName);
      // console.log("sarsour");
    } else {
      myLogoutlink.current.classList.remove(
        "showLogouProfileLinkOnSmallScreen"
      );
      myProfileLink.current.classList.remove(
        "showLogouProfileLinkOnSmallScreen"
      );
      UserAutenticatedImg.current.classList.remove("showUserProfileOnheader");
    }
  });
  const navigate = useNavigate();
  const removeTokenLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("favCourses");
    localStorage.removeItem("userInfo");

    setUserFirstName("");
    setUserLastName("");
    setUserId("");
    myLogoutlink.current.classList.remove("showLogouProfileLinkOnSmallScreen");
    myProfileLink.current.classList.remove("showLogouProfileLinkOnSmallScreen");
    UserAutenticatedImg.current.classList.remove("showUserProfileOnheader");
    navigate("/");
  };

  window.addEventListener("click", function () {
    myDropDown.current.classList.remove("show");
  });

  function remainDropDown(e) {
    e.stopPropagation();
  }
  const toggleDropdown = (e) => {
    e.stopPropagation();
    myDropDown.current.classList.toggle("show");
  };

  return (
    <>
      <div className="desktopNavBar">
        <div className="navBar">
          <div>
            <Link to="/" className="appNameHeader">
              <div className="appNameLogo">
                <img src={appIcon} className="applicationIcon" alt="logo" />
                <span className="appNameHeader">TempoTutor</span>
              </div>
            </Link>
            <ul className="rightPartHeader">
              <LinksHeaderComponents link="/" myLink="Home" />
              <LinksHeaderComponents link="/teachers" myLink="Teachers" />
              <li>
                <Link to="/searchCours" className="searchLi">
                  <FaSearch />
                  <span className="searchSpan">SEARCH</span>
                </Link>
              </li>
              <LinksHeaderComponents link="/searchCours" myLink="All Courses" />
            </ul>
          </div>
          <div className="dropDown" ref={UserAutenticatedImg}>
            <div
              className="userIconHeader"
              onClick={toggleDropdown}
              ref={userImg}
            >
              <FaUserCircle />
              <div
                ref={myDropDown}
                className="dropdown-content"
                id="dropdown"
                onClick={remainDropDown}
              >
                <Link
                  to={linkTop}
                  // onClick={toggleDropdown}
                >
                  Profile
                </Link>

                <div className="logoutLargScreen" onClick={removeTokenLogout}>
                  Logout
                </div>
              </div>
            </div>
          </div>
          {/* <UserAuthenticatedOnHeader /> */}
        </div>
      </div>
      <div className="phoneNavBar">
        <div className="navBar">
          <div>
            <Link to="/" className="appNameHeader">
              <div className="appNameLogo">
                <img src={appIcon} className="applicationIcon" alt="logo" />
                <span className="appNameHeader">TempoTutor</span>
              </div>
            </Link>
            <div className="FaBars" onClick={toggleDropdownOnSmallScreen}>
              <FaBars />
            </div>
          </div>
        </div>
        <div className="listSmallScreen" ref={myPhoneNavBar}>
          <Link to="/teachers">TEACHERS</Link>

          <Link to="/searchCours" className="searchLi">
            <span className="searchSpan">SEARCH</span>
          </Link>
          <Link to="/searchCours">All Courses</Link>
          {/* <a className="ProfileUser" href="/userProfile" ref={myProfileLink}>
            Profile
          </a> */}
          <Link
            to={
              data && data.length > 0 && !data[0].isTeacher
                ? "/userProfile"
                : "/teacherProfile"
            }
            className="ProfileUser"
            ref={myProfileLink}
            onClick={toggleDropdown}
          >
            Profile
          </Link>
          <div
            className="logoutUser"
            ref={myLogoutlink}
            onClick={removeTokenLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
