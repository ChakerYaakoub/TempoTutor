import React from 'react'
import './Payment.css'
export default function CheckoutSteps(props) {
    return (
        <div className='row1 checkout-steps'>
            <div className={props.step2 ? 'active' : ""}></div>
            <div className={props.step3 ? 'active' : ""}></div>
        </div>
    )
}