import { useRef, useEffect } from "react";

import { FaHeart } from "react-icons/fa";

import useFetch from "../../getUseFetch";
import { useContext } from "react";
import { GlobalVariales } from "../../UseContext";

import {
  PostFavCourses
} from "../../GetPostFavCoursesFunctions";

const AddFav = (id) => {
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
    console.log(id)
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
   <>
   <div>
      <span
        // className="favoriteIcon"
        ref={myFavIcon}
        id={id.id}
        onClick={AddRemoveFav}
      >
        <FaHeart />
      </span>
    </div>
   </>
  
  
  );
};

export default AddFav;
