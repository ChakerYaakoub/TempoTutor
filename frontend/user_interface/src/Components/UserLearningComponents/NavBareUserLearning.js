import React from 'react'
import "./NavBareUserLearning.css"

const NavBareUserLearning = ({activeStep, setActiveStep}) => {
  const steps = [
    { id: 1, title: 'Purchase History' },
    { id: 2, title: 'All Course' },
    { id: 3, title: 'Graduated Courses' },
    { id: 4, title: 'Courses In Progress' },


  ];
  return (
    <div>
      <div className="NavBareUserLearning">
        {steps.map((step) => (
          <div
            key={step.id}
            id={`stepLearning-${step.id}`}
            className={` stepdivLearning stepLearning ${step.id === activeStep ? 'active' : ''}`}
          onClick={() => setActiveStep(step.id)}
          >
       
            <span className="step-titleLearning">{step.title}</span>
          

          </div>
        ))}




      </div>
    </div>
  )
}

export default NavBareUserLearning