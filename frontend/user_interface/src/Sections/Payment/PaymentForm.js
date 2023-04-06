/* eslint-disable no-const-assign */

import React, { useState, useEffect } from 'react'
import './card.css'
import CheckoutSteps from './CheckoutSteps';
import visa from "../../assets/visa.png";
import chip from "../../assets/chip.png";
import { useNavigate } from 'react-router-dom';
import { GlobalVariales } from '../../UseContext';
import { useContext } from "react";
import axios from "../../PostUseFetch";
import useFetch from '../../getUseFetch';
import Empty from '../../Components/Empty/Empty';

function PaymentForm() {



  const navigate = useNavigate();
  const { userId } = useContext(GlobalVariales);

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('month');
  const [expirationYear, setExpirationYear] = useState('year');
  const [cvv, setCvv] = useState('');

  const [cardHolderError, setCardHolderError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cartCourses, setCartCourses] = useState([]);

  const [Loadpay, SetLoadpay] = useState(false);

  if (!userId) {
    navigate("/");

  }

  const { data, loading, error } = useFetch(
    "http://localhost:3000/coursesInCart",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
      },
    }
  );


  useEffect(() => {
    if (data) {
      setCartCourses(data);
    } else {
      setCartCourses([]);

    }
  }, [data]);


  // if (!Array.isArray(cartCourses) || cartCourses.length === 0 ) {

  //   // navigate("/");



  //   return <> <Empty text={" You don't have any Course In your cart "} /> </>;


  // }



  const handleCardNumberChange = (event) => {
    const { value } = event.target;
    if (!isNaN(value)) {
      if (value.length <= 16) {
        setCardNumber(value);
      } else {
        alert('You cannot enter more than 16 digits!');
      }
    }
  };

  const handleCardHolderChange = (event) => {
    const { value } = event.target;
    setCardHolder(value.toUpperCase());
    if (!/^[a-zA-Z ]+$/.test(value)) {
      alert("Card holder name should not contain numbers");
      setCardHolder('');
    } 
    // else if (value.length > 20) {
    //   alert("Card holder name should not exceed 20 characters");

    // }
     else {
      setCardHolderError("");
    }
  };

  const handleExpirationMonthChange = (event) => {
    setExpirationMonth(event.target.value);
  };

  const handleExpirationYearChange = (event) => {
    setExpirationYear(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleCvvMouseEnter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
  };

  const handleCvvMouseLeave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
  };



  const handleSubmit = async (e) => {
    SetLoadpay(true)
    e.preventDefault();
    if (Array.isArray(cartCourses) || !cartCourses.length === 0) {
      if (cvv && expirationMonth && expirationYear && cardHolder && cardNumber && userId) {
        try {

          const response = await axios.post(`/payments/${userId}`,
            {
              userId: userId

            },

            {
              headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token")
                  ? localStorage.getItem("token")
                  : "",
              },
            });
          SetLoadpay(false)

          navigate(`/invoice/${response.data.newPaymentId}`);

          // alert(`Response data: ${response.data.newPaymentId}`);
        }
        catch (error) {
          alert(`Error message: ${error.message}`);
          SetLoadpay(false)
        }
      }
      else {
        alert("All the fields in the card are required");
        SetLoadpay(false)
      }

    } else {
      navigate("/");
      SetLoadpay(false)

    }


  };



  const back = () => {
    navigate("/myCoursesInCart");
  }



  return (
    <>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className='edd'><button className="MyMyMybutton BackbuttonCourse jaffar" onClick={back}><span>Back</span></button></div>
      <div className="container">
        <div className="card-container">
          <div className="front">
            <div className="image">
              <img src={chip} alt="" />
              <img src={visa} alt="" />
            </div>
            <div className="card-number-box">{cardNumber.padEnd(16, '#')}</div>
            <div className="flexbox">
              <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">{cardHolder ? cardHolder : 'full name'}</div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month">{expirationMonth} / </span>
                  <span className="exp-year">{expirationYear}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="stripe"></div>
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box">{cvv.padEnd(4, '#')}</div>
              <img src="image/visa.png" alt="" />
            </div>
          </div>
        </div>
        <form>
          <div className="inputBox">
            <span>card number</span>
            <input
              type="number"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            <div className='errorrrr'>{cardNumberError && <div className='errorrr'>{cardNumberError}</div>}</div>



          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input
              type="text"
              value={cardHolder}
              onChange={handleCardHolderChange}
            />
            <div className='errorrrr'>{cardHolderError && <div className='errorrr'>{cardHolderError}</div>}</div>



          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select
                value={expirationMonth}
                onChange={handleExpirationMonthChange}
              >
                <option value="month" selected disabled>
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select
                value={expirationMonth} onChange={handleExpirationYearChange}
              >
                <option value="year" selected disabled>
                  year
                </option>
                <option value="2021">2023</option>
                <option value="2022">2024</option>
                <option value='2025'>2025</option>
              </select>
            </div>
            <div class="inputBox">
              <span>cvv</span>
              <input type="text"
              data-maxlength="4" maxlength="4" className="cvv-input" onChange={handleCvvChange} onMouseEnter={handleCvvMouseEnter} onMouseLeave={handleCvvMouseLeave} />
            </div>
          </div>
          {!Loadpay && <>   <input type="submit" value="submit" className="submit-btn" onClick={handleSubmit} /></>}
          {Loadpay && <>   <input type="submit" value="Loading ..." className="submit-btn"  /></>}

        </form>

      </div>
    </>
  )
}

export default PaymentForm

