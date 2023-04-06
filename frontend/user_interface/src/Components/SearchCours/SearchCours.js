import React, { useState } from "react";
import DivCors from "./DivCors";
import "./SearchCours.css";
import { courseSubject } from "../../assets/DummyData";
import useFetch from "../../getUseFetch";
import { Link } from 'react-router-dom';

import { LoadingSpinner, ErrorComponent } from "../index"

const SearchCours = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/Courses/data");

  const [searchQuery, setSearchQuery] = useState("");
  const [showAllResults, setShowAllResults] = useState(false);


  // nb of display div 
  const searchNb = 12;


  // data retirned after filter 
  const filteredCours = data?.filter((cours) => {
    const { courseName, courseSubject, description, briefDescription,language,courseLevels } = cours;
    // const { courseName, courseSubject, description, briefDescription, language } = cours;
    const query = searchQuery.toLowerCase();
    return (
      courseName.toLowerCase().includes(query) ||
      courseSubject.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query) ||
      briefDescription.toLowerCase().includes(query) ||
      language.toLowerCase().includes(query)
      ||
      courseLevels.toLowerCase().includes(query) 
    );
  });


  // filter mapp data div 

  const DivCours = filteredCours?.slice(0, showAllResults ? filteredCours.length : searchNb).map(function (cours) {
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

  //   const previewButton = (

  //     {data && filteredCours && <>  </>}

  // );


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="searchPage">
      {/* input  search */}

      <div className="searchDiv">
        <div className="titleSearch">
          <p>WHAT DO YOU WANT TO LEARN TODAY?</p>
        </div>
        <div className="divSearch">
          <input
            className="SearchInputs"
            type="search"
            name="topic-search"
            placeholder="Search for a topic…"
            aria-label="Search for a topic"
            autoComplete="off"
            value={searchQuery}
            onChange={handleSearchChange}
            id="#search-section"
          />
        </div>
      </div>

      {/* Suggested Topics: */}

      <div className="mysearch__topics">
        <h6 className="mysearch__topics-title">Suggested Topics:</h6>
        {courseSubject.map((subject) => (

          // <a  href="#DataSearch">
          <h6 className="mysearch__topic" key={subject}>
            <button
              type="button"
              className="mytag"
              onClick={() => setSearchQuery(subject)}
            >
              {subject}
            </button>
          </h6> 
          // </a>
        ))}
      </div>

      <hr
        className="HrSearch"
        style={{ borderTop: "1px solid #eeeeee" }}
        id="searchData"
      />

      {/* Reset Div  */}

      {/* eroor  */}
      {error && <ErrorComponent />}

      <div className="SearchDataFind">

        {/* reset div  */}

        <div className="ResultSearch" data-behavior="search-result-header">
          {searchQuery && filteredCours.length > 0 && (
            <>
              <h3 data-behavior="search-result-title">
                {filteredCours.length}{" "}  results for "{searchQuery}"
              </h3>
              <button onClick={() => setSearchQuery("")}>Reset search</button>
            </>
          )}

          {searchQuery && filteredCours.length === 0 && (
            <>
              <h3 data-behavior="search-result-title">
                No results found for "{searchQuery}"
              </h3>
              <button onClick={() => setSearchQuery("")}>Reset search</button>
            </>

          )}



        </div>


        {/* data finned  */}
        {loading && <LoadingSpinner />}


        <div className="flex-MyCours" id="DataSearch">
          { }

          {data && DivCours}



        </div>


        {/* butnn preview all and less  */}

        <div className="ResultSearch PreviewAllCorse ">
          {data && filteredCours && !showAllResults && filteredCours?.length > searchNb &&
            <>
              <button className="MypreviewButton" onClick={() => setShowAllResults(true)}>Preview all results ({filteredCours.length})</button>

            </>


          }

          {showAllResults && filteredCours && filteredCours?.length > searchNb && <>
            <button className="MyshowLessButton" onClick={() => setShowAllResults(false)}> show Less </button>
          </>}
        </div>




      </div>
    </div>
  );
};

export default SearchCours;
