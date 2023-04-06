import React, { useState, useEffect } from "react";
import "./ContentSection.css"
import ImagePdf from "./ImagePdf.js"
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";





const ContentSection = ({ data, sectionIndex}) => {

    const Section = data.sections[sectionIndex - 1];
 
    return (
        <div className='ContentSectionDiv' id={`Section${sectionIndex}`}>

            <div className="SectionNb1">
                <h1> Section : {Section.sectionNb} </h1>

            </div>
            <div className='ContentSectionDivTitle'>
                <h1> Section Title : {Section.sectionTitle} </h1>

            </div>
            <div className='DescriptionSectionCours1'>
                <p>{Section.descriptionSectionBefor}</p>

            </div>
            <br />
            <div className='MediaSectionVideo'>
                <video className='ThemediaSSS AllMediaSection'
                    controls

                

                >
                    <source src={`http://localhost:3000/${Section.sectionVideo}`} type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
            </div>
            <br />




            <div className='DescriptionSectionCours1'>
                <p>{Section.descriptionSectionAfter}</p>

            </div>
            <br />


            <ImagePdf Section={Section} />

            <br />



            <div className=' DescriptionSectionCours1 NotSectionNote'>
                <p> {Section.sectionNote}</p>

            </div>

            <br />
            <br />


            {!Section.sectionYoutube ==""  && <>

                <div className="TitleSectionMini">
                    <p className="TitleSectionMini11">You can also watch:</p>


                </div>
                <br />
                <div className='MediaSectionVideoYoutube'>


                    <div className='ThemediaYoutube AllMediaSection' dangerouslySetInnerHTML={{ __html: Section.sectionYoutube }} />



                </div>
            </>}



 



            <br /><br /> 





    








        </div>


    )
}

export default ContentSection