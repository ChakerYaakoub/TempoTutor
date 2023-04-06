import React, { useState, useEffect } from "react";
import "./ContentSection.css"
import ImagePdf from "./ImagePdf.js"
import axios from "axios";
import AllAlert from "../AllAlert/AllAlert";
import { Link, useNavigate } from "react-router-dom";
import CommentSectionsComponent from "./CommentSectionsComponent";




const ContentSection = ({ data, sectionIndex, userId, CourseId, refresh, setRefresh }) => {

    const navigate = useNavigate();
    console.log(`i am in section : ${userId}`)

    useEffect(() => {

        if (!JSON.parse(localStorage.getItem("userInfo"))) {
            navigate(`/`)
        }
        if (!data.courseStudents.includes(userId)) {
            navigate(`/`)

        }

    },
        [JSON.parse(localStorage.getItem("userInfo"))]);


    const Section = data.sections[sectionIndex - 1];
    const nextSection = data.sections[sectionIndex];

    const [SectionCompleted, setSectionCompleted] = useState(false);
    const [NotWatch, SetNotWatch] = useState(false);
    const [MybtnBackgound, SetMybtnBackgound] = useState('');

    // data.sections[index - 1].studentDone.includes(userId);
    console.log(Section.studentDone.includes(userId))

    // if(Section.studentDone.includes(userId)){
    //     setSectionCompleted(true)
    //     SetMybtnBackgound('#43e75e')

    // }

    useEffect(() => {
        if (
            Section.studentDone.includes(userId)
        ) {
            setSectionCompleted(true)
            SetMybtnBackgound('#43e75e')




        }
        else {
            setSectionCompleted(false)
            SetMybtnBackgound('#ffbe58')

        }

        if (navigate) {
            setRefresh(true)


        } else {
            setRefresh(false)

        }
    },
        [navigate,Section.sectionVideo,

            Section.studentDone.includes(userId)
        ]);

    const handleVideoEndSection = async () => {
        if (userId) {
            try {
                await axios.post('http://localhost:3000/Sections/setSectionCompleted', {
                    userId: userId,
                    sectionId: Section._id,
                    courseId: data._id

                });
                // update your local state to mark the section as completed
                setSectionCompleted(true);
                SetMybtnBackgound('#43e75e')
                setRefresh(true)
            } catch (error) {
                console.error(error);

            }
        }


        // console.log(`section is ${Section._id}`)
    };


    const handleContinueSectionClick = (index, title) => {

        if (userId) {

            if (SectionCompleted) {

                let formattedTitle;


                if (index - 1 === data.sectionNb) {
                    formattedTitle = ("What's next").replace(/\s+/g, '-');
                    index = 1000

                }
                else {
                    title = title.sectionTitle
                    formattedTitle = title.replace(/\s+/g, '-');
                }
                setSectionCompleted(false);
                SetMybtnBackgound('#ffbe58')


                navigate(`/Course/${data._id}/sections/${formattedTitle}`, { state: { index: { index } } });

            } else {
                SetNotWatch(true)
            }
        } else {
            navigate("/");
        }



    };

    // console.log(nextSection.sectionTitle)









    return (
        <div className='ContentSectionDiv'>
            <div className='ContentSectionDivTitle'>
                <h1> {Section.sectionNb} - {Section.sectionTitle} </h1>

            </div>
            <div className='DescriptionSectionCours1'>
                <p>{Section.descriptionSectionBefor}</p>

            </div>
            <br />
            <div className='MediaSectionVideo'>
                <video className='ThemediaSSS AllMediaSection'
                key={sectionIndex}
                    controls

                    onEnded={() => handleVideoEndSection()}

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


            {!Section.sectionYoutube == "" && <>

                <div className="TitleSectionMini">
                    <p className="TitleSectionMini11">You can also watch:</p>


                </div>
                <br />
                <div className='MediaSectionVideoYoutube'>


                    <div className='ThemediaYoutube AllMediaSection' dangerouslySetInnerHTML={{ __html: Section.sectionYoutube }} />



                </div>
            </>}

            {NotWatch && (
                <AllAlert
                    type="warning"
                    timeout={8000}
                    message={<>Please watch the entire video section before proceeding to the next section.<br />
                        You must complete this section in order to mark it as finished and progress through the course.</>}
                />
            )}

            <div className="MybtnSectionMydiv">
                <button className="MybtnSectionMy" style={{ background: `${MybtnBackgound}` }}

                    onClick={() => handleContinueSectionClick(sectionIndex + 1, nextSection)}

                >
                    Done! What's Next?
                </button>
            </div>






            <br /><br />





            <div className="CommentSections">

                <div>
                    <p className="TitleSectionMini11">Contribute to the discussion below.</p>
                </div>


                <CommentSectionsComponent />







                <br />
            </div>








        </div>


    )
}

export default ContentSection