import React, { useState, useEffect, useRef, useReducer } from "react";
import { GlobalVariales } from '../../UseContext';
import { useContext } from "react";
import "./AddNewCoursSection.css";
import { AddNewCours, AddNewSection, HeaderAddNewCours, ContentsAddNewCours } from "../../Components/index";



const sectionReducer = (state, action) => {
    switch (action.type) {
        case "add_section":
            return [...state, action.section];
        case "update_section":
            return state.map((section, index) => {
                if (index === action.sectionIndex) {
                    return {
                        ...section,
                        [action.field]:
                            typeof action.value === "string"
                                ? action.value.trim()
                                : action.value
                    };
                }
                return section;
            });
        case "delete_section":
            console.log("Deleting section at index", action.sectionIndex);
            return state.filter((section, index) => index !== action.sectionIndex);
        default:
            return state;
    }
};


const AddNewCoursSection = () => {

    const [error, setError] = useState(false);


    const [sectionIndex, setSectionIndex] = useState(0);
    const [activeStep, setActiveStep] = useState(1);
    const [SubmitPage, SetSubmitPage] = useState(0);
    const [totalPage, SettotalPage] = useState(1);


    const { userId } = useContext(GlobalVariales);


    const [completFormsNb, setCompletFormsNb] = useState({
        1: false
    });

    useEffect(() => {
        setCompletFormsNb(prevState => {
            const newForms = {};
            for (let i = 2; i <= sectionIndex + 1; i++) {
                newForms[i] = false;
            }
            return { ...prevState, ...newForms };
        });
        const newCompletFormsNb = { ...completFormsNb };
        for (let i = 2; i < sectionIndex; i++) {
            newCompletFormsNb[i] = true;
        }
        setCompletFormsNb(newCompletFormsNb);
    }, [sectionIndex]);

    console.log(completFormsNb)


    const [initialSections, dispatchSections] = useReducer(
        sectionReducer,
        []
    );

    const addSection = () => {
        // update sectionNb to point to the new section
        setSectionIndex(sectionIndex + 1);
        SettotalPage(totalPage+1)

        // add new section to the initialSections array
        dispatchSections({
            type: "add_section",
            section: {
                sectionTitle: "",
                sectionNb : sectionIndex+1,
                descriptionSectionBefor: "",
                descriptionSectionAfter: "",
                sectionVideo: null,
                sectionImage: null,
                sectionYoutube: "",
                sectionPdf: null,
                sectionAudio: null,
                sectionNote: ""
            }
        });
    };


    const addSubmitPage = () => {

        if(SubmitPage===0){
               SetSubmitPage(SubmitPage + 1);
        }
  
     

   

     
    };

    const initialState = {
        courseName: "",
        mainCover: null,
        secondCover: null,
        language: "",
        courseSubject: "",
        courseInstructor: userId,
        courseIntroVideos: null,
        description: "",
        briefDescription: "",
        duration: "",
        endText: "",
        sectionNb: 0,
        courseLevels:"",
        price: 0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "update":
                return {
                    ...state,
                    [action.field]:
                        typeof action.value === "string"
                            ? action.value.trim()
                            : action.value,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const update = (field) => (event) => {
        let value;

        if (event && event.filesData) {
            value = event.filesData[0].rawFile;
        } else if (event && event.value) {
            value = event.value;
        } else {
            value = null;
        }

        dispatch({ type: "update", field, value });
        console.log(value);
    };


    const deleteSection = (index) => {
        console.log("Before deleting:", initialSections);
        dispatchSections({ type: "delete_section", sectionIndex: index });
        console.log("After deleting:", initialSections);
    };
    




    useEffect(() => {
        // Here you can handle any side-effects related to the state or props
        console.log("sections:", initialSections);
    }, [initialSections]);


    let contents=[];
    return (
        <div>
            <HeaderAddNewCours
                sectionIndex
                completFormsNb={completFormsNb}
                setCompletFormsNb={setCompletFormsNb}
                addSection={addSection}

                activeStep={activeStep}
                setActiveStep={setActiveStep}
                setError={setError}
                error={error}
                initialSections={initialSections}
                deleteSection = {deleteSection}
                contents={contents}
                addSubmitPage={addSubmitPage}
                SubmitPage={SubmitPage}
                 SetSubmitPage={SetSubmitPage}
                 totalPage={totalPage}
      
        
          
                
                dispatchSections={dispatchSections}
         

            />



            <ContentsAddNewCours
                completFormsNb={completFormsNb}
                setCompletFormsNb={setCompletFormsNb}
                addSection={addSection}
                update={update}
                state={state}
                contents={contents}
                SubmitPage={SubmitPage}
                SetSubmitPage={SetSubmitPage}
                
                


                setError={setError}
                error={error}





                initialSections={initialSections}
                sectionIndex={sectionIndex}


                dispatchSections={dispatchSections}




                activeStep={activeStep}
                setActiveStep={setActiveStep}



            />

        </div>
    );
};


export default AddNewCoursSection;
