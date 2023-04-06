import "./LoginSignUp.css";

const LoginSignUp = (props) => {
  return (
    <>
      <div className="loginSignUpBackground">
        <div className="center-content">
          <div className="loginSignUpContainer">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
