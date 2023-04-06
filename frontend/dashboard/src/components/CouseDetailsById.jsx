import React, { useState, useEffect } from "react";
import './css/CourseDetailsComponents.css'

import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button';
import axios from "axios";
import { Link } from "react-router-dom";
import ContentSection from "./SectionCourse/ContentSection";
const CouseDetailsById = ({ data }) => {

  const [isPublish, SetisPublish] = useState(data.isPublish);
  const { currentColor } = useStateContext();

  console.log(data)

  const ActivedAndNot = async () => {
    const isOrnot = !isPublish
    console.log(isOrnot)
    try {
      const SetActiveOrNot = await axios.post(
        `http://localhost:3000/addNewCours/isPublish/${data._id}`,
        {
          Course_id: data._id,
          isPublish: isOrnot,
        }

      );

      SetisPublish(isOrnot)

    } catch (err) {
      console.log(err);
      // setSucc(false)
    }


  }

  useEffect(() => { },

    [isPublish, SetisPublish]);
  return (
    <div>


      <div>
        <div className='mymySouzanLastAndFirstName'>

          <div >
            <h2>{data.courseName}</h2>
            <p className="PPPChakerCourse"> <b> instructor Name :</b> <span><Link to={`/Teacher/${data.courseInstructor}`}>  {data.instructorName}</Link> </span>  </p>
          </div>

          <div>
            <Button
              color='white'
              bgColor={`${isPublish ? 'lime ' : 'red '}`}
              text={`${isPublish ? 'published' : 'Not published'}`}
              borderRadius="10px"
              size="xl"
              disabled={false}
              onClick={ActivedAndNot}
            />
          </div>

        </div>

        <br />


        <div>
          <img src={`http://localhost:3000/${data.mainCover}`}></img>
        </div>
        <br />
        <div className='mymySouzanLastAndFirstName'>
          {/* <h2>{data.courseName}</h2>
          <p>{data.briefDescription}</p> */}

          <h2>{data.briefDescription}</h2>
          <p></p>
        </div>
        <br />
        <div>
          <p>{data.description}</p>
        </div>
      </div>
      <br />




      <div>
        <table className='mymySouzanTableOfInformationGeneral'>
          <tr>
            <th>Duration</th>
            <td>{data.duration}</td>
          </tr>
          <tr>
            <th>Language</th>
            <td>{data.language}</td>
          </tr>
          <tr>
            <th>Number Of Students</th>
            <td>{data.numberOfStudents}</td>
          </tr>
          <tr>
            <th>Course Levels</th>
            <td>{data.courseLevels}</td>
          </tr>
          <tr>
            <th>Section Number</th>
            <td>{data.sectionNb}</td>
          </tr>
          <tr>
            <th>Price </th>
            <td>{data.price}$</td>
          </tr>
          <tr>
            <th>Is Published</th>
            <td>
              {/* {`${data.IsActivated}`} */}

              <div className={`text-white text-center py-1 px-2 w-40 capitalize rounded-md text-md ${isPublish ? 'bg-lime-500 ' : 'bg-red-600 '}`}>
                {isPublish ? 'published' : 'Not published'}
              </div>


            </td>


          </tr>


        </table>
      </div>

      <div className='mymysouzanVidePlayDiv'>
        <p >course introduction :</p>
        <video className='mymysouzanVidePlay' controls>
          <source src={`http://localhost:3000/${data.courseIntroVideos}`} type="video/mp4" />
        </video>
      </div>


      <div className="SectionCourseDivAllCourse">


        <div className="SectionNb1">
          <h1>All  Sections :  </h1>

        </div>



        <div className="AllsectionAll">

          {data.sections.map((section, index) => (
            <React.Fragment key={index}>

              <div className="oneSectionone">


                <Button
                  color='white'
                  bgColor={currentColor}
                  text={<a href={`#Section${index + 1}`}> Section {index + 1}</a>}
                  borderRadius="10px"
                  size="xl"
                  disabled={false}

                />
              </div>



            </React.Fragment>
          ))}


          <div className="oneSectionone">


            <Button
              color='white'
              bgColor={currentColor}
              text={<a href={`#Section${data.sectionNb + 1}`}> what's next</a>}
              borderRadius="10px"
              size="xl"
              disabled={false}

            />
          </div>



        </div>
        <br />
        <br />

        <hr />





        {data.sections.map((section, index) => (
          <React.Fragment key={index}>





            <ContentSection data={data} sectionIndex={index + 1} />

          </React.Fragment>
        ))}


        <div className='ContentSectionDiv ContentSectionDivLast' id={`Section${data.sectionNb + 1}`}>

          <div className="SectionNb1">
            <h1> Section : {data.sectionNb + 1} </h1>

          </div>

          <div className='ContentSectionDivTitle'>
            <h1> Section Title :what's next</h1>

          </div>

          <div className='DescriptionSectionCours1'>
            <p>{data.endText}</p>

          </div>

        </div>





        <hr />
      </div>




    </div>
  )
}

export default CouseDetailsById