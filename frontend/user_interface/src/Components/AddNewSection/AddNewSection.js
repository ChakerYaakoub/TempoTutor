
import { useEffect, useRef, useReducer, useState } from "react";
import "./AddNewSection.css"
import "./SyncfusionForm2.css";
import * as React from "react";
import { FormValidator } from "@syncfusion/ej2-inputs";
import {
    TextBoxComponent,
    NumericTextBoxComponent,
    UploaderComponent,
} from "@syncfusion/ej2-react-inputs";
import {
    DropDownListComponent,
    MultiSelectComponent,
} from "@syncfusion/ej2-react-dropdowns";

import AllAlert from "../AllAlert/AllAlert";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { courseSubject, languagesArray, courseDurations } from "../../assets/DummyData"




let formObject;
const AddNewSection = ({ initialSections, sectionIndex, dispatchSections,
    updateSection, error, setError, setCompletFormsNb, completFormsNb, title, pageNb, activeStep }) => {

    const [section, setSection] = useState(initialSections[sectionIndex]);





    useEffect(() => {





        if (pageNb === sectionIndex + 2) {

            if (
                initialSections[sectionIndex].sectionTitle &&
                initialSections[sectionIndex].descriptionSectionBefor &&
                initialSections[sectionIndex].descriptionSectionAfter &&
                initialSections[sectionIndex].sectionNote &&
                initialSections[sectionIndex].sectionVideo &&
                // section.sectionImage &&

                formObject.validate()

            ) {
                console.log(`i ma title : ${ initialSections[sectionIndex].sectionTitle}`)
                setCompletFormsNb({ ...completFormsNb, [pageNb]: true });
                // setCompletFormsNb({ ...completFormsNb, [sectionIndex+1]: true });

                setError(false);
                console.log(`i am if 1 in the page ${pageNb}`)
            } else {
                
                const newCompletFormsNb = { ...completFormsNb };
                for (let i = 1; i < pageNb; i++) {
                    newCompletFormsNb[i] = true;
                }
                setCompletFormsNb(newCompletFormsNb);
                setCompletFormsNb({ ...completFormsNb, [activeStep]: false });

                console.log(`i am in the page ${pageNb}`)
            }

        }




    },
        [initialSections[sectionIndex].sectionTitle,
        initialSections[sectionIndex].descriptionSectionBefor,
        initialSections[sectionIndex].descriptionSectionAfter,
        initialSections[sectionIndex].sectionNote,
        initialSections[sectionIndex].sectionVideo,
        initialSections[sectionIndex].sectionYoutube,
            formObject,
            activeStep, pageNb]);


    // console.log(`i am ${initialSections[0].sectionTitle}`)



    // const newCompletFormsNb = { ...completFormsNb };
    // for (let i = 1; i < pageNb; i++) {
    //     newCompletFormsNb[i] = true;
    // }
    // setCompletFormsNb(newCompletFormsNb);



 




    // for the remove  sectionVideo
    function removesectionVideo() {
        if (document.querySelector(`#sectionVideo${sectionIndex}`)) {
            let removeProfilePictureId = document.querySelector(`#sectionVideo${sectionIndex}`);

            if (removeProfilePictureId.querySelector(".e-file-remove-btn")) {
                let removeButtons =
                    removeProfilePictureId.querySelector(".e-file-remove-btn");
                removeButtons.addEventListener("click", function () {
                    updateSection("sectionVideo")(null);
                });
            }
        }
    }

    removesectionVideo();


    // for the remove sectionImage ,
    function removesectionImage() {
        if (document.querySelector(`#sectionImage${sectionIndex}`)) {
            let removeProfilePictureId = document.querySelector(`#sectionImage${sectionIndex}`);

            if (removeProfilePictureId.querySelector(".e-file-remove-btn")) {
                let removeButtons =
                    removeProfilePictureId.querySelector(".e-file-remove-btn");
                removeButtons.addEventListener("click", function () {
                    updateSection("sectionImage")(null);
                });
            }
        }
    }

    removesectionImage();


    // for the remove sectionPdf ,
    function removesectionPdf() {
        if (document.querySelector(`#sectionPdf${sectionIndex}`)) {
            let removeProfilePictureId = document.querySelector(`#sectionPdf${sectionIndex}`);

            if (removeProfilePictureId.querySelector(".e-file-remove-btn")) {
                let removeButtons =
                    removeProfilePictureId.querySelector(".e-file-remove-btn");
                removeButtons.addEventListener("click", function () {
                    updateSection("sectionPdf")(null);
                });
            }
        }
    }

    removesectionPdf();





    const userNameRef = useRef(null);
    useEffect(() => {
        userNameRef.current.focusIn();

        const options = {
            rules: {
                sectionTitle: {
                    required: [true, "Please enter the Section Title."],
                },
                sectionNote: {
                    required: [true, "Please select a section note."],
                },
                descriptionSectionAfter: {
                    required: [true, "Please enter a description for the section (after the student plays it)."],
                    minLength: [20, "Please enter at least 20 characters."],
                },
                descriptionSectionBefor: {
                    required: [true, "Please enter a description for the section (before the student plays it)."],
                    minLength: [20, "Please enter at least 20 characters."],
                },
                sectionYoutube: {
                    regex: [
                        /^<iframe.*src="https?:\/\/(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})".*<\/iframe>$/,
                        "Please enter a valid YouTube Embedded Code (e.g. iframe..)"
                    ]
                },
                
                
            },
        };

        formObject = new FormValidator(`#CourseAddFormSection${sectionIndex}`, options);

    }, []);





    return (
        // <div>


        //     <div className="form-group">
        //         <TextBoxComponent

        //             name="sectionTitle"
        //             value={section.sectionTitle}
        //             change={updateSection("sectionTitle")}
        //             placeholder="sectionTitle"
        //             floatLabelType="Auto"
        //             data-msg-containerid="errroForfirstName"
        //         />
        //         <div id="errroForfirstName" />
        //     </div>
        // </div>


        //              
        //          
        //       


        //             sectionVideo: null,
        //             sectionImage: null,
        //         
        //             sectionPdf: null,
        //             sectionAudio: null, baleha 

        // 

        <div>


            <div className="titleNewCours" >
                <p className="titleNewCoursPP "> {title}  : </p>

            </div>

            <div className="control_wrapper" id="control_wrapper">

                <div className="ErrorCOursAdd">
                    {error && (
                        <AllAlert
                            type="danger"
                            message="Please fill out all the required fields"
                        />
                    )}
                </div>

                <div className="control_wrapper textbox-form">
                    <form id={`CourseAddFormSection${sectionIndex}`}>
                        

                        <div className="AddNewCoursForm">


                            {/* first div  */}
                            <div className="DivCours MyFirstDivMy">




                                <div className="form-group">
                                    <TextBoxComponent
                                        ref={userNameRef}
                                        name="sectionTitle"
                                        value={initialSections[sectionIndex].sectionTitle}
                                        change={updateSection("sectionTitle")}
                                        placeholder=" Section Title: "
                                        floatLabelType="Auto"
                                        data-msg-containerid="errroForsectionTitle"
                                    />
                                    <div id="errroForsectionTitle" />
                                </div>

                                <br />




                                <div className="form-group">
                                    <TextBoxComponent
                                        name="descriptionSectionBefor"
                                        value={initialSections[sectionIndex].descriptionSectionBefor}
                                        change={updateSection('descriptionSectionBefor')}
                                        multiline={true}
                                        rows={5}
                                        height={"auto"}
                                        placeholder="Information: Provide a description before the course/section is played "
                                        floatLabelType="Auto"
                                        data-msg-containerid="errroForbriefdescriptionSectionBefor"
                                    />


                                    <div id="errroForbriefdescriptionSectionBefor" />
                                </div>
                                <br />


                                <div className="form-group">
                                    <TextBoxComponent

                                        name="sectionYoutube"
                                        value={initialSections[sectionIndex].sectionYoutube}
                                        change={updateSection("sectionYoutube")}
                                        placeholder=" Optional: Enter YouTube Embedded Code (if applicable) "
                                        floatLabelType="Auto"
                                        data-msg-containerid="errroForsectionYoutube"
                                    />
                                    <div id="errroForsectionYoutube" />
                                </div>

                                <br />





                            </div>





                            {/* second   div  */}
                            <div className="DivCours">


                                <div className="form-group">
                                    <p></p> <p></p>
                                    <TextBoxComponent
                                        name="descriptionSectionAfter"
                                        value={initialSections[sectionIndex].descriptionSectionAfter}
                                        change={updateSection('descriptionSectionAfter')}
                                        multiline={true}
                                        rows={5}
                                        height={"auto"}
                                        placeholder="Enter a description for the section (after the course/section is finished) "
                                        floatLabelType="Auto"
                                        data-msg-containerid="errroFordescriptionSectionAfter"
                                    />


                                    <div id="errroFordescriptionSectionAfter" />
                                </div>
                                <br />


                                <div className="form-group">
                                    <TextBoxComponent
                                        name="sectionNote"
                                        value={initialSections[sectionIndex].sectionNote}
                                        change={updateSection('sectionNote')}
                                        multiline={true}
                                        rows={5}
                                        height={"auto"}
                                        placeholder="Enter a note for what to do next "
                                        floatLabelType="Auto"
                                        data-msg-containerid="errroFordescriptionsectionNote"
                                    />


                                    <div id="errroFordescriptionsectionNote" />
                                </div>
                                <br />








                            </div>
                        </div>
                        <hr className="HrSearch" id="MyHrSearch" style={{ borderTop: '1px solid white ', width: '70%' }} />


                        <div className="AddCoursFiles">


                            {/* //             sectionVideo: null,
        //             sectionImage: null,
           //          
        //         
        //             sectionPdf: null, */}

                            <div className="DivFileCours FistFilesCours">
                                <div className="form-group">
                                    <p className="ImageFilesP">  Enter the course/section video (required)</p>

                                    <div id={`sectionVideo${sectionIndex}`}>
                                        <UploaderComponent
                                            multiple={false}
                                            autoUpload={false}
                                            files={initialSections[sectionIndex].sectionVideo}
                                            value={initialSections[sectionIndex].sectionVideo}
                                            change={updateSection("sectionVideo")}
                                            name="sectionVideo"
                                            selected={updateSection("sectionVideo")}
                                            allowedExtensions='.mp4'
                                            placeholder="sectionVideo "
                                            maxFileSize="500 * 1024 * 1024"
                                            data-msg-containerid="errorFormaisectionVideo"
                                        />


                                    </div>

                                    <div id="errorFormaisectionVideo" />

                                </div>
                                <br />

                                <div className="FilesCourse">
                                    <TooltipComponent
                                        content=" course/section video"
                                        position="BottomCenter"
                                    >
                                        <div className="coverImageCourse">
                                            {!initialSections[sectionIndex].sectionVideo && (
                                                <>
                                                    {" "}
                                                    <p> course/section video is Void !</p>{" "}
                                                </>
                                            )}

                                            {initialSections[sectionIndex].sectionVideo && (
                                                <>


                                                    <video id="MyVideoChakerCourse" controls muted>
                                                        <source
                                                            src={URL.createObjectURL(initialSections[sectionIndex].sectionVideo)}


                                                            type="video/mp4"
                                                        />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </>
                                            )}
                                        </div>
                                    </TooltipComponent>
                                    <br />
                                    <br />

                                </div>

                            </div>
                            <div className="DivFileCours SecondDIvCore">
                                <div className="form-group">
                                    <p className="ImageFilesP">Image : additional information  (Optional)</p>

                                    <div id={`sectionImage${sectionIndex}`}>
                                        <UploaderComponent
                                            multiple={false}
                                            autoUpload={false}
                                            files={initialSections[sectionIndex].sectionImage}
                                            value={initialSections[sectionIndex].sectionImage}
                                            change={updateSection("sectionImage")}
                                            name="sectionImage"
                                            selected={updateSection("sectionImage")}
                                            allowedExtensions=".jpeg,.jpg,.png"
                                            placeholder="sectionImage  (Optional) "
                                            maxFileSize="500 * 1024 * 1024"
                                            data-msg-containerid="errorForsecondCoversectionImage"
                                        />


                                    </div>

                                    <div id="errorForsecondCoversectionImage" />

                                </div>
                                <br />

                                <div className="FilesCourse">
                                    <TooltipComponent
                                        content="  Image : additional information"
                                        position="BottomCenter"
                                    >
                                        <div className="coverImageCourse">
                                            {!initialSections[sectionIndex].sectionImage && (
                                                <>
                                                    {" "}
                                                    <p id="additionalP"> Image : additional information here </p>{" "}
                                                </>
                                            )}

                                            {initialSections[sectionIndex].sectionImage && (
                                                <>
                                                    <img
                                                        id="MyImgChakerCourse"
                                                        src={URL.createObjectURL(initialSections[sectionIndex].sectionImage)}
                                                        alt=""
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </TooltipComponent>
                                    <br />
                                    <br />

                                </div>

                            </div>
                            <div className=" DivFileCours NoneNoneNone">



                                <div className="form-group">
                                    <p className="ImageFilesP">PDF : additional information  (Optional)</p>

                                    <div id={`sectionPdf${sectionIndex}`}>
                                        <UploaderComponent
                                            multiple={false}
                                            autoUpload={false}
                                            files={initialSections[sectionIndex].sectionPdf}
                                            value={initialSections[sectionIndex].sectionPdf}
                                            change={updateSection("sectionPdf")}
                                            name="sectionPdf"
                                            selected={updateSection("sectionPdf")}
                                            allowedExtensions='.pdf'
                                            placeholder="CosectionPdf : "
                                            maxFileSize="500 * 1024 * 1024"
                                            data-msg-containerid="errorForcoursesectionPdf"
                                        />


                                    </div>

                                    <div id="errorForcoursesectionPdf" />

                                </div>
                                <br />

                                <div className="FilesCourse">
                                    <TooltipComponent
                                        content="  PDF : additional information "
                                        position="BottomCenter"
                                    >
                                        <div className="coverVideoCourse">
                                            {!initialSections[sectionIndex].sectionPdf && (
                                                <>
                                                    {" "}
                                                    <p id="additionalP"> PDF : additional information here</p>{" "}
                                                </>
                                            )}

                                            {initialSections[sectionIndex].sectionPdf && (
                                                <>
                                                    {/* <img
                                                        id="MyImgChakerCourse"
                                                        src={URL.createObjectURL(section.sectionPdf)}
                                                        alt=""
                                                    /> */}

                                                    <embed  id="MyImgChakerCourse" className='MypdfChakerCourse' src={`${URL.createObjectURL(initialSections[sectionIndex].sectionPdf)}#toolbar=0`} type="application/pdf" />


                                                </>
                                            )}
                                        </div>
                                    </TooltipComponent>
                                    <br />
                                    <br />

                                </div>





                            </div>

                        </div>

                    </form>
                </div>
            </div>



        </div>
    );
};


export default AddNewSection