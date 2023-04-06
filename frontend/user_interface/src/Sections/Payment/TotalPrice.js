import React from 'react'
const TotalPrice = ({total,handelPayment}) => {
  return (
    <div className='orderDetails'>
    <div className='caption'>
    <p><span><i class="fa-solid fa-user-music"></i> TempoTutor</span> courses summaray  prices</p>
    </div>
    <hr className='hrSz'></hr>
    <div className='summery'>
      <h2>COURSE  SUMMARAY</h2>
    </div>
    <div className='totall'>
    <div className='total'>
        <p>TOTAL COURSE PRICE :</p>
        <h4>{total.toFixed(2)}$</h4>
    </div>
    <div className='total'>
        <p>VAT included 20% :</p>
        <h4>{(total*0.2).toFixed(2)}$</h4>
    </div>
    </div>
    <hr className='hrSz'></hr>

    <div className='lock'><i className="fa-solid fa-lock" style={{color:" #000000" , paddingRight: "10px"}}></i>Data Securely SSL Encrypted</div>

    <div className='buyy'>
      <button className='buy' onClick={handelPayment}>BUY NOW</button>
    </div>
  </div>
  )
}

export default TotalPrice