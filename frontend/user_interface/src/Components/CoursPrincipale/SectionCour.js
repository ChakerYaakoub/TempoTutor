import { useEffect, useState, useContext } from "react";
import { GlobalVariales } from '../../UseContext';
import { Link, useNavigate } from "react-router-dom";
import {ImBooks} from "react-icons/im"

const SectionCour = ({ data }) => {
    const navigate = useNavigate();
    const { openSignUpForm, setOpenSignUpForm, openForm, setOpenform, userId } = useContext(GlobalVariales);

    const IsStudentCourse = data.courseStudents.includes(userId);
    // console.log(IsStudentCourse)
    const [premium,Setpremium]=useState(false)  



    //   SetfinalBtnColor(data.sections[data.sections.length - 1].studentDone && data.sections[data.sections.length - 1].studentDone.includes(userId) ? "" : "red")
    const finalBtnColor = data.sections[data.sections.length - 1].studentDone && data.sections[data.sections.length - 1].studentDone.includes(userId) ? "" : "red";

    const finalbtnDisable = !data.sections[data.sections.length - 1].studentDone || !data.sections[data.sections.length - 1].studentDone.includes(userId)
    const handleStartSectionClick = (index, title) => {
        const formattedTitle = title.replace(/\s+/g, '-');
        navigate(`/Course/${data._id}/sections/${formattedTitle}`, { state: { index: { index } } });
    };

    const handleIsNotPay = ()=>{
       

        if(!userId){
            setOpenSignUpForm(true);
            setOpenform(true);

        }else{
            Setpremium(true)
        }



    }



    return (
        <div className='tableCourse'>
            <h1>Course Outline</h1>
            <div className="PREMIUMCOURSEDiv">
                   {premium && <> <p> <span> <ImBooks/> </span> PREMIUM COURSE </p></>}
            </div>
         
            <div className="content33">
                {data.sections.map((section, index) => {
                    const isPrevSectionDone = index > 0 && data.sections[index - 1].studentDone && data.sections[index - 1].studentDone.includes(userId);
                    const isSectionDone = section.studentDone && section.studentDone.includes(userId);
                    const isDisabled = !isPrevSectionDone && index > 0;
                    const bgColor = index === 0 ? "" : (isSectionDone ? "" : (isDisabled ? "red" : ""));
                    const disabled = isDisabled || (index === data.sections.length && !isSectionDone);

                    return (
                        <div key={index}>
                            <div className='SectionName'>
                                <div className='khat'>
                                    <p>Section {section.sectionNb}</p>
                                    <h2>{section.sectionTitle}</h2>
                                </div>
                                {IsStudentCourse && <>
                                    <button
                                        className='start'
                                        style={{ background: bgColor }}
                                        disabled={disabled}
                                        onClick={() => handleStartSectionClick(index + 1, section.sectionTitle)}
                                    >
                                        {!disabled && <span>Start</span>}
                                        {disabled && "Start"}
                                    </button>
                                </>

                                }
                                {!IsStudentCourse &&

                                    <button
                                        className='start'
                                        style={{ background: "red" }}
                                        // disabled={true}
                                        onClick={() => handleIsNotPay()}
                                    >
                                        {/* {!disabled && <span>Start</span>}
                                        {disabled && "Start"} */}
                                        Start

                                    </button>



                                }

                            </div>
                            <hr className='hr' />
                        </div>
                    )
                })}
                <div>
                    <div className='SectionName'>
                        <div className='khat'>
                            <p>Section {data.sections.length + 1}</p>
                            <h2>What's next</h2>
                        </div>
                        <button
                            className='start'
                            style={{ background: finalBtnColor }}
                            disabled={finalbtnDisable}
                            onClick={() => handleStartSectionClick(1000, "What's next")}
                        >

                            {!finalbtnDisable && <span>Start</span>}
                            {finalbtnDisable && <> Start</>}

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCour;
