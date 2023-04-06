import React from 'react'

const Button = ({bgColor , color , size , text , borderRadius , onClick,disabled=false}) => {
  return (
    <button 
    type='button'
    style={{backgroundColor:bgColor , color , borderRadius} }
    className={`text-${size} p-3 hover:drop-shadow-xl`}
     disabled={disabled} 
     onClick={onClick}
    >
      {text}
     

    </button>

  )
}


export default Button