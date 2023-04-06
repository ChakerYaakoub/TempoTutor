import React from "react";
import "./MyFavCourses.css";
import { LoadingSpinner, ErrorComponent } from "../../Components/index";
import useFetch from "../../getUseFetch";
import Empty from "../../Components/Empty/Empty";
import { DivCors } from "../../Components/index";
const MyFavCourses = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/favCourses",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
      },
    }
  );

  // if (!Array.isArray(data) || data.length === 0 ) {
  //   return <Empty text={" You don't have any favorite courses yet"} />

  //   // return <p className="emptyCart">You don't have any favorite courses yet</p>;
  // }
  const DivCours = data && Array.isArray(data) && data.map(function (cours) {
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
      {error && <ErrorComponent />}
      
      {!loading && !error && data && Array.isArray(data) && data.length > 0 && (
        <>
          <div className="FirstDivcertitfi">
            <p className="firstTilteCertifi">My wishlist : </p>
          </div>

          <div className="flex-MyCours" id="DataSearch">
            {DivCours}
          </div>
        </>
      )}
      {(!Array.isArray(data) || data.length === 0) &&(!loading) && data && (
        <Empty text={" You don't have any favorite courses yet"} />
      )}
    </>
  );
};

export default MyFavCourses;
