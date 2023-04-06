import React, { useState, useEffect } from "react";
import "./css/TeacherDetailsComponents.css"
import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button';
import axios from "axios";
import CourseByIdTeachers from "./CourseByIdTeachers";

const TeacherDetailsComponents = ({ data }) => {

  const [Active, SetActive] = useState(data.IsActivated);
  const { currentColor } = useStateContext();


  const ActivedAndNot = async () => {
    const isOrnot = !Active
    console.log(isOrnot)
    try {
      const SetActiveOrNot = await axios.post(
        `http://localhost:3000/TeachersStepsRegister/isActived/${data._id}`,
        {
          Teacher_id: data._id,
          isActived: isOrnot,
        }

      );

      SetActive(isOrnot)

    } catch (err) {
      console.log(err);
      // setSucc(false)
    }


  }


  useEffect(() => { },

    [Active, SetActive]);


  return (
    <div>
      {/* 
<embed className='MyImgoneChaker' src={`http437537/variable`} type="application/pdf" /> */}

      {/* <iframe  className='MyImgoneChaker' src={djshfduhdus}#toolbar=0`} >
      </iframe> */}
      <div className='mymySouzanLastAndFirstName'>
        <div>
          <h2>{`${data.firstName} ${data.lastName}`}</h2>
          <p>{data.email}</p>
        </div>
        <div>

          {/* {currentColor} */}
          {/* {`${data.IsActivated ? 'lime ' : 'red '}`} */}
          <Button
            color='white'
            bgColor={`${Active ? 'lime ' : 'red '}`}
            text={`${Active ? 'Activated' : 'Not Activated'}`}
            borderRadius="10px"
            size="xl"
            disabled={false}
            onClick={ActivedAndNot}
          />
        </div>

      </div>

      <div className='mymySouzanDivContientProfielAndAbout'>
        <div className='mymySouzanProfiel'>
          <img src={`http://localhost:3000/${data.profilePicture}`}></img>
        </div>
        <div className='mymySouzanInformation'>
          <p><span>About: </span> {data.about}</p>
          <br></br>
          <p><span>Description: </span> {data.descriptionEXP}</p>
        </div>
      </div>


      <div className='mymySouzanTable'>
        <table className='mymySouzanTableOfInformationGeneral'>
          <tr>
            <th>Languages</th>
            <td>{data.languages.join(' - ')}</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>{data.nationality}</td>
          </tr>
          <tr>
            <th>Instrument</th>
            <td>{data.instruments.map((instrument, index) => (
              <React.Fragment key={index}>
                {index > 0 && " - "}
                {instrument.trim()}
              </React.Fragment>
            ))}
            </td>
          </tr>
          <tr>
            <th>Years Of Experience</th>
            <td>{data.experience}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{data.phone}</td>
          </tr>
          <tr>
            <th> Registration Completion Status</th>
            <td>
              {/* {`${data.IsCompleteSteps}`} */}
              <div className={`text-white text-center py-1 px-2 w-40 capitalize rounded-md text-md ${data.IsCompleteSteps ? 'bg-lime-500 ' : 'bg-red-600 '}`}>
                {data.IsCompleteSteps ? 'Completed' : 'Not Completed'}
              </div>

            </td>
          </tr>
          <tr>
            <th>IsActivated</th>
            <td>
              {/* {`${data.IsActivated}`} */}

              <div className={`text-white text-center py-1 px-2 w-40 capitalize rounded-md text-md ${Active ? 'bg-lime-500 ' : 'bg-red-600 '}`}>
                {Active ? 'Activated' : 'Not Activated'}
              </div>


            </td>


          </tr>
        </table>
      </div>

      <div className='mymysouzanCertificationandcv'>
        <div>
          <p>Certificates</p>
          <embed className='MyImgoneChaker' src={`http://localhost:3000/${data.certificate}`} type="application/pdf" /> </div>
        <div>
          <p>Resume / CV</p>

          <embed className='MyImgoneChaker' src={`http://localhost:3000/${data.cv}`} type="application/pdf" /></div>
        <div>
          <p>Identification</p>

          <embed className='MyImgoneChaker' src={`http://localhost:3000/${data.identification}`} type="application/pdf" /></div>
      </div>

      <br /><br />

      {/* <div>
        <div className="SectionNb1">
          <h1>All  Courses :  </h1>

        </div>

        <CourseByIdTeachers id={data._id} />
      </div> */}









    </div>
  )
}

export default TeacherDetailsComponents