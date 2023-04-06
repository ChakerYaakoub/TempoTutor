import React from 'react'
// import errorIMG from "../../assets/images/error.jpg";
import errorIMG from "../../assets/images/error1.png";
import "./ErrorComponent.css"


const ErrorComponent = () => {
  return (
    <div className='MyerrorPage'>
        
        <img className='ErrImage' src={errorIMG} alt="Error" />
    </div>
  )
}

export default ErrorComponent