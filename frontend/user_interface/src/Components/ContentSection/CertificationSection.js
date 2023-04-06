import React from 'react'
import "./CertificationSection.css"

import CertificateComponent from '../CertificateComponent/CertificateComponent';
import useFetch from "../../getUseFetch";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorComponent from '../ErrorComponent/ErrorComponent';



const CertificationSection = ({ dataCourse, sectionIndex, userId, CourseId, refresh, setRefresh }) => {
  let { data, loading, error } = useFetch(`http://localhost:3000/Sections/users/${userId}/certification/${CourseId}`);


  return (
    <div>

      <div className='ContentSectionDivTitle'>
        <h1> {dataCourse.sectionNb + 2} - Congratulations ! </h1>

      </div>

      <div className='DescriptionSectionCours1'>



        <p>    You have successfully completed the course.
          We appreciate your hard work and dedication.
        </p>
        <p>
          Your certificate is now ready, and it will be stored in our database for safekeeping.
          You can always access it in your account,
          and for your convenience, you can download a copy in  PDF or image format.
        </p>

      </div>

      <div className='certificateDivSection'>
        <p className="TitleSectionMini11">We hope you enjoyed the course !</p>
      </div>
      <br />



      {loading && (
        <>
          <br />
          <br />
          <br />
          <LoadingSpinner />
        </>
      )}
      {error && <ErrorComponent />}

      {data && <CertificateComponent data={data.certification} />}

      <div className='DescriptionSectionCours1'>
        <p>Thank you for completing the course! We hope you found it informative and helpful.</p>
      </div>

      <br /><br />









    </div>


  )
}

export default CertificationSection