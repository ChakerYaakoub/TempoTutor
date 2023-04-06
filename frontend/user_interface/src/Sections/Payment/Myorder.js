import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";

import useFetch from '../../getUseFetch';
import CheckoutSteps from './CheckoutSteps'
import CourseInfo from './CourseInfo'
import './Payment.css'
import TotalPrice from './TotalPrice';
import axios from 'axios';
import { ErrorComponent, LoadingSpinner } from '../../Components';
import Empty from '../../Components/Empty/Empty';
const Myorder = () => {

  const [empty, Setempty] = useState(false);

  const [cartCourses, setCartCourses] = useState([]);

  const myTrashCan = useRef();

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
  

  const navigate = useNavigate();

  const handelPayment = () => {
    navigate("/payment2");
  }


  useEffect(() => {
    if (data) {
      setCartCourses(data);
      Setempty(data.length === 0);

    } else {
      Setempty(true);

    }



  }, [data]);

  if (loading) {
    // return <Empty text={" You don't have any favorite courses yet"} />

    return <div className="PurchasePrincipale ">
      <br /><br /><br /><br />
      <LoadingSpinner />
      <br /><br /><br /><br />
    </div>;
  }



  if (!Array.isArray(cartCourses) || cartCourses.length === 0) {


    return <> <Empty text={" You don't have any Course In your cart "} /> </>;


  }



  const removeCourseFromCart = async (courseId) => {
    try {
      const postCoursesToCart = await axios.post(
        "http://localhost:3000/removeCourses",
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




  const total = cartCourses?.reduce((accumulator, course) => {
    return accumulator + course.price + (course.price * 20 / 100);
  }, 0);


  const DivCours = cartCourses?.map((course) => {
    return (
      <div className="information" key={course._id}>
        <div className="img">
          <img src={`http://localhost:3000/${course.mainCover}`} alt={course.title} />
        </div>
        <div className="Details">
          <div className='courseName'>
            <h3>{course.courseName}</h3>
          </div>
          <p className='desC'>{course.description}</p>
          <p className='INName'>
            <span className='  WithTeachersName'>   With : </span>
            <span className='INNameName'>  {course.instructorName}</span></p>
          <div className="trash">
            <div className='priceP'>Price: {course.price}$</div>
            <div
              style={{ fontSize: "20px", cursor: "grab" ,paddingRight:"57px"}}
              onClick={() => removeCourseFromCart(course._id)}
              ref={myTrashCan}
            >
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });




  return (

    <>

      {error && <ErrorComponent />}

      {loading && (
        <>
          <br />
          <br />
          <br />
          <LoadingSpinner />
        </>
      )}

      {data &&   data.length > 0 ? (
          <>
          <div className='container1999'>
            <div className='scroll' >
              {DivCours}
            </div>

            <TotalPrice total={total} handelPayment={handelPayment} />


          </div>

        </>
      ) :(
        <></>
      )
      




      }







    </>



  )
}

export default Myorder