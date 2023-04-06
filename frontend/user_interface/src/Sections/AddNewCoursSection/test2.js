// import { useEffect, useRef, useReducer,useState } from "react";

// import "./AddNewCours.css";
// import "./SyncfusionForm1.css";
// import axios from 'axios';
// import * as React from "react";
// import { FormValidator } from "@syncfusion/ej2-inputs";
// import {
//     TextBoxComponent,
//     NumericTextBoxComponent,
//     UploaderComponent,
// } from "@syncfusion/ej2-react-inputs";
// import {
//     DropDownListComponent,
//     MultiSelectComponent,
// } from "@syncfusion/ej2-react-dropdowns";

// import AllAlert from "../AllAlert/AllAlert";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import { GlobalVariales } from '../../UseContext';
// import { useContext } from "react";

// //we have alert in Dialoge popups / form support

// let formObject;



// {/* <input type="text" value={state.sections[index].sectionTitle} onChange={updateSection(index, "sectionTitle")} /> */ }

// {/* <input type="text" value={state.courseName} onChange={update("courseName")} /> */ }


// const AddNewCours = ({ userId, update, updateSection, state, addSection }) => {

//     // const { setUserFirstName, setUserLastName, userId } = useContext(GlobalVariales);
//     const url = `http://localhost:3000/addNewCours/cours`

//     const [loading, setLoading] = useState(false);
//     const [succ, setSucc] = useState(false);
//     const [error, setError] = useState(false);

//     const handleSubmitCours = async (event) => {
//         setError(false);
//         event.preventDefault();
      
//         const formData = new FormData();
//         formData.append("courseName", state.courseName);
//         formData.append("mainCover", state.mainCover);
//         formData.append("secondCover", state.secondCover);
//         formData.append("courseSubject", state.courseSubject);
//         formData.append("courseInstructor", userId);
//         formData.append("courseIntroVideos", state.courseIntroVideos);
//         formData.append("description", state.description);
//         formData.append("briefDescription", state.briefDescription);
//         formData.append("duration", state.duration);
//         formData.append("endText", state.endText);
//         formData.append("price", state.price);
      
//         state.sections.forEach((section, index) => {
//           formData.append(`sections[${index}].sectionTitle`, section.sectionTitle);
//         //   formData.append(`sections[${index}].sectionNumber`, section.sectionNumber);
//         //   formData.append(
//         //     `sections[${index}].sectionDescription`,
//         //     section.sectionDescription
//         //   );
//         //   formData.append(`sections[${index}].sectionVideo`, section.sectionVideo);
//         //   formData.append(`sections[${index}].sectionImage`, section.sectionImage);
//         //   formData.append(
//         //     `sections[${index}].sectionYoutube`,
//         //     section.sectionYoutube
//         //   );
//         //   formData.append(`sections[${index}].sectionPdf`, section.sectionPdf);
//         //   formData.append(`sections[${index}].sectionAudio`, section.sectionAudio);
//         //   formData.append(`sections[${index}].sectionNote`, section.sectionNote);
      
//         //   section.comment.forEach((comment, commentIndex) => {
//         //     formData.append(
//         //       `sections[${index}].comment[${commentIndex}].commentText`,
//         //       comment.commentText
//         //     );
//         //     formData.append(
//         //       `sections[${index}].comment[${commentIndex}].commentUser`,
//         //       comment.commentUser
//         //     );
//         //   });
      
//         //   section.studentDone.forEach((student, studentIndex) => {
//         //     formData.append(
//         //       `sections[${index}].studentDone[${studentIndex}]`,
//         //       student
//         //     );
//         //   });
//         });
      
//         if (
//           state.courseName &&
//         //   state.mainCover &&
//         //   state.courseSubject &&
//         //   state.courseInstructor &&
//         //   state.price &&
//           state.sections.length > 0
//         ) {
//           setLoading(true);
//           setError(false);
//           for (const pair of formData.entries()) {
//           console.log(pair[0], pair[1]);
//         }
//         // console.log(...formData.entries());
     
        
//     // console.log(JSON.stringify(formData));
      
//           try {
//             const response = await axios.post(url, formData, {
//               headers: {
//                 "Content-Type": "multipart/form-data",
//               },
//             });
      
//             if (response.status === 200) {
//               setSucc(true);
//             }
//             setLoading(false);
//           } catch (error) {
//             setLoading(false);
      
//             if (error.response) {
//               setError(true);
//             } else {
//               console.log("Error", error.message);
//               setError(true);
//             }
//           }
//         } else {
//           console.log("You have to fill out all data form");
//         }
//       };
      

//     return (
//         <div>
//             <div>
             

//                 <div className="form-group">
//                     <TextBoxComponent
//                         name="courseName"
//                         value={state.courseName}
//                         change={update("courseName")}
//                         placeholder="courseName"
//                         floatLabelType="Auto"
//                         data-msg-containerid="errroForlastName"
//                     />
//                     <div id="errroForlastName" />
//                 </div>
//             </div>
          
//             <button onClick={addSection}>Add New Section</button>

//             {state.sections.map((section, index) => (
//                 <div key={index}>
                   
                   
                

//                     <div className="form-group">
//                     <TextBoxComponent
//                         name="sectionTitle"
//                         value={state.sectionTitle}
//                         change={updateSection(index, "sectionTitle")}
//                         placeholder="sectionTitle"
//                         floatLabelType="Auto"
//                         data-msg-containerid="errroForlastName"
//                     />
//                     <div id="errroForlastName" />
//                 </div>
//                 </div>
//             ))}
// <br /><br /><br />

// <button className=" MyMybutton Nextbutton" onClick={handleSubmitCours} >
//     submit

//     </button>
//         </div>
//     );
// }

// export default AddNewCours