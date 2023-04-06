import React from 'react'
import { useState, useEffect } from 'react';
import AllAlert from '../../AllAlert/AllAlert'
import "./ConfirmRegister.css"
import axios from 'axios';
import { GlobalVariales } from '../../../UseContext';
import { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ConfirmRegister = ({ instruments, state, setError, error }) => {
  const navigate = useNavigate();
  const { setUserFirstName, setUserLastName, userId } = useContext(GlobalVariales);
  const url = `http://localhost:3000/TeachersStepsRegister/data/${userId}`

  const [loading, setLoading] = useState(false);
  const [succ, setsucc] = useState(false);

  const [checked, setChecked] = useState(false);
  const [ERchecked, setERChecked] = useState(false);
  const [backgroundSubmit, SetbackgroundSubmit] = useState('#e7c143');


  const handleSubmitTeachers = async (event) => {
    setError(false);
    setERChecked(false)
    event.preventDefault();

    const formData = new FormData();
    // formData.append('userId', state.userId);
    formData.append('firstName', state.firstName);
    formData.append('lastName', state.lastName);
    formData.append('country', state.country);
    formData.append('nationality', state.nationality);
    formData.append('phone', state.phone);
    formData.append('experience', state.experience);
    // formData.append('languages', [state.languages]);
    state.languages.forEach((language, index) => {
      formData.append(`languages[${index}]`, language);
    });

    formData.append('descriptionEXP', state.descriptionEXP);
    formData.append('about', state.about);
    formData.append('profilePicture', state.profilePicture);
    formData.append('identification', state.identification);
    formData.append('cv', state.cv);
    formData.append('certificate', state.certificate);
    // formData.append('instruments', instruments);

    instruments.forEach((instrument, index) => {
      formData.append(`instruments[${index}]`, instrument);
    });

    if (state.profilePicture && state.identification && state.cv && state.certificate && checked) {
      setLoading(true);
      setError(false);
      setERChecked(false)

      try {
        // for (const pair of formData.entries()) {
        //   console.log(pair[0], pair[1]);
        // }
        console.log(...formData.entries());
        // console.log(formData);
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          // setUserFirstName(state.firstName);
          // setUserLastName(state.lastName);
          setsucc(true);
          const userInfo = JSON.parse(localStorage.getItem("userInfo"));

          // Modify the isCompleteSteps property
          userInfo[0].isCompleteSteps = true;

          // Stringify and store the modified object back in local storage
          localStorage.setItem("userInfo", JSON.stringify(userInfo));

          setTimeout(() => {
            navigate('/teacherProfile');
          }, 2000);


        }
        setLoading(false);
      } catch (error) {
        setLoading(false);

        if (error.response) {
          setError(true);
        } else {
          console.log('Error', error.message);
          setError(true);
        }
      }
    } else {
      console.log('You have to fill out all data form');
      setERChecked(true)
    }
  };

  useEffect(() => {

    if (checked) {
        SetbackgroundSubmit('#43e75e');
    } else {
        SetbackgroundSubmit('');
    }


},[checked,setERChecked ,SetbackgroundSubmit,backgroundSubmit])

  return (
    <div>

      <div className='textConfirmRegister'>
        Please take a moment to review the information you have entered. <br /> <br />
        It's important to make sure that everything is accurate to avoid any delays in activating your account. <br />
        Once you're ready, please click 'Confirm' to proceed. <br />
        Please note that it may take up to one day for your account to be activated.
      </div>

      {/* https://www.sweetandmaxwell.co.uk/terms/pdf.htm */}

      <div className='ConfirmTermsAndCondition'>
        <div className='DivInputChekmark'>
          <label class="container12345">
            <input type="checkbox" required onChange={(e) => setChecked(e.target.checked)} />
            <span class="checkmark12345"></span>
          </label>
        </div>

        <div className='texttermAndconditpon textConfirmRegister '>



          By checking this box, I confirm that I have reviewed and agree to the terms and conditions
          outlined in the
          <a href="https://www.sweetandmaxwell.co.uk/terms/pdf.htm" target="_blank"> Terms of Use </a> .

        </div>
      </div>




      <div className='buttonConfirmRegister'>

        {!succ && <>
          <button className=" MyMybutton Nextbutton"
          style={{ background: `${backgroundSubmit}` }}
          
          onClick={handleSubmitTeachers} >
            <span>

              {loading ? (
                <FaSpinner />
              ) : (
                "Confirm"
              )}
            </span>
          </button>

        </>}


      </div>

      {error && <AllAlert type="danger" message="Sorry, something went wrong, try again later" />}
      {succ && <AllAlert type="success" message="Data submitted successfully " />}
      {ERchecked && <AllAlert type="warning" message="You must confirm that you have reviewed and agree to the
       terms and conditions described in the Terms of Use!" />}

    

    </div>
  )
}

export default ConfirmRegister