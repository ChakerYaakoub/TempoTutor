import { useState } from "react";
import "./InputSignUp.css";

const InputSignUpLogin = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="cont-Inp-errMsg">
      <input
        type={props.type}
        name={props.name}
        className={`${props.className} signUpInp`}
        placeholder={props.placeholder}
        onChange={props.onChangeInp}
        required={props.required}
        pattern={props.pattern}
        minLength={props.minLength}
        onBlur={handleFocus}
        onFocus={() => props.name === "confInpSignUp" && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="errorMessage">{props.errorMessage}</span>

      <span className="errorMessageFromBackend">
        {props.errorMessageFromBackend}
      </span>
    </div>
  );
};

export default InputSignUpLogin;
