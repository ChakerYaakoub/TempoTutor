import { useEffect, useRef, useReducer } from 'react';
import "./SyncfusionForm.css"
import * as React from 'react';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import AllAlert from '../../AllAlert/AllAlert';
import "./CertificateRegister.css"


let formObject;
const CertificateRegister = ({ update, state, completFormsNb, setCompletFormsNb, error, setError }) => {
  // certificate: null,
  // about: ''
  function removeCertificate() {
    if (document.querySelector('#IDcertificate')) {

      let removeIdCV = document.querySelector('#IDcertificate');

      if (removeIdCV.querySelector('.e-file-remove-btn')) {
        let removeButtons = removeIdCV.querySelector('.e-file-remove-btn');
        removeButtons.addEventListener("click", function () {
          update('certificate')(null);
        })
      }
    }
  }


  removeCertificate() ;


  useEffect(() => {
    if (state.certificate && state.about && formObject.validate()) {
      setCompletFormsNb({ ...completFormsNb, 4: true });

      setError(false)
    } else {
      setCompletFormsNb({ ...completFormsNb, 4: false });


    }
  }, [state.certificate, state.about, formObject]);



  
  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focusIn();




    const options = {
      rules: {
        about: {
          required: [true, '* Please give us a brief information about yourself'],
        },
       
        // certificate: {
        //   required: [true, '* Please enter your certificate'],
        // },


      },
    };

    formObject = new FormValidator('#certificateForm', options);




  }, []);


  return (
    <div>
    <div className="control_wrapper" id="control_wrapper">
      {error && <AllAlert type="danger" message="Please fill out all the required fields" />}
      <div className="control_wrapper textbox-form">
        <form id="certificateForm" >

      
          <div className="form-group">
            <TextBoxComponent
               ref={userNameRef}
              name="about"
              value={state.about}
              change={update('about')}
              multiline={true}
              rows={5}
              // height={"auto"}
              placeholder="Brief information about your Certificates"
              floatLabelType="Auto"
              data-msg-containerid="errroForabout"
            />


            <div id="errroForabout" />
          </div>

          <br />


          <div className="form-group">
            <p className='ImageFilesP'>Your Certificates ".PDF"</p>

            <div id='IDcertificate'>

              <UploaderComponent
                multiple={false}
                autoUpload={false}
                files={state.certificate}

                value={state.certificate}
                change={update('certificate')}

                name="certificatev"
                selected={update('certificate')}
                // allowedExtensions='.jpeg,.jpg,.png,.pdf'
                allowedExtensions='.pdf'
                placeholder="certificates"
                maxFileSize="500 * 1024 * 1024"
                data-msg-containerid="errorForcertificate" />

            </div>



            <div id="certificate" />
            <br />









          </div>
          <br />

          <TooltipComponent
            content="Your certificates"
            position='BottomCenter'>

            <div className='coveroneImage'>

              {!state.certificate && <>     <p> Your certificates ".PDF" is Void !</p> </>}
              {state.certificate && <>

                <embed className='MyImgoneChaker' src={`${URL.createObjectURL(state.certificate)}#toolbar=0`} type="application/pdf" />

                {/* <iframe  className='MyImgoneChaker' src={`${URL.createObjectURL(state.certificate)}#toolbar=0`} >
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

export default CertificateRegister