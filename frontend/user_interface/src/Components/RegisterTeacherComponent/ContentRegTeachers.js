import React from 'react'
// import AllAlert from '../AllAlert/AllAlert';
import "./ContentRegTeachers.css"

import {
    GeneralInfo,
    InstrumentsRegister,
    Experienceregister,
    CertificateRegister,
    ConfirmRegister
}
    from "./RegisterTeashersForm/Froms"

const ContentRegTeachers = ({ activeStep, setActiveStep ,setState, instruments,setInstruments, update ,state ,error, setError ,completFormsNb, setCompletFormsNb}) => {

    const contents = [
        { id: 1, title: 'Identification', content: <GeneralInfo   update={update}  state={state}  error={error} setError={setError}  completFormsNb={completFormsNb} setCompletFormsNb={setCompletFormsNb} /> },
        { id: 2, title: 'What instrument(s) do you teach', content: <InstrumentsRegister       instruments={instruments} setInstruments={setInstruments} state={state}  error={error} setError={setError}  completFormsNb={completFormsNb} setCompletFormsNb={setCompletFormsNb}/> },
        { id: 3, title: 'Please specify your years of experience', content: <Experienceregister  update={update}  state={state}  error={error} setError={setError}  completFormsNb={completFormsNb} setCompletFormsNb={setCompletFormsNb}/> },
        { id: 4, title: 'Please specify if you have any certification', content: <CertificateRegister  update={update}  state={state}  error={error} setError={setError}  completFormsNb={completFormsNb} setCompletFormsNb={setCompletFormsNb}/> },
        { id: 5, title: 'The last step .. Confirm your information ', content: <ConfirmRegister instruments={instruments}  state={state} error={error} setError={setError} /> },

    ];



    return (
        <div className="Mycontent-forms">
            {contents.map((item) => (
                <div key={item.id} className={`MyitemForm ${item.id === activeStep ? 'active' : 'inactive'}`}>
                    <h2 className="MyitemForm-title">{item.title}</h2>
                    {/* {error && <AllAlert type="danger" message="Please fill out all the required fields" /> } */}
                    <hr />
                    <div className="MyitemForm-content">{item.content}</div>
                </div>
            ))}

        </div>
    );
}

export default ContentRegTeachers