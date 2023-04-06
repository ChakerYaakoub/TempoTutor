import React, { useState } from 'react'
import useFetch from '../../getUseFetch';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import DivTeacher from '../../TeacherScreens/DivTeacher';
import '../../TeacherScreens/teachers.css'
import { courseSubject } from '../../assets/DummyData'

import ErrorComponent from '../ErrorComponent/ErrorComponent';

const SearchTeacher = () => {

 const {data,loading ,error} = useFetch(`http://localhost:3000/teachersScreen/data`);
 const [open, setOpen] =  useState(false);
 const [searchQuery, setSearchQuery] = useState("");


  const filteredTeacher = data?.filter( (teacher) => {
    const { firstName ,lastName,descriptionEXP,instruments} = teacher;
    const query = searchQuery.toLowerCase();
    return (
      firstName.toLowerCase().includes(query) ||
      lastName.toLowerCase().includes(query) ||
      instruments.toString().toLowerCase().includes(query)||
      descriptionEXP.toLowerCase().includes(query)
    )

  });

  const searchTeach = filteredTeacher?.map( function (teacher) {
    return(
    <DivTeacher
    key={teacher._id}
    id={teacher._id}
    firstName={teacher.firstName}
    lastName={teacher.lastName}
    descriptionEXP={teacher.descriptionEXP}
    profilePicture={teacher.profilePicture}
    instruments={teacher.instruments}
    />
    )})


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const handleOpen = () => {
    setOpen(!open);
  };



  return(
    <>
    
<div className='container22'>
      <button className='Instrement' onClick={handleOpen}>All Instrements<i className='fa fa-chevron-down'></i></button>
      <div className="dropdown">
              {open &&         
                <ul className="menu">
                  
                  { courseSubject.map ((value, index) => {
          return (
            <li className="menu-item" onClick={() => setSearchQuery(value)}>
                    <button onClick={() => 
                        {
                        setOpen(!open)
                        }}
                        >{value}</button>
                    </li>
          )})}
                </ul>}</div>


        <div className='NotVisible'><i class="fa-solid fa-bars"></i></div>
        <div className='container2'>
        <div className='search-box'>
            <i className='fa fa-search'></i>
            <input
            type='text' 
            autoComplete="off"
            placeholder='Search by name'  
            value={searchQuery}
            onChange={handleSearchChange}
        />
            <button className='mymySearch'>Search</button>
        </div>
        </div>
        </div>



<div className='content'>
      <div className='content1'>
      <h3>Personalize your learning & grow your craft</h3>
      <p>Our powerful algorithm will recommend you the best teachers according to your needs</p>
      </div>
      <div className='content2'>
        <button className='starting'>GET STARTED</button>
      </div>
 </div>




{error && <ErrorComponent />}
<div className="DataFind">
    
    <div className="Result" data-behavior="search-result-header">
      {searchQuery && filteredTeacher.length > 0 && (
        <>
          <h3 data-behavior="search-result-title">
            {filteredTeacher.length} results for "{searchQuery}"
          </h3>
          <button onClick={() => setSearchQuery("")}>Reset search</button>
        </>  
      )}

    {searchQuery && filteredTeacher.length === 0 && (
            < div className="Result" data-behavior="search-result-header">
              <h3 data-behavior="search-result-title">
                No results found for "{searchQuery}"
              </h3>
              <button onClick={() => setSearchQuery("")}>Reset search</button>
            </div>

    )}
   </div>


   {loading && <LoadingSpinner />}
    <div className="bady" id="DataSearch">
    {data && searchTeach }
    </div>

</div>
</>
  )

}



export default SearchTeacher