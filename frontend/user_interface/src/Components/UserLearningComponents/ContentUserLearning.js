import React from 'react'
import AllCourse from './AllUserLearningContent/AllCourse'
import CourNotDone from './AllUserLearningContent/CourNotDone'
import CouseDone from './AllUserLearningContent/CouseDone'
import Purchase from './AllUserLearningContent/Purchase'

import "./ContentUserLearning.css"

const ContentUserLearning = ({activeStep, setActiveStep,userId}) => {

  const contents = [
    { id: 1, title: 'Purchase History', content: <Purchase userId={userId} /> },
    { id: 2, title: 'All Course', content: <AllCourse userId={userId} /> },
    { id: 3, title: 'Graduated Courses', content: <CouseDone userId={userId} /> },
    { id: 4, title: 'Courses In Progress', content: <CourNotDone userId={userId}/> },


  ];
  return (
    <div>

      <div className="Mycontent-ContentUserLearning">
        {contents.map((item) => (
          <div key={item.id} className={`Myitem-ContentUserLearning ${item.id === activeStep ? 'active' : 'inactive'}`}>
            {/* <h2 className="ContentUserLearning-title">{item.title}</h2> */}
       
          
            <div className="ContentUserLearning-content">{item.content}</div>
          </div>
        ))}

      </div>






    </div>
  )
}

export default ContentUserLearning 