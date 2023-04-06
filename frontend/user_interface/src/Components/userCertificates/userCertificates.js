import React from 'react'
import { CertificateComponent } from "../../Components/index";
import "./userCertificates.css"
import { Link, useNavigate } from "react-router-dom";

const UserCertificates = ({ data }) => {
    const navigate = useNavigate();

    const GoToCoure = (id) => {

        navigate(`/Course/${id}`)

    };

    function formatDate(dateString) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", options);
    }

    return (
        <div>

            <div className='FirstDivcertitfi'>
                <p className='firstTilteCertifi'>My Music Course Certifications : </p>
                <p className='tetxtfirstDivCeriti'>Thank you for choosing our web app for your music online learning needs.
                    We hope you found our tutorials interesting and useful<br />
                    Your certificates will always be securely stored in our database for easy access. <br />
                    You can view and download your certificates in <span> PDF</span> or<span> image</span>    format from your account at any time. <br />
                </p>
            </div>
            <hr />


            <div className='certificationUserDivsss'>
                {data.certification.map((cert, index) => (
                    <div className='oneCertificationUserDivsss' key={index}>
                        <p>
                            <span className='ttttCourseInfocer'>Course Title : </span>
                            <span className='TitlecertificationUserDivsss' onClick={() => GoToCoure(cert.courseId)}>{cert.courseName} </span>
                        </p>
                        <p>
                            <span className='ttttCourseInfocer'>In  :   </span>
                            <span>   {formatDate(cert.certificationDate)}</span>
                        </p>
                        <p>
                            <span className='ttttCourseInfocer'>CA  :  </span>
                            <span>{cert.CAId} </span>
                        </p>


                        <CertificateComponent key={index} data={cert} keyProp={index} />

                    </div>

                ))}
            </div>
        </div>
    )
}

export default UserCertificates