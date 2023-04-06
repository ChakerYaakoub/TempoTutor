import React from 'react'
import "./empty.css"

import { GiDesert } from "react-icons/gi";

const Empty = ({text}) => {
  return (
    <div>
        <p className='EmptyDivIcon123'> <GiDesert/></p>

        <p className='EmptyDivText'> {text}</p>
    </div>
  )
}

export default Empty