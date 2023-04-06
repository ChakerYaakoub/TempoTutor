import React from 'react'
import "./CourNotDone.css"
import { LoadingSpinner, ErrorComponent, DivCors } from "../../../Components/index";
import useFetch from '../../../getUseFetch';
import { Link, useNavigate } from "react-router-dom";
import Empty from '../../Empty/Empty';

const CourNotDone = ({userId}) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/UserLearning/CourNotDone/${userId}`,
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

  const DivCours3 = data && Array.isArray(data) && data.map(function (cours) {
    return (
      <DivCors
        key={cours._id}
        courseName={cours.courseName}
        instructorName={cours.instructorName}
        iconId={cours._id}
        price={cours.price}
        description={cours.briefDescription}
        numberOfStudents={cours.numberOfStudents}
        mainCover={cours.mainCover}
      />
    );
  });

  if (!Array.isArray(data) || data.length === 0) {
    // return <Empty text={" You don't have any favorite courses yet"} />

    return <div className="PurchasePrincipale ">
      <p className='VoidePurchAAse' >You don't have any Courses In Progress  yet</p>
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
            <p className="FirstDiveMylearningPtag">Learning a little each day adds up. Research shows that
             students who make learning a habit are more likely to reach their goals. <br />
              Organize your time and start now.. </p>
          </div>

          <div className="flex-MyCours" id="DataSearch">
            {DivCours3}
          </div>
        </>
      )}
      {/* {(!Array.isArray(data) || data.length === 0) &&(!loading) && data && (
        <Empty text={" You don't have any favorite courses yet"} />
      )} */}
    </>
  );
}
export default CourNotDone