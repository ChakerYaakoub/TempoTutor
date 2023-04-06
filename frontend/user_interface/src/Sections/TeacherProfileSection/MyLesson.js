import React, { useContext, useEffect, useState } from 'react'
import './MyLesson.css'
import useFetch from '../../getUseFetch';
import { GlobalVariales } from "../../UseContext";
import { Link, useNavigate } from "react-router-dom";



const MyLesson = () => {
  const navigate = useNavigate();

  const { userId } = useContext(GlobalVariales)

  const { data, loading, error } = useFetch(`http://localhost:3000/teachersScreen/Course/Teacher/${userId}`);
  const [dataArray, setDataArray] = useState([]);


  useEffect(() => {
    if (data && Array.isArray(data.courses)) {
      setDataArray(data.courses);
    }
  }, [data]);

  const handleEditClick = () => {
    navigate(`/AddNewCours`)

  }

  return (
    <div className='ContentTableDiv'>
      <div className="table">
        <section className="table__header">
          <h1>Your Courses</h1>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th> Name </th>
                <th> Image </th>
                <th> DateC </th>
                <th> studentN</th>
                <th> Price </th>
                <th> Total</th>
                <th> Edit </th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((cours) => (
                <tr>
                  <td>{cours.courseName}</td>
                  <td> <img src={`http://localhost:3000/${cours.mainCover}`} alt="" /></td>
                  <td>{cours.CourseDate}</td>
                  <td>{cours.numberOfStudents} </td>
                  <td> <strong>{cours.price}$</strong></td>
                  <td> <strong>{(cours.price * cours.numberOfStudents).toFixed(0)}$</strong></td>
                  <td>
                    <p className="status edit"

                      onClick={() => handleEditClick()}

                    >Edit</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default MyLesson                  