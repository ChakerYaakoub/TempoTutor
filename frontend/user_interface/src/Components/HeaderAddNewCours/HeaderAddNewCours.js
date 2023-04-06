import React, { useState, useEffect } from 'react'
import "./HeaderAddNewCours.css"

const HeaderAddNewCours = ({ totalPage, addSubmitPage, contents, error, initialSections, dispatchSections, setActiveStep, deleteSection, activeStep, sectionIndex, completFormsNb, setCompletFormsNb, setError, addSection }) => {

    const [disabledBTN, SetdisabledBTN] = useState(false);
    const [visibilityBtn, setVisibilityBtn] = useState('hidden');
    // background
    const [backgroundSubmit, SetbackgroundSubmit] = useState('#e7c143');
    const [backgroundContinue, SetbackgroundContinue] = useState('#007b84');
    const [Continuebtn, SetContinuebtn] = useState(false);
    const [Deletbtn, SetDeletbtn] = useState(false);
    // 5ac6cc


    const isEveryFormComplete = Object.values(completFormsNb).every((isComplete) => isComplete === true);
    const numPages = Object.keys(completFormsNb).length;

    function removeContent(id) {
        contents = contents.filter(item => item.id !== id);
    }







    const handleDELETClick = () => {
        //    setActiveStep(activeStep - 1); 
        //    initialSections.pop();
        //         const element = document.getElementById(activeStep );
        //         element.remove();


        //         const formsCopy = { ...completFormsNb };
        //         delete formsCopy[Object.keys(formsCopy).pop()];
        //         setCompletFormsNb(formsCopy);
        // removeContent(activeStep);
        // deleteSection(activeStep - 2)



        //  setActiveStep(activeStep - 1);  


        // const newSections = [...initialSections]; // create a copy of the initialSections array
        // newSections.splice(-1, 1); // remove the last element of the newSections array
        // dispatchSections({ type: "set_sections", sections: newSections });
        // console.log(initialSections)
        // setActiveStep(activeStep - 1); 



        // setError(false)
        console.log(`section detet ${activeStep - 2}`)


    };



    const handleSubmitClick1 = () => {

        console.log('to submit ')

        const isEveryFormComplete1 = Object.values(completFormsNb).every((isComplete) => isComplete === true);

        // console.log(activeStep)





        if (isEveryFormComplete1) {
            setActiveStep(1000);
            addSubmitPage();


        }
        else {
            setError(true);

        }



    };


    const handleBackClick = () => {
        // setActiveStep(activeStep - 1);

        if (completFormsNb[activeStep]) {
            setActiveStep(activeStep - 1);

            setError(false)
            SetContinuebtn(false)
        } else {
            setError(true)

        }



        // setCompletFormsNb({ ...completFormsNb, [activeStep]: true });


    };

    {/* <button onClick={addSection}>Add New Section</button> */ }


    const handleAddSectionClick = () => {
        if (completFormsNb[activeStep]) {
            const isEveryFormComplete1 = Object.values(completFormsNb).every((isComplete) => isComplete === true);

            // console.log(activeStep)


            setActiveStep(activeStep + 1);


            if (isEveryFormComplete1) {
                addSection()

            }
            const newCompletFormsNb = { ...completFormsNb };
            for (let i = 1; i < activeStep; i++) {
                newCompletFormsNb[i] = true;
            }
            setCompletFormsNb(newCompletFormsNb);
            // if (activeStep > 1) {
            //     setCompletFormsNb({ ...completFormsNb, [activeStep - 1]: true });
            // }

            setError(false);

            SetdisabledBTN(false);


        } else {
            setError(true);
            console.log(activeStep)
        }
    };


    const handleContinueClick = () => {
        if (completFormsNb[activeStep]) {
            const isEveryFormComplete1 = Object.values(completFormsNb).every((isComplete) => isComplete === true);

            // console.log(activeStep)


            setActiveStep(activeStep + 1);

            // if (isEveryFormComplete1 && numPages === activeStep) {
            //     addSection()

            // }
            // if (activeStep > 1) {
            //     setCompletFormsNb({ ...completFormsNb, [activeStep - 1]: true });
            // }

            setError(false);

            SetdisabledBTN(false);


        }
        else {
            setError(true);
            console.log(activeStep)
        }
    };


    useEffect(() => {
        if (activeStep > 1) {
            setVisibilityBtn('visible');
        } else {
            setVisibilityBtn('hidden');
        }

        if (isEveryFormComplete && !error) {
            SetbackgroundSubmit('#43e75e');
        } else {
            SetbackgroundSubmit('');
        }


        if (activeStep < numPages) {
            console.log(`pages is : ${numPages}`)
            SetContinuebtn(false);
            SetbackgroundContinue('#5ac6cc')
            SetDeletbtn(false)
        } else {
            SetContinuebtn(true);
            SetbackgroundContinue('#007b84')
            SetDeletbtn(true)
        }
    }, [activeStep, visibilityBtn, handleContinueClick, setVisibilityBtn, SetbackgroundContinue, SetDeletbtn, isEveryFormComplete, SetbackgroundSubmit, Continuebtn, SetContinuebtn]);

    return (


        <div className='HeaderCours1'>
            <div className='HeaderCours12'>


                <div>

                    {activeStep > 1 && activeStep !== 1000 && (

                        <button className="MyMyMybutton BackbuttonCourse" onClick={handleBackClick} >

                            <span>Back </span>
                        </button>
                    )}

                    {activeStep <= 1 && activeStep !== 1000 && (

                        <button className="MyMyMybutton BackbuttonCourse" id='hidbutton' onClick={handleBackClick} style={{ visibility: 'hidden' }} >
                            <span>Back </span>
                        </button>
                    )}


                    {Deletbtn && activeStep !== 1000 && (<>
                        <br />
                        <button className=" MyMyMybutton DeletebuttonSection" style={{ visibility: visibilityBtn }} onClick={handleDELETClick} disabled={disabledBTN} >
                            <span> Delete Section  </span>
                        </button>
                        <br />
                    </>
                    )}

                </div>




                <div className='Nothiddendivcourse'>

                    {activeStep !== 1000 && (<>
                        <h2 className='LetsCreate'>Let's create a new course</h2>
                        <p className='notee'>  In order to provide a comprehensive overview, <br />
                            it is important to first input all general information prior to adding individual course sections.</p>

                    </>
                    )}

                    {activeStep == 1000 && (<>
                        <h2 className='LetsCreate'>Submit the Course Information </h2>
                        <p className='notee'>Please read carefully all the information on this page. 
                            </p>
                    </>
                    )}

                </div>

                <div>



                    {Continuebtn && activeStep !== 1000 && <>
                        <button className=" MyMyMybutton NextbuttonCourse" style={{ background: backgroundContinue }} onClick={handleAddSectionClick} disabled={disabledBTN} >

                            <span>  Add New Section  </span>
                        </button>
                    </>}
                    {!Continuebtn && activeStep !== 1000 && <>

                        <button className=" MyMyMybutton NextbuttonCourse" style={{ background: backgroundContinue }} onClick={handleContinueClick} disabled={disabledBTN} >

                            <span> Next  </span>
                        </button>

                    </>}


                    {/* dont forget to -- or ++  */}
                    {activeStep > 1 && activeStep !== 1000 && (<>
                        <br />
                        <button className=" MyMyMybutton submitbuttonCourse" style={{ visibility: visibilityBtn, background: backgroundSubmit }} onClick={handleSubmitClick1} disabled={disabledBTN} >
                            <span> submit </span>
                        </button>
                        <br />
                    </>
                    )}
                </div>






            </div>
            <div className='hiddendivcourse'>
                {activeStep !== 1000 && (<>
                    <h2 className='LetsCreate'>Let's create a new course</h2>
                    <p className='notee'>  In order to provide a comprehensive overview, <br />
                        it is important to first input all general information prior to adding individual course sections.</p>

                </>
                )}
                 {activeStep == 1000 && (<>
                        <h2 className='LetsCreate'>Submit the Course Information </h2>
                        <p className='notee'>Please read carefully all the information on this page. 
                            </p>

                    </>
                    )}


            </div>



            {/* <hr className="HrSearch" id="MyHrSearch" style={{ borderTop: '1px solid white ' }}  /> */}


        </div>

    )
}

export default HeaderAddNewCours