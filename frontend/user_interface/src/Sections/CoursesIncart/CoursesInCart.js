import "./CoursesInCart.css";
import { useRef, useState, useEffect } from "react";
import axios from "../../PostUseFetch";
import useFetch from "../../getUseFetch";
import { DivCors } from "../../Components/index";
import { FaTrashAlt } from "react-icons/fa";

const CoursesInCart = () => {
  const myTrashCan = useRef();
  const [cartCourses, setCartCourses] = useState([]);
  const { data, loading, error } = useFetch(
    "http://localhost:3000/coursesInCart",
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
      setCartCourses(data);
    }
  }, [data]);

  const removeCourseFromCart = async (courseId) => {
    try {
      const postCoursesToCart = await axios.post(
        "/removeCourses",
        {
          course_id: courseId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setCartCourses(cartCourses.filter((course) => course._id !== courseId));
    } catch (err) {
      console.log(err);
    }
  };
  if (!Array.isArray(cartCourses) || cartCourses.length === 0) {
    return <p className="emptyCart">Your cart is empty</p>;
  }
  const DivCours = cartCourses?.map(function (cours) {
    return (
      <div className="myCourseInCART">
        <span
          id={cours._id}
          className="trashCan"
          ref={myTrashCan}
          onClick={() => removeCourseFromCart(cours._id)}
        >
          <FaTrashAlt />
        </span>
        <DivCors
          courseName={cours.courseName}
          iconId={cours._id}
          price={cours.coursePrice}
        />
      </div>
    );
  });

  return (
    <>
      <div className="MyfavoriteCourses">
        <div className="flex-MyCours">{DivCours}</div>
      </div>
    </>
  );
};

export default CoursesInCart;
