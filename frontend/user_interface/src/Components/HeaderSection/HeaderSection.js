import React from 'react'
import "./HeaderSection.css"
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const HeaderSection = ({ data, sectionIndex , SetShowSideBare ,ShowSideBare }) => {
    const navigate = useNavigate();
    const CoursTitle =data.courseName;
    const pageNb=(sectionIndex===1000) ? data.sectionNb+1 : (sectionIndex===1001)? data.sectionNb+2 : sectionIndex ;
    const SectionTilte =(sectionIndex === 1000) ? "What's next" :(sectionIndex === 1001) ? "Congratulations" : data.sections[sectionIndex - 1].sectionTitle ;

    const handleChowSide =()=>{
        if(ShowSideBare){
            SetShowSideBare(false)
        }else{
            SetShowSideBare(true)

        }

    }

    const GoToCoure = () => {
   
            navigate(`/Course/${data._id}`)

    };


    return (
        <div className='HeaderSection'>
            <div className='SectionTitleCourse'  onClick={() =>GoToCoure()}>
              {CoursTitle}  
            </div>
         
            <div className='TitleSectionHead'>
                <span className='IconSection' onClick={handleChowSide}>  <FaBars /> </span>
                <span className='TitleHeadSectiontext'> {pageNb} - {SectionTilte} </span>


            </div>
        </div>


    );

}

export default HeaderSection