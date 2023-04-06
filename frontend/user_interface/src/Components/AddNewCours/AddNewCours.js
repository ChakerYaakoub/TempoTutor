
import { useEffect, useRef, useReducer } from "react";
import "./AddNewCours.css"
import "./SyncfusionForm1.css";
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
import { courseSubject, languagesArray, courseDurations ,CourseDifficultyLevels} from "../../assets/DummyData"



let formObject;
const AddNewCours = ({ setCompletFormsNb, completFormsNb, update, state, setError, error, activeStep,pageNb }) => {


  useEffect(() => {
    if (
      state.courseName &&
      state.mainCover &&
      state.secondCover &&
      state.language &&
      state.courseSubject &&
      state.courseIntroVideos &&
      state.description &&
      state.briefDescription &&
      state.duration &&
      state.courseLevels && 
      state.price && 
      formObject.validate()
    ) {
      setCompletFormsNb({ ...completFormsNb,[pageNb]: true });

      setError(false);
    } else {
      setCompletFormsNb({ ...completFormsNb, [pageNb]: false });
    }
  },
    [state.courseName,
    state.mainCover,
    state.secondCover,
    state.language,
    state.courseSubject,
    state.courseIntroVideos,
    state.description,
    state.briefDescription,
    state.duration,
    state.courseLevels,
    state.price,
      formObject,
      activeStep,]);

  // for the remove mainCover
  function removemainCover() {
    if (document.querySelector("#mainCover")) {
      let removeProfilePictureId = document.querySelector("#mainCover");

      if (removeProfilePictureId.querySelector(".e-file-remove-btn")) {
        let removeButtons =
          removeProfilePictureId.querySelector(".e-file-remove-btn");
        removeButtons.addEventListener("click", function () {
          update("mainCover")(null);
        });
      }
    }
  }

  removemainCover();

  // for the remove secondCover

  function RemovesecondCover() {
    if (document.querySelector("#secondCover")) {
      let removeProfilePictureId = document.querySelector("#secondCover");

      if (removeProfilePictureId.querySelector(".e-file-remove-btn")) {
        let removeButtons =
          removeProfilePictureId.querySelector(".e-file-remove-btn");
        removeButtons.addEventListener("click", function () {
          update("secondCover")(null);
        });
      }
    }
  }

  RemovesecondCover();

  // for the remove courseIntroVideos

  function RemovecourseIntroVideos() {
    if (document.querySelector("#courseIntroVideos")) {
      let removeProfilePictureId = document.querySelector("#courseIntroVideos");

      if (removeProfilePictureId.querySelector(".e-file-remove-btn")) {
        let removeButtons =
          removeProfilePictureId.querySelector(".e-file-remove-btn");
        removeButtons.addEventListener("click", function () {
          update("courseIntroVideos")(null);
        });
      }
    }
  }

  RemovecourseIntroVideos();



  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focusIn();

    const options = {
      rules: {
        courseName: {
          required: [true, "* Please enter a course name"],
          maxLength: [40, '* The course name should be less than 40 characters.'],
        },
        // mainCover: {
        //   required: [true, "* Please upload a main cover image"],
        // },
        // secondCover: {
        //   required: [true, "* Please upload a main cover image"],
        // },
        language: {
          required: [true, "* Please select a language"],
        },
        courseSubject: {
          required: [true, "* Please enter a course subject"],
        },
        // courseInstructor: {
        //   required: [true, "* Please enter a course instructor"],
        // },
        // courseIntroVideos: {
        //   required: [true, "* Please upload a course introduction video"],
        // },
        description: {
          required: [true, "* Please enter a course description"],
          minLength: [20, '* Please enter at least 20 characters.'],
        },
        briefDescription: {
          required: [true, "* Please enter a brief course description"],
          minLength: [20, '* Please enter at least 20 characters.'],
          maxLength: [100, '* The brief Description should be less than 100 characters.'],
        },
        duration: {
          required: [true, "* Please enter a course duration"],
        },
        courseLevels: {
          required: [true, "* Please enter the Course Levels"],
        },
        price: {
          required: [true, "* Please enter a course price"],
          number: [true, '* Please enter A valide Number'],


          min: [5, '* Please enter a price greater than 5 '],
      },
        // sectionNb: {
        //   required: [true, "* Please enter the number of course sections"],
        // },
        // price: {
        //   required: [true, "* Please enter a course price"],
        // },
      },
    };

    formObject = new FormValidator("#CourseAddForm", options);
  }, []);



  return (


    // mainCover: null, img 
    // secondCover: null, img 
    // courseIntroVideos: null, video 

    // courseInstructor: userId, default 
    // endText: "", in the end 
    // sectionNb: sectionIndex, default 
    // price: 0,  in the end 
    <div>
      <div className="titleNewCours" >
        <p className="titleNewCoursPP "> Course description  : </p>

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
          <form id="CourseAddForm">

            <div className="AddNewCoursForm">


              {/* first div  */}
              <div className="DivCours MyFirstDivMy">



                <div className="form-group">
                  <TextBoxComponent
                    ref={userNameRef}
                    name="courseName"
                    value={state.courseName}
                    change={update("courseName")}
                    placeholder="Course Tilte "
                    floatLabelType="Auto"
                    data-msg-containerid="errroForcourseName"
                  />
                  <div id="errroForcourseName" />
                </div>

                <br />

                <div className="form-group">
                  <DropDownListComponent
                    name="courseSubject"
                    value={state.courseSubject}
                    change={update("courseSubject")}
                    ignoreAccent={true}
                    dataSource={courseSubject}
                    allowFiltering={true}
                    placeholder="Course Subject :"
                    floatLabelType="Auto"
                    filterBarPlaceholder="e.g: Piano"
                    data-msg-containerid="errroForcourseSubject"
                  />

                  <div id="errroForcourseSubject" />
                </div>

                <br />
                <div className="form-group">
                  <TextBoxComponent
                    name="briefDescription"
                    value={state.briefDescription}
                    change={update('briefDescription')}
                    multiline={true}
                    rows={5}
                    height={"auto"}
                    placeholder="Enter a brief description (max 100 characters)"
                    floatLabelType="Auto"
                    data-msg-containerid="errroForbriefDescription"
                  />


                  <div id="errroForbriefDescription" />
                </div>
                <br />

                <div className="form-group">
                  <DropDownListComponent
                    name="courseLevels"
                    value={state.courseLevels}
                    change={update("courseLevels")}
                    ignoreAccent={true}
                    dataSource={CourseDifficultyLevels}
                    allowFiltering={true}
                    placeholder="Course Difficulty Levels:"
                    floatLabelType="Auto"
                    filterBarPlaceholder="e.g: Beginner"
                    data-msg-containerid="errroForcoursecourseLevels"
                  />

                  <div id="errroForcoursecourseLevels" />
                </div>

                <br />





              </div>





              {/* tene  div  */}
              <div className="DivCours">

                <div className="form-group">
                  <DropDownListComponent
                    name="language"
                    value={state.language}
                    change={update("language")}
                    ignoreAccent={true}
                    dataSource={languagesArray}
                    allowFiltering={true}
                    placeholder="Course language :"
                    floatLabelType="Auto"
                    filterBarPlaceholder="e.g: Englich"
                    data-msg-containerid="errroForcourselanguage"
                  />

                  <div id="errroForcourselanguage" />
                </div>

                <br />

                <div className="form-group">
                  <DropDownListComponent
                    name="duration"
                    value={state.duration}
                    change={update("duration")}
                    ignoreAccent={true}
                    dataSource={courseDurations}
                    allowFiltering={true}
                    placeholder="Estimated duration of the course :"
                    floatLabelType="Auto"
                    filterBarPlaceholder="e.g: 1 hour"
                    data-msg-containerid="errroForcourseduration"
                  />

                  <div id="errroForcourseduration" />
                </div>

                <br />

                <div className="form-group">
                  <TextBoxComponent
                    name="description"
                    value={state.description}
                    change={update('description')}
                    multiline={true}
                    rows={5}
                    height={"auto"}
                    placeholder="Enter the Full Course Description "
                    floatLabelType="Auto"
                    data-msg-containerid="errroFordescription"
                  />


                  <div id="errroFordescription" />
                </div>
                <br />

                <div className="form-group">
                                    <NumericTextBoxComponent
                                    

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


              </div>
            </div>
            <hr className="HrSearch" id="MyHrSearch" style={{ borderTop: '1px solid white ', width: '70%' }} />


            <div className="AddCoursFiles">

              <div className="DivFileCours FistFilesCours">
                <div className="form-group">
                  <p className="ImageFilesP"> Main Course Image </p>

                  <div id="mainCover">
                    <UploaderComponent
                      multiple={false}
                      autoUpload={false}
                      files={state.mainCover}
                      value={state.mainCover}
                      change={update("mainCover")}
                      name="mainCover"
                      selected={update("mainCover")}
                      allowedExtensions=".jpeg,.jpg,.png"
                      placeholder="mainCover "
                      maxFileSize="500 * 1024 * 1024"
                      data-msg-containerid="errorFormainCover"
                    />


                  </div>

                  <div id="errorFormainCover" />

                </div>
                <br />

                <div className="FilesCourse">
                  <TooltipComponent
                    content=" Main Course Image"
                    position="BottomCenter"
                  >
                    <div className="coverImageCourse">
                      {!state.mainCover && (
                        <>
                          {" "}
                          <p> Main Course Image  is Void !</p>{" "}
                        </>
                      )}

                      {state.mainCover && (
                        <>
                          <img
                            id="MyImgChakerCourse"
                            src={URL.createObjectURL(state.mainCover)}
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
              <div className="DivFileCours SecondDIvCore">
                <div className="form-group">
                  <p className="ImageFilesP">Secondary Image  :</p>

                  <div id="secondCover">
                    <UploaderComponent
                      multiple={false}
                      autoUpload={false}
                      files={state.secondCover}
                      value={state.secondCover}
                      change={update("secondCover")}
                      name="secondCover"
                      selected={update("secondCover")}
                      allowedExtensions=".jpeg,.jpg,.png"
                      placeholder="Secondary Image (Optional) "
                      maxFileSize="500 * 1024 * 1024"
                      data-msg-containerid="errorForsecondCover"
                    />


                  </div>

                  <div id="errorForsecondCover" />

                </div>
                <br />

                <div className="FilesCourse">
                  <TooltipComponent
                    content="  second Cover"
                    position="BottomCenter"
                  >
                    <div className="coverImageCourse">
                      {!state.secondCover && (
                        <>
                          {" "}
                          <p> Secondary Image  is Void !</p>{" "}
                        </>
                      )}

                      {state.secondCover && (
                        <>
                          <img
                            id="MyImgChakerCourse"
                            src={URL.createObjectURL(state.secondCover)}
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
                  <p className="ImageFilesP">Course Introduction Videos :</p>

                  <div id="courseIntroVideos">
                    <UploaderComponent
                      multiple={false}
                      autoUpload={false}
                      files={state.courseIntroVideos}
                      value={state.courseIntroVideos}
                      change={update("courseIntroVideos")}
                      name="courseIntroVideos"
                      selected={update("courseIntroVideos")}
                      allowedExtensions='.mp4'
                      placeholder="Course Introduction Videos : "
                      maxFileSize="500 * 1024 * 1024"
                      data-msg-containerid="errorForcourseIntroVideos"
                    />


                  </div>

                  <div id="errorForsecondCover" />

                </div>
                <br />

                <div className="FilesCourse">
                  <TooltipComponent
                    content="  Course Introduction Videos "
                    position="BottomCenter"
                  >
                    <div className="coverVideoCourse">
                      {!state.courseIntroVideos && (
                        <>
                          {" "}
                          <p> Introduction Videos is Void !</p>{" "}
                        </>
                      )}

                      {state.courseIntroVideos && (
                        <>
                          <img
                            id="MyImgChakerCourse"
                            src={URL.createObjectURL(state.courseIntroVideos)}
                            alt=""
                          />

                          <video id="MyVideoChakerCourse" controls muted>
                            <source
                              src={URL.createObjectURL(state.courseIntroVideos)}


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

            </div>

          </form>
        </div>
      </div>



    </div>
  )
}

export default AddNewCours