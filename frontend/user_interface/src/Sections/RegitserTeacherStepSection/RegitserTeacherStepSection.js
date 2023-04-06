import React, { useState, useEffect, useRef, useReducer } from "react";
import { GlobalVariales } from '../../UseContext';
import { useContext } from "react";
// import { IsAuthenticated } from "../../isAuthenticatedFunction";


import "./RegitserTeacherStepSection.css";
import {
  HeaderRegTeashers,
  SideBareRegisterTeachers,
  ContentRegTeachers,
} from "../../Components/index";

const RegitserTeacherStepSection = () => {

  const { userFirstName, setUserFirstName,  userLastName,setUserLastName,userId} = useContext(GlobalVariales);
  const [activeStep, setActiveStep] = useState(1);
 
    //  console.log(JSON.parse(localStorage.getItem("userInfo")).last_name);


  console.log(`i am ${userId}`)




  const [error, setError] = useState(false);

  const [completFormsNb, setCompletFormsNb] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  }); 

  const [initialState, setState] = useState({
    userId: userId, 
    firstName: userFirstName ,
    lastName: userLastName  , 
    country: "",
    nationality: "",
    phone: "",
    profilePicture: null,
    identification: null,
    instruments: [],
    languages:[],
    cv: null,
    experience: "",
    descriptionEXP: "",
    certificate: null,
    about: "",
  });

  const [instruments, setInstruments] = useState([]);

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
        return initialState;
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
  console.log(`state id  ${state.userId}`)


  // setCompletForms({ ...completForms, 1: true });

  return (
    <div className="RegitserTeacherStepSection">
      <HeaderRegTeashers
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        completFormsNb={completFormsNb}
        setCompletFormsNb={setCompletFormsNb}
        setError={setError}
        error={error}
      />
      <div className="FlexDivTeashers">
        <div className="SideBareRegisterTeachersdiv">
          <SideBareRegisterTeachers
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
        <div className="ContentRegTeachersdiv">
          <ContentRegTeachers
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            update={update}
            setState={setState}
            state={state}
            instruments={instruments}
            setInstruments={setInstruments}
            error={error}
            setError={setError}
            completFormsNb={completFormsNb}
            setCompletFormsNb={setCompletFormsNb}
          />
        </div>
      </div>
    </div>
  );
};

export default RegitserTeacherStepSection;
