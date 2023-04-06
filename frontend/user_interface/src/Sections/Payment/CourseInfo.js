// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react'
// import { ErrorComponent, LoadingSpinner } from '../../Components';
// import useFetch from '../../getUseFetch';
// import './Payment.css'

// const CourseInfo = (myTrashCan,cartCourses,removeCourseFromCart) => {


//   // const myTrashCan = useRef();
//   // const [cartCourses, setCartCourses] = useState([]);
//   // const { data, loading, error } = useFetch(
//   //   "http://localhost:3000/coursesInCart",
//   //   {
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Authorization: localStorage.getItem("token")
//   //         ? localStorage.getItem("token")
//   //         : "",
//   //     },
//   //   }
//   // );

//   // useEffect(() => {
//   //   if (data) {
//   //     setCartCourses(data);
//   //   }
//   // }, [data]);


//   // const removeCourseFromCart = async (courseId) => {
//   //   try {
//   //     const postCoursesToCart = await axios.post(
//   //       "http://localhost:3000/removeCourses",
//   //       {
//   //         course_id: courseId,
//   //       },
//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           Authorization: localStorage.getItem("token"),
//   //         },
//   //       }
//   //     );
//   //     setCartCourses(cartCourses.filter((course) => course._id !== courseId));
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };
//   // if (!Array.isArray(cartCourses) || cartCourses.length === 0) {
//   //   return <p className="emptyCart">Your cart is empty</p>;
//   // }

//   // {data.instruments.map((instrument) => (
//   //   <p className='info'><i className="fa-solid fa-play"></i>{instrument}</p>
//   // ))}


// const DivCours = cartCourses?.map((course) => {
//   return (
//     <div className="information" key={course._id}>
//       <div className="img">
//         <img src={`http://localhost:3000/${course.mainCover}`} alt={course.title} />
//       </div>
//       <div className="Details">
//         <div className='courseName'>
//           <h3>{course.courseName}</h3>
//         </div>
//         <p className='desC'>{course.description}</p>
//         <h4 className='INName'>{course.instructorName}</h4>
//         <div className="trash">
//           <div className='priceP'>Price: {course.price}$</div>
//           <div
//             style={{ fontSize: "20px", cursor: "grab" }}
//             onClick={() => removeCourseFromCart(course._id)}
//             ref={myTrashCan}
//           >
//             <i className="fa-solid fa-trash-can"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

//   return (
//     <>

//       {DivCours}
//       {/* {error && <ErrorComponent/>}
//       {loading ?
//        (
//        <div style={{paddingTop:"20px"}}>
//        <LoadingSpinner/>
//        </div>
//       )
//        :
//       (
//         <div>
//           {DivCours}
//         </div>
//       )
//       } */}
//     </>
//   );

// }

// export default CourseInfo