import { useEffect, useRef, useReducer } from 'react';
import "./SyncfusionForm.css"
import * as React from 'react';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { languagesArray } from "../../../assets/DummyData";



import AllAlert from '../../AllAlert/AllAlert';

import "./Experienceregister.css"
let formObject;
const Experienceregister = ({ update, state, completFormsNb, setCompletFormsNb, error, setError }) => {

  // for the remove profile picture 
  function removeCv() {
    if (document.querySelector('#IdCV')) {

      let removeIdCV = document.querySelector('#IdCV');

      if (removeIdCV.querySelector('.e-file-remove-btn')) {
        let removeButtons = removeIdCV.querySelector('.e-file-remove-btn');
        removeButtons.addEventListener("click", function () {
          update('cv')(null);
        })
      }
    }
  }


  removeCv()




  const ExperienceYears = [
    "0-1 year",
    "1-2 years",
    "2-5 years",
    "5+ years",

  ];


  // cv: null,
  // experience: '',
  // descriptionEXP: '',

  useEffect(() => {
    if (state.cv && state.experience
      && state.descriptionEXP && formObject.validate()) {
      setCompletFormsNb({ ...completFormsNb, 3: true });

      setError(false)
    } else {
      setCompletFormsNb({ ...completFormsNb, 3: false });


    }
  }, [state.cv, state.experience,
  state.descriptionEXP, formObject]);




  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focusIn();




    const options = {
      rules: {
        experience: {
          required: [true, '* Please select Your Experience/Years'],
        },
        // cv: {
        //   required: [true, '* Please enter your CV'],
        // },
        languages: {
          required: [true, '* Please select at least one languages.'],
        },
        descriptionEXP: {
          required: [true, '* Please enter your description/experience'],
        },


      },
    };

    formObject = new FormValidator('#ExperienceInfoForm', options);




  }, []);

  return (
    <div>
      <div className="control_wrapper" id="control_wrapper">
        {error && <AllAlert type="danger" message="Please fill out all the required fields" />}
        <div className="control_wrapper textbox-form">
          <form id="ExperienceInfoForm" >

            <div className="form-group">

              <DropDownListComponent
                ref={userNameRef}
                name="experience"

                value={state.experience}

                change={update('experience')}
                ignoreAccent={true}
                dataSource={ExperienceYears}
                allowFiltering={true}
                placeholder="Experience/Years"
                floatLabelType="Auto"
                filterBarPlaceholder="e.g: 1-2 years"
                data-msg-containerid="errroForexperience" />


              <div id="errroForexperience" />

            </div>

            <br />


            <div className="form-group">

              <MultiSelectComponent
                name="languages"

                allowFiltering={true}
                value={state.languages}

                change={update('languages')}
                dataSource={languagesArray}
             
                floatLabelType="Auto"
          
                filterBarPlaceholder="e.g: English"
                placeholder="select at least one languages  "
                data-msg-containerid="errroForlanguages" />

              <div id="errroForlanguages" />
            </div>

            <br />


            <div className="form-group">
              <TextBoxComponent
                name="descriptionEXP"
                value={state.descriptionEXP}
                change={update('descriptionEXP')}
                multiline={true}
                rows={5}
                height={"auto"}
                placeholder="Describe your Years/Experience"
                floatLabelType="Auto"
                data-msg-containerid="errroFordescriptionEXP"
              />


              <div id="errroFordescriptionEXP" />
            </div>

            <br />


            <div className="form-group">
              <p className='ImageFilesP'>Your Curriculum Vitae ".PDF"</p>

              <div id='IdCV'>

                <UploaderComponent
                  multiple={false}
                  autoUpload={false}
                  files={state.cv}

                  value={state.cv}
                  change={update('cv')}

                  name="cv"
                  selected={update('cv')}
                  // allowedExtensions='.jpeg,.jpg,.png,.pdf'
                  allowedExtensions='.pdf'
                  placeholder="cv cv"
                  maxFileSize="500 * 1024 * 1024"
                  data-msg-containerid="errorForcv" />

              </div>



              <div id="errorForcv" />
              <br />









            </div>
            <br />

            <TooltipComponent
              content="Curriculum Vitae"
              position='BottomCenter'>

              <div className='coveroneImage'>

                {!state.cv && <>     <p> Your Curriculum Vitae ".PDF" is Void !</p> </>}
                {state.cv && <>

                  <embed className='MyImgoneChaker' src={`${URL.createObjectURL(state.cv)}#toolbar=0`} type="application/pdf" />

                  {/* <iframe  className='MyImgoneChaker' src={`${URL.createObjectURL(state.cv)}#toolbar=0`} >
                        </iframe> */}

                </>}

              </div>

            </TooltipComponent>










          </form>
        </div>
      </div>
    </div>
  )
}

export default Experienceregister