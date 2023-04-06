import React from 'react'
import "./SideBareRegisterTeachers.css"

const SideBareRegisterTeachers = ({ activeStep, setActiveStep }) => {
    const steps = [
        { id: 1, title: 'General Info' },
        { id: 2, title: 'Instruments' },
        { id: 3, title: 'Experience' },
        { id: 4, title: 'Certificate' },
        { id: 5, title: 'Confirmation' },

    ];

    return (
        <div className="sidebarRegitser">
            {steps.map((step) => (
                <div
                    key={step.id}
                    id={`step-${step.id}`}
                    className={` stepdiv step ${step.id <= activeStep ? 'active' : ''}`}
                // onClick={() => setActiveStep(step.id)}
                >
                    <span className="step-number">0{step.id}</span>
                    <span className="step-title">{step.title}</span>
                    {step.id < 5 &&  <div className="vl "></div>}
                   
                </div>
            ))}

         


        </div>
    );
}

export default SideBareRegisterTeachers