import React, { useState } from 'react'
import "./HeaderRegTeashers.css"

const HeaderRegTeashers = ({ activeStep, setActiveStep,  setError, error, completFormsNb, setCompletFormsNb }) => {
    const [questions, Setquestions] = useState(4);
    const [parCentComplet, SetparCentComplet] = useState(0);
    const [disabledBTN, SetdisabledBTN] = useState(false);






    const handleBackClick = () => {
        setActiveStep(activeStep - 1);
        Setquestions(questions + 1)
        SetparCentComplet(parCentComplet - 25)
        setError(false)
        setCompletFormsNb({ ...completFormsNb,activeStep : true }); 

    };



      const handleContinueClick = () => {
        if (completFormsNb[activeStep]) {
          setActiveStep(activeStep + 1);
          Setquestions(questions - 1);
          SetparCentComplet(parCentComplet + 25);
          setError(false);
          SetdisabledBTN(false);
        } else {
          setError(true);
        }
      };



    // const handleContinueClick = () => {
    //     if(CompletForm){
    //         SetdisabledBTN(true)
    //           setActiveStep(activeStep + 1);
    //     Setquestions(questions-1)
    //     SetparCentComplet(parCentComplet+25);
    //     setError(false)

    //     setCompletForm(false)
    //     SetdisabledBTN(false)
    //     }
    //     if(!CompletForm){
    //         setError(true)
    //         // console.log(error)
    //         // setCompletForm(false)



    //     }

    // };
    return (
        <div className='HeaderRegTeashers1'>
            <div className='HeaderRegTeashers2'>

                {activeStep > 1 && (

                    <button className="MyMybutton Backbutton" onClick={handleBackClick} >

                        <span>Back </span>
                    </button>
                )}

                {activeStep <= 1 && (

                    <button className="MyMybutton Backbutton" id='hidbutton' onClick={handleBackClick} style={{ visibility: 'hidden' }} >
                        <span>Back </span>
                    </button>
                )}


                <div className='NotHidDiv'>
                    <h2 className='LetsKnow'>Let’s get to know you a bit better</h2>
                    <p className='notee'>{parCentComplet}% complete - {questions} questions  remaining</p>
                </div>

                {activeStep < 5 && (
                    <button className=" MyMybutton Nextbutton" onClick={handleContinueClick} disabled={disabledBTN} >
                        <span>Continue </span>
                    </button>
                )}

                {/* dont forget to -- or ++  */}
                {activeStep >= 5 && (
                    <button className=" MyMybutton Nextbutton" onClick={handleContinueClick} style={{ visibility: 'hidden' }} disabled={disabledBTN} >
                        <span>Continue </span>
                    </button>
                )}




            </div>
            <div className='hiddendivRes'>
                <h2 className='LetsKnow'>Let’s get to know you a bit better</h2>
                <p className='notee'>{parCentComplet}% complete - {questions} questions  remaining</p>
            </div>

            <hr className="HrSearch" style={{ borderTop: '1px solid white' }} id='searchData' />


        </div>

    )
}

export default HeaderRegTeashers