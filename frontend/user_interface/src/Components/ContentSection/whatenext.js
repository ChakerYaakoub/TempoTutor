import React, { useState, useEffect } from "react";
import "./ContentSection.css"

import axios from "axios";
import AllAlert from "../AllAlert/AllAlert";
import { Link, useNavigate } from "react-router-dom";
import "./whatenext.css"

const Whatenext = ({ data, sectionIndex, userId, CourseId, refresh, setRefresh }) => {
  const navigate = useNavigate();
  const [SomthingWrong, SetSomthingWrong] = useState(false);

  const handleContinueEndSectionClick = async () => {
    SetSomthingWrong(false)

    const formattedTitle = ("Certification").replace(/\s+/g, '-');
    const index = 1001

    // setSectionCompleted(true);
    // SetMybtnBackgound('#43e75e')

    try {
      await axios.post('http://localhost:3000/Sections/EndAllSection', {
        userId: userId,

        courseId: data._id

      });
      // update your local state to mark the section as completed

      setRefresh(true)
      navigate(`/Course/${data._id}/sections/${formattedTitle}`, { state: { index: { index } } });
    } catch (error) {
      console.error(error);
      SetSomthingWrong(true)

    }




  };

  return (
    <div className='ContentSectionDiv'>
      <div className='ContentSectionDivTitle'>
        <h1> {data.sectionNb+1} - What's next ? </h1>

      </div>
      <div className='DescriptionSectionCours1'>
        <p>{data.endText}</p>

        <p> You are now equipped with the knowledge and tools to take your skills to the next level. Keep up the great work!

          We hope you enjoyed the course and learned valuable skills. Don't forget to share your feedback with us!
        </p>

        <p>Thank you for completing the course! We hope you found it informative and helpful.
          If you enjoyed what you learned in this course, consider our new subscription!</p>

      </div>
      {SomthingWrong && (
                <AllAlert
                    type="danger"
                 
                    message="Sorry, something went wrong, try again later"
                />
            )}
      <div className="MybtnSectionMydiv" style={{ border: `none` }}>
        <button className="MybtnSectionMy" style={{ background: `#43e75e` }}

          onClick={() => handleContinueEndSectionClick()}

        >
        Done ! Get my certificate
        </button>
      </div>





    </div>
  )
}

export default Whatenext