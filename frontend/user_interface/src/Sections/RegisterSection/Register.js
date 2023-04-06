import React, { useRef, useState, useContext } from "react";
import "./Register.css";

import { SignUpComponent, LoginComponent } from "../../Components/index";
import { GlobalVariales } from "../../UseContext";
const Register = () => {
  const { openSignUpForm, setOpenSignUpForm, userId, setOpenform } =
    useContext(GlobalVariales);

  const signUpTitle = useRef();
  const loginTitle = useRef();
  const [values, setValues] = useState({
    firstNameInp: "",
    lastNameInp: "",
    emailInpSignUp: "",
    passInpSignUp: "",
    confInpSignUp: "",
  });

  const onChangeInp = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const closingForm = () => {
    setOpenform(false);
    setOpenSignUpForm(true);
  };
  const changeBorderColorForLogin = () => {
    loginTitle.current.classList.add("setColorBorderBottomSignUp");
    signUpTitle.current.classList.add("removeborderBottomColor");
    loginTitle.current.classList.remove("removeborderBottomColor");
    setOpenSignUpForm(false);
  };
  const changeBorderColorForSignUp = () => {
    signUpTitle.current.classList.add("setColorBorderBottomSignUp");
    loginTitle.current.classList.add("removeborderBottomColor");
    signUpTitle.current.classList.remove("removeborderBottomColor");
    setOpenSignUpForm(true);
  };

  return (
    <>
      <div className="containeRegisterDiv">
        <div className="mySignUpLoginForm">
          <div className="openingClosingSignUpLogin" onClick={closingForm}>
            X
          </div>
          <div className="SignUpOrLoginDiv">
            <div ref={signUpTitle} onClick={changeBorderColorForSignUp}>
              SignUp
            </div>
            <div ref={loginTitle} onClick={changeBorderColorForLogin}>
              Login
            </div>
          </div>
          {openSignUpForm && <SignUpComponent />}
          {!openSignUpForm && <LoginComponent />}
        </div>
      </div>
    </>
  );
};

export default Register;
