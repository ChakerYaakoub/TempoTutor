/* eslint-disable no-undef */
import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../getUseFetch';
import './teachers.css'

import { LoadingSpinner, ErrorComponent } from "../Components/index";
import CourseByidTeacher from './CourseByidTeacher';


const TeachersDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`http://localhost:3000/teachersScreen/data/${id}`);


  if (loading) {
    return (
      <>
        <div style={{ padding: "150px  150px" }}>
          <LoadingSpinner />
        </div>
      </>
    )
  }
  if (error) {
    return <ErrorComponent />;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className='containerProfiel'>
      <div className='profiel'>
        <div className='profielInfo'>
          <div className='AllProfile'>
            <div className='profiel'>
              <div className='picture'>
                <div>
                  <p className='paragraphe'>{data.firstName} {data.lastName}'<span>S PROFIEL</span></p>
                </div>
                <div className='pictureProfiel'>
                  <img src={`http://localhost:3000/${data.profilePicture}`} alt=''></img>
                </div>
                <div className='book'>
                  <button className='btn'>BOOK A LESSON</button>
                  <div className='star'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>




              <div className='profielInfo'>
                <div>
                  <h3>Languages</h3>
                  <span className='info'><i className="fa-solid fa-play"></i>{data.languages.join(' - ')}</span>
                </div>

                <div>
                  <h3>Teaching Instruments & Levels</h3>
                  {data.instruments.map((instrument) => (
                    <p className='info'><i className="fa-solid fa-play"></i>{instrument}</p>
                  ))}
                </div>

                <div>
                  <h3>Years Of Experiences</h3>
                  <p className='info'><i className="fa-solid fa-play"></i>{data.experience}</p>
                </div>
              </div>

            </div>
            <div className='backgroundDetails'>
              <h3>Background:</h3>
              <p className='background'>{data.about}</p>
            </div>
            <CourseByidTeacher id={id} />
          </div>
        </div>
      </div>
    <div>
    </div>
    </div>

  )
}

export default TeachersDetails