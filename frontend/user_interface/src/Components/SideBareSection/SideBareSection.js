import React, { useEffect, useState, useContext } from "react";
import "./SideBareSection.css"

import { IoMdDoneAll } from "react-icons/io";
import { GiFinishLine } from "react-icons/gi";


import { Link, useNavigate } from "react-router-dom";

const SideBareSection = ({ data, sectionIndex, userId,setRefresh }) => {
    const navigate = useNavigate();


    const activeStep = sectionIndex;
    const AllSectionNb = data.sectionNb;
    // let isSectionDone;

    const DoneAll = data.sections[data.sections.length - 1].studentDone && data.sections[data.sections.length - 1].studentDone.includes(userId);

    const Graduated = data.graduated.includes(userId)

    const handleStartSectionClick = (index, title, isSectionDone) => {
        const formattedTitle = title.replace(/\s+/g, "-");
        console.log(isSectionDone)
        if (isSectionDone) {
            navigate(`/Course/${data._id}/sections/${formattedTitle}`, {
                state: { index: { index } },
            });
        }

    };

    // const handleWhateNextClick = (index,  isSectionDone) => {

    //     if (isSectionDone) {
    //         navigate(`/Course/${data._id}/sections/What's-next`, {
    //             state: { index: { index } },
    //         });
    //     }

    // };

    // useEffect(() => {
    //           if (navigate){
    //         setRefresh(true)
        

    //     } else{
    //         setRefresh(false)

    //     }
    // },
    //     [ navigate
    //     ]);

    return (
        <div className="sidebarSection">
            {data.sections.map((Section) => {
                //    let isSectionDone =Section.studentDone.includes(userId);
                let isSectionDone

                if (Section.sectionNb == 1) {
                     isSectionDone = Section.studentDone.includes(userId);

                } else {
                     isSectionDone = data.sections[Section.sectionNb - 2].studentDone.includes(userId);


                }


                return (
                    <div
                        key={Section.sectionNb}

                        id={`Section-${Section.sectionNb}`}
                        onClick={() => handleStartSectionClick(Section.sectionNb, Section.sectionTitle, isSectionDone)}
                        className={`Sectiondiv Section ${Section.sectionNb == activeStep ? "Section-active" : ""
                            } ${isSectionDone || Section.sectionNb == 1 ? "Section-Ready" : "Section-NotReady"}

                            ${Section.studentDone.includes(userId) ? "Section-IsDone" : ""}
                            
                            `}
                    // isSectionDone || Section.sectionNb == 1 ?


                    >   <div >
                        <span className="Section-number">0{Section.sectionNb}</span> 
                        <span className="Section-title">{Section.sectionTitle} </span>
                        {Section.studentDone.includes(userId) && (
                            <>
                             
                                    <span className="Section-IsDoneIcon">
                                         <IoMdDoneAll />
                                    </span>
                                   
                              
                            </>
                        )}  </div>




                        <div className="vlSection "> </div>
                    </div>
                );
            })}


            <div


                id={`Section-1000`}
                onClick={() => handleStartSectionClick(1000, "What s next", DoneAll)}
                className={`Sectiondiv Section ${1000 == activeStep ? "Section-active" : ""}
              ${DoneAll ? "Section-Ready" : " Section-NotReady"}
              ${Graduated ? "Section-IsDone" : ""}   ` }
            >
                <span className="Section-number">0{AllSectionNb + 1}</span>
                <span className="Section-title">What's next </span>
                {Graduated && (
                    <>
                        <span className="Section-IsDoneIcon">
                            <IoMdDoneAll />
                        </span>
                    </>
                )}

                <div className="vlSection "></div>
            </div>


            <div


                id={`Section-1001`}
                onClick={() => handleStartSectionClick(1001, "Certification", Graduated)}
                className={`Sectiondiv Section ${1001 == activeStep ? "Section-active" : ""}
             ${Graduated ? "Section-IsDone" : "Section-NotReady"}`}
            >
                <span className="Section-number">0{AllSectionNb + 2}</span>
                <span className="Section-title">Certification </span>
                {Graduated && (
                    <>
                        <span className="Section-IsDoneIcon">
                            {/* <GiFinishLine /> */}
                            <IoMdDoneAll />
                        </span>
                    </>
                )}
                <div className="vlSection " style={{visibility: "hidden"}}></div>
              


            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};




export default SideBareSection