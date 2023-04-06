import { useState, useContext, useEffect } from "react";
import "./SignUpComponent.css";
import { Link, useNavigate } from "react-router-dom";

import { InputSignUpLogin } from "../index";

import axios from "../../axios";
import { IsAuthenticated } from "../../isAuthenticatedFunction";
import { GlobalVariales } from "../../UseContext";
import { GetFavCourses } from "../../GetPostFavCoursesFunctions";
import useFetch from "../../getUseFetch";
// import {
//   PostFavCourses,
//   GetFavCourses,
//   AddFavCoursesToAnArray,
// } from "../../GetPostFavCoursesFunctions";
const REGISTER_URL = "/signup";
const SignUpComponent = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("student");
  const {
    openSignUpForm,
    setOpenSignUpForm,
    openForm,
    setOpenform,

    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    userId,
    setUserId,
  } = useContext(GlobalVariales);

  // const [selectecdRole, setSelectedcRole] = useState("bla");
  useEffect(() => {
    console.log(userFirstName);
  }, [userFirstName]);

  const [usedEmail, setUsedEmail] = useState("");
  const [values, setValues] = useState({
    firstNameInp: "",
    lastNameInp: "",
    emailInpSignUp: "",
    passInpSignUp: "",
    confInpSignUp: "",
  });
  const onChangeInp = (e) => {
    // const history = useHistory();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "firstNameInp",
      className: "firstNameInp",
      placeholder: "First name...",
      errorMessage: "First Name Shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      type: "text",
      name: "lastNameInp",
      className: "lastNameInp",
      placeholder: "Last name...",
      pattern: "^[A-Za-z0-9]{3,16}",
      errorMessage: "Last Name Shouldn't include any special character!",
      required: true,
    },
    {
      id: 3,
      type: "email",
      name: "emailInpSignUp",
      className: "emailInpSignUp",
      placeholder: "Email...",
      errorMessage: "It should be a valid email address",
      errorMessageFromBackend: usedEmail,
      required: true,
    },
    {
      id: 4,
      type: "password",
      name: "passInpSignUp",
      className: "passInpSignUp",
      placeholder: "Password...",
      errorMessage: "Password should be minimum 6 characters",
      minLength: 6,
      required: true,
    },
    {
      id: 5,
      type: "password",
      name: "confInpSignUp",
      className: "confInpSignUp",
      placeholder: "Repeat Password...",
      errorMessage: "Passwords don't match!",
      pattern: values.passInpSignUp,
      required: true,
    },
  ];

  const handleChangeRole = (e) => {
    setSelectedRole(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          firstName: values.firstNameInp,
          lastName: values.lastNameInp,
          email: values.emailInpSignUp,
          password: values.passInpSignUp,
          confirmPassword: values.confInpSignUp,
          checkedRole: selectedRole,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token")
              ? localStorage.getItem("token")
              : "",
          },
        }
      );

      if (Object.keys(response.data)[0] === "token") {
        localStorage.setItem("token", response.data.token);

        GetFavCourses();
        setOpenform(false);
        setUsedEmail("");
        // if (selectecdRole == "student") {
        //   console.log("studeeent");
        //   navigate("/");
        // } else if (selectecdRole == "teacher") {
        //   console.log("teacherrrrrrrrrrr");
        //   navigate("/blu");
        // }
        IsAuthenticated((data) => {
          if (data !== "Not authenticated") {
            localStorage.setItem("userInfo", JSON.stringify(data));

            console.log(JSON.parse(localStorage.getItem("userInfo")).last_name);

            setUserFirstName(data.first_name);
            setUserLastName(data.last_name);
            setUserId(data.idUser);
            console.log(userFirstName);
          }
        });
        navigate(selectedRole === "student" ? "/" : "/RegisterTeachersSteps");
      } else if (Object.keys(response.data)[0] === "usedEmail") {
        setUsedEmail("Email is used");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="teacherOrStudentDiv">
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              onChange={handleChangeRole}
              checked={selectedRole === "student"}
            />
            Student
          </label>

          <label>
            <input
              type="radio"
              name="role"
              value="teacher"
              onChange={handleChangeRole}
              checked={selectedRole === "teacher"}
            />
            Teacher
          </label>
        </div>
        {inputs.map((input) => (
          <InputSignUpLogin
            key={input.id}
            {...input}
            value={values[input.name]}
            onChangeInp={onChangeInp}
          />
        ))}

        <button className="signUpBtn">create account</button>
      </form>
    </>
  );
};

export default SignUpComponent;
