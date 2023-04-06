import { useRef, useEffect } from "react";
import testSearch from "../../assets/images/testSearch.jpeg";
import { GoPerson } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { AddToCartIcon } from "../index";
import { FaCartPlus } from "react-icons/fa";
import useFetch from "../../getUseFetch";
import { useContext } from "react";
import { GlobalVariales } from "../../UseContext";
import { Link } from 'react-router-dom';
import {
  PostFavCourses,
  GetFavCourses,
  AddFavCoursesToAnArray,
} from "../../GetPostFavCoursesFunctions";
const DivCors = (props) => {
  const { openSignUpForm, setOpenSignUpForm, openForm, setOpenform } =
    useContext(GlobalVariales);
  const myFavIcon = useRef();

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
    if (data !== "Not authenticated") {
      if (myFavIcon.current && localStorage.getItem("favCourses")) {
        let myfavCourses = localStorage.getItem("favCourses");
        let favCourses = JSON.parse(myfavCourses);
        let isInFavCourses1 = favCourses.includes(myFavIcon.current.id);

        if (isInFavCourses1) {
          myFavIcon.current.classList.add("chosenCourse");
        } else {
          myFavIcon.current.classList.remove("chosenCourse");
        }
      } else if (myFavIcon.current === false) {
        myFavIcon.current.classList.remove("chosenCourse");
      }
    } else if (data === "Not authenticated") {
      console.log("fdjrh");
      myFavIcon.current.classList.remove("chosenCourse");
    }
  }, [localStorage.getItem("favCourses")]);

  const AddRemoveFav = () => {
    if (data !== "Not authenticated") {
      if (myFavIcon.current) {
        myFavIcon.current.classList.toggle("chosenCourse");
        PostFavCourses(myFavIcon.current.id);
        let myfavCourses = JSON.parse(localStorage.getItem("favCourses"));
        if (myFavIcon.current) {
          if (myfavCourses.includes(myFavIcon.current.id)) {
            const index = myfavCourses.indexOf(myFavIcon.current.id);
            if (index != -1) {
              myfavCourses.splice(index, 1);
            }
          } else {
            if (myFavIcon.current && myFavIcon.current.id) {
              myfavCourses.push(myFavIcon.current.id);
            }
          }
          localStorage.setItem("favCourses", JSON.stringify(myfavCourses));
        }
      }
    } else {
      setOpenSignUpForm(true);
      setOpenform(true);
    }
  };

  return (
    <div className="MyCour">
      <span
        className="favoriteIcon"
        ref={myFavIcon}
        id={props.iconId}
        onClick={AddRemoveFav}
      >
        <FaHeart />
      </span>
      {/* <span     className="addToCartIcon">    <AddToCartIcon iconId={props.iconId} /></span> */}
   

      <Link  to={`/course/${props.iconId}`} >
      {/* {`http://localhost:3000/${data.mainCover}`} */}
        {/* <img src={testSearch} alt="Avatar" className="image" /> */}
        <img src={`http://localhost:3000/${props.mainCover}`} alt="Avatar" className="Mycourseimage" />

        <div className="showDefault ">
          <p className="titleCours">{props.courseName}</p>

          <div className="hiidAfter">
            <p className="teacherCours"> with {props.instructorName}</p>
            <div className="PriceCours">
              <div className="totalV">
                {" "}
                <span>
                  <GoPerson />{" "}
                </span>{" "}
                {props.numberOfStudents}{" "}
              </div>
              <div className="price"> {props.price} $</div>
            </div>
          </div>

          <div className="chowAfter">
            <p className="descriptionCours">{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DivCors;
