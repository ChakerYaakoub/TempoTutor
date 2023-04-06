import React from 'react'
import terms from "../../assets/terms.pdf"
import "./TermAndCondition.css"

const TermAndCondition = () => {
    return (
        <div className='TermAndCondition'>

            <embed className='MyImgoneChaker' src={terms} type="application/pdf" />

            {/* <iframe  className='MyImgoneChaker' src={`${URL.createObjectURL(state.cv)}#toolbar=0`} >
      </iframe> */}




        </div>
    )
}

export default TermAndCondition