import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from 'react-router-dom';
import './SectionPage.css';
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../getUseFetch";

import { SectionCourse } from "../../Sections/index";

const SectionPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate(-1);

  }
  //here
  useEffect(() => {

    if (!JSON.parse(localStorage.getItem("userInfo"))) {
      navigate(`/`)
    }
 

  },
    [JSON.parse(localStorage.getItem("userInfo"))
    ]);

  //here
  const location = useLocation();
  const sectionIndex = location.state?.index?.index || 1;
  console.log(id);
  return (
    <>
      <SectionCourse CourseId={id} sectionIndex={sectionIndex} />
    </>



  );
};

export default SectionPage;
