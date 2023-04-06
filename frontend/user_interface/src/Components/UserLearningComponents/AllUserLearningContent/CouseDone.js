import React from 'react'
import "./CouseDone.css"
import { LoadingSpinner, ErrorComponent, DivCors } from "../../../Components/index";
import useFetch from '../../../getUseFetch';
import { Link, useNavigate } from "react-router-dom";
import Empty from '../../Empty/Empty';

const CouseDone = ({ userId }) => {

  const { data, loading, error } = useFetch(
    `http://localhost:3000/UserLearning/GraduatedCourses/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
      },
    }
  );

  // if (data) {
  //   console.log(data)
  // }

  const DivCours2 = data && Array.isArray(data) && data.map(function (cours) {
    return (
      <DivCors
        key={cours.courseId._id}
        courseName={cours.courseId.courseName}
        instructorName={cours.courseId.instructorName}
        iconId={cours.courseId._id}
        price={cours.courseId.price}
        description={cours.courseId.briefDescription}
        numberOfStudents={cours.courseId.numberOfStudents}
        mainCover={cours.courseId.mainCover}
      />
    );
  });

  if (!Array.isArray(data) || data.length === 0) {
    // return <Empty text={" You don't have any favorite courses yet"} />

    return <div className="PurchasePrincipale ">
      <p className='VoidePurchAAse' >You don't have any Graduated Courses yet</p>
    </div>;
  }


  return (
    <>
      {loading && <>
        <br />
        <br />
        <br />
        <LoadingSpinner />
        <br />
        <br />
        <br /></>}
      {(error && !data) && <ErrorComponent />}

      {(data && userId && Array.isArray(data)) && (
        <>
          <div className="FirstDiveMylearning">
            <p className="FirstDiveMylearningPtag">Thank you for choosing our web app for your music online learning needs. We hope you found our tutorials interesting and useful
              Your certificates will always be securely stored in our database for easy access.
              <span > <Link to="/userCertificates" > Click here </Link> </span> to see all your  certificates  </p>
          </div>

          <div className="flex-MyCours" id="DataSearch">
            {DivCours2}
          </div>
        </>
      )}
      {/* {(!Array.isArray(data) || data.length === 0) &&(!loading) && data && (
        <Empty text={" You don't have any favorite courses yet"} />
      )} */}
    </>
  );
}
export default CouseDone 