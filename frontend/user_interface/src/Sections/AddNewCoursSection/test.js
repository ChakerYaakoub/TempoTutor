// import React, { useState, useEffect, useRef, useReducer } from "react";
// import { GlobalVariales } from '../../UseContext';
// import { useContext } from "react";
// import "./AddNewCoursSection.css";
// import {
//     AddNewCours
// } from "../../Components/index";


// const AddNewCoursSection = () => {
//     const { userId } = useContext(GlobalVariales);
//     // console.log(`i am teacheers id : ${userId}`);

//     const initialSections = [{
//         sectionTitle: "",
//         sectionNumber: "",
//         sectionDescription: "",
//         sectionVideo: null,
//         sectionImage: null,
//         sectionYoutube: "",
//         sectionPdf: null,
//         sectionAudio: null,
//         sectionNote: ""
//     }] ;

//     const [sectionIndex, setSectionIndex] = useState(0);

//     const initialState = {
//         courseName: "",
//         mainCover: null,
//         secondCover: null,
//         language:"" ,
//         courseSubject: "",
//         courseInstructor: userId,
//         courseIntroVideos: null,
//         description: "",
//         briefDescription: "",
//         duration: "",
//         endText: "",
//         sectionNb: sectionIndex,
//         price: 0,
//     };




//     const reducer = (state, action) => {
//         switch (action.type) {
//           case "update":
//             return {
//               ...state,
//               [action.field]:
//                 typeof action.value === "string"
//                   ? action.value.trim()
//                   : action.value,
//             };
//           default:
//             return initialState;
//         }
//       };
    

//       const [state, dispatch] = useReducer(reducer, initialState);

//       const update = (field) => (event) => {
//         let value;
    
//         if (event && event.filesData) {
//           value = event.filesData[0].rawFile;
//         } else if (event && event.value) {
//           value = event.value;
//         } else {
//           value = null;
//         }
    
//         dispatch({ type: "update", field, value });
//         console.log(value);
//       };
    

//     const addSection = () => {
//         const newSection = {
//             sectionTitle: "",
//             sectionNumber: sectionIndex,
//             sectionDescription: '',
//             sectionVideo: null,
//             sectionImage: null,
//             sectionYoutube: null,
//             sectionPdf: null,
//             sectionAudio:null,
//             sectionNote: "",
//         };
    
//         // update sectionNb to point to the new section
 
//         setSectionIndex(sectionIndex + 1);
    
//         dispatch({
//             type: "addSection",
//             section: newSection,
//             newSectionIndex: sectionIndex,
//         });
//     };
    

//     const updateSection = (index, field) => (event) => {
//         let value;

//         if (event && event.filesData) {
//             value = event.filesData[0].rawFile;
//         } else if (event && event.value) {
//             value = event.value;
//         } else {
//             value = null;
//         }
//         console.log(value);

//         dispatch({ type: "update", field: `sections[${index}].${field}`, value });
//     };


//     console.log(JSON.stringify(state));

//     return (
//         <div>
//             <AddNewCours
//                 userId={userId}
//                 update={update}
//                 updateSection={updateSection}
//                 state={state}
//                 addSection={addSection}
//                 sectionIndex={sectionIndex}
//                 setSectionIndex={setSectionIndex}



//             />
//         </div>
//     )
// }

// export default AddNewCoursSection 