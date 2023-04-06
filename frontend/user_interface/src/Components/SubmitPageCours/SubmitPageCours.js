import { useEffect, useState, useRef, useReducer } from "react";
import "../AddNewCours/AddNewCours.css";
import "../AddNewCours/SyncfusionForm1.css";
import * as React from "react";
import { FormValidator } from "@syncfusion/ej2-inputs";
import {
    TextBoxComponent,
    NumericTextBoxComponent,

} from "@syncfusion/ej2-react-inputs";
import axios from 'axios';
import { GlobalVariales } from '../../UseContext';
import { useContext } from "react";


import AllAlert from "../AllAlert/AllAlert";
import "./SubmitPageCours.css"
import { FaSpinner } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

let formObject;
const SubmitPageCours = ({ initialSections, activeStep, state, setActiveStep, update }) => {
    const navigate = useNavigate();
    const { userFirstName, userLastName, userId } = useContext(GlobalVariales);
    const fullName = userFirstName + ' ' + userLastName;

    // console.log(fullName)
    // console.log(userId)
    const [errorSubmit, setErrorSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Succ, setsucc] = useState(false);
    const [SubmitBackGrand, SetSubmitBackGrand] = useState('#e7c143');
    const [disabledBTNSubmit, SetdisabledBTNSubmit] = useState(true);
    // '#43e75e'

    const url = `http://localhost:3000/addNewCours/cours`
    const url2 = `http://localhost:3000/TeachersStepsRegister/data/${userId}`

    // courseInstructor

    const AddSectionsData = async (courseId, courseFolderName, initialSections) => {
        try {
            console.log(`id: ${courseId}, courseFolderName: ${courseFolderName}`);
            for (const section of initialSections) {
                const formData = new FormData();
                formData.append(`sectionTitle`, section.sectionTitle);
                formData.append(`sectionNb`, section.sectionNb);
                formData.append(`descriptionSectionBefor`, section.descriptionSectionBefor);
                formData.append(`descriptionSectionAfter`, section.descriptionSectionAfter);
                formData.append(`sectionVideo`, section.sectionVideo);
                formData.append(`sectionImage`, section.sectionImage);
                formData.append(`sectionYoutube`, section.sectionYoutube);
                formData.append(`sectionPdf`, section.sectionPdf);
                formData.append(`sectionAudio`, section.sectionAudio);
                formData.append(`sectionNote`, section.sectionNote);

                await axios.post(`http://localhost:3000/addNewCours/Sections/${courseId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'course-folder-name': courseFolderName
                    }
                });
                console.log('Section added successfully');
                setLoading(false);
                setsucc(true)
                setTimeout(() => {
                    navigate('/myLesson');
                  }, 2000);
                // Go to home after 3 sec .. then set the succ is false 
                console.log('Go to home after 3 sec .. then set the succ is false ')
            }
        } catch (error) {
            setLoading(false);
            setErrorSubmit(true);
            console.error(error);
            console.log('Error adding sections');
        }
    };



    const handleCourseFinalSubmitClick = async (event) => {
        setErrorSubmit(false);
        setsucc(false)
        event.preventDefault();

        const formData = new FormData();

        formData.append('courseName', state.courseName);
        formData.append('mainCover', state.mainCover);
        formData.append('secondCover', state.secondCover);
        formData.append('language', state.language);
        formData.append('courseSubject', state.courseSubject);
        formData.append('instructorName', fullName);
        formData.append('courseInstructor', userId);
        formData.append('courseIntroVideos', state.courseIntroVideos);
        formData.append('description', state.description);
        formData.append('briefDescription', state.briefDescription);
        formData.append('duration', state.duration);
        formData.append('endText', state.endText);
        formData.append('courseLevels', state.courseLevels);
        formData.append('sectionNb', state.sectionNb);
        formData.append('price', state.price);

        if (state.courseName && state.endText && fullName && userId) {
            setLoading(true);
            setErrorSubmit(false);

            try {
                const response = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log(response.data.courseId);
                console.log(response.data.courseFolderName);
                AddSectionsData(response.data.courseId, response.data.courseFolderName, initialSections);
            } catch (error) {
                setLoading(false);

                if (error.response) {
                    setErrorSubmit(true);
                } else {
                    console.log('Error', error.message);
                    setErrorSubmit(true);
                }
            }
        } else {
            console.log('You have to fill out all data form');
        }
    };



    const handleBackSubmitClick = () => {

        setActiveStep(1);


    };




    const handleCancelSubmitClick = () => {

        // setActiveStep(1);
        console.log(' Go to Home page ')
        navigate('/teacherProfile');
        


    };

    // const handleCourseFinalSubmitClick = () => {

    //     console.log(' Submit final ')


    // };


    useEffect(() => {
        if (
            // state.price &&
            state.endText &&

            formObject.validate()
        ) {
            SetSubmitBackGrand('#43e75e')
            SetdisabledBTNSubmit(false)


            // setErrorSubmit(false);
        }
        else {
            // setErrorSubmit(true);
            SetSubmitBackGrand('#e7c143')
            SetdisabledBTNSubmit(true)

        }
    },
        [
            // state.price,
        state.endText,

            formObject,
        ]);

    // console.log("sections:", initialSections);
    // console.log("state:", state);

    const userNameRef = useRef(null);

    useEffect(() => {
        userNameRef.current.focusIn();

        const options = {
            rules: {

                endText: {
                    required: [true, "* Please enter an Final text course / What's next"],
                },

                // price: {
                //     required: [true, "* Please enter a course price"],
                //     number: [true, '* Please enter A valide Number'],


                //     min: [5, '* Please enter a price greater than 5 '],
                // },
            },
        };

        formObject = new FormValidator("#SubmitCours", options);
    }, []);



    return (
        <div className='SubmitCoursDIv'>

            <div className="titleNewCours" >
                <p className="titleNewCoursPP "> the Last Step  : </p>

            </div>

            <div className='SubmitCoursText'>
                {/* <span className='BolDTextCoursMy'>
                    Before submitting your new online course, please note that we will receive 25% of the course earnings once it is published. </span>
                <br /> */}
            </div>

            <div className="control_wrapper" id="control_wrapper">

                <div className="ErrorCOursAdd">
                    {errorSubmit && (
                        <AllAlert
                            type="danger"
                            message="Please fill out all the required fields"
                        />
                    )}
                </div>

                <div className="control_wrapper textbox-form">
                    <form id="SubmitCours">

                        <div className="AddNewCoursForm1">


                            {/* <div className="DivCours MyFirstDivMy">

                                <div className="form-group">
                                    <NumericTextBoxComponent
                                        ref={userNameRef}

                                        name="price"
                                        format="####"
                                        min={0}
                                        value={state.price}
                                        change={update('price')}
                                        placeholder="Course Price:"
                                        floatLabelType="Auto"
                                        data-msg-containerid="errroForprice"
                                    />
                                    <div id="errroForprice" />

                                </div>
                                <br />

                            </div> */}

                            <div className="DivCours1">

                                <div className="form-group">
                                    <TextBoxComponent
                                       ref={userNameRef}
                                        name="endText"
                                        value={state.endText}
                                        change={update('endText')}
                                        multiline={true}
                                        rows={5}
                                        height={"auto"}
                                        placeholder="Graduated student: What's next after the course?"
                                        floatLabelType="Auto"
                                        data-msg-containerid="errroForendText"
                                    />


                                    <div id="errroForendText" />
                                </div>
                                <br />

                            </div>

                        </div>






                    </form>
                </div>

            </div>
            <hr className="HrSearch" id="MyHrSearch" style={{ borderTop: '1px solid white ', width: '70%' }} />


            <div className="titleNewCours" >
                <p className="titleNewCoursPP "> Ready to submit your course? </p>

            </div>

            <div className='SubmitCoursText'>
                <span className='BolDTextCoursMy'>
                    Before submitting your new online course, please note that we will receive 25% of the course earnings once it is published. </span>
                <br /> <br />

                Please ensure that your course materials are complete and ready for publication before submitting them to us for review. <br />
                Our team will carefully evaluate course content to ensure it meets our standards and is suitable for publication on our platform.

                Once your course has been accepted for publication, it will be made available to our community of learners.  <br />
                We wish you all the best on your educational journey and thank you for choosing our platform to share your knowledge and experiences.

                have a great day!
            </div>

            {errorSubmit && <AllAlert type="danger" message="Sorry, something went wrong, try again later" />}
            {Succ && <AllAlert type="success" message="Data submitted successfully " />}


            {!Succ && <>
                <div className='MydivBtnSubmitCourse'>
                    {/* style={{ background: SubmitBackGrand }} onClick={handleCourseFinalSubmitClick} disabled={disabledBTNSubmit} */}
                    {/* const [SubmitBackGrand, SetSubmitBackGrand] = useState('#e7c143'); */}
                    {/* const [disabledBTNSubmit, SetdisabledBTNSubmit] = useState(true); */}
                    <button className=" MyMyMybutton DeletebuttonSection" onClick={handleCancelSubmitClick}>

                        <span>  cancel the course   </span>
                    </button>


                    <button className=" MyMyMybutton NextbuttonCourse backTOInfo" onClick={handleBackSubmitClick} >

                        <span> Back to course </span>
                    </button>


                    <button style={{ background: SubmitBackGrand }} className=" MyMyMybutton submitbuttonCourse" onClick={handleCourseFinalSubmitClick} disabled={disabledBTNSubmit}>

                        <span>

                            {loading ? (
                                <FaSpinner />
                            ) : (
                                "Submit this course "
                            )}



                        </span>
                    </button>




                </div>

            </>}


        </div>
    )
}

export default SubmitPageCours