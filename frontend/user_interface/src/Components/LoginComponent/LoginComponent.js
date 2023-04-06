import "./LoginComponent.css";
import axios from "../../PostUseFetch";
import { InputSignUpLogin } from "../index";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../getUseFetch";
// import {
//   PostFavCourses,
//   GetFavCourses,
//   AddFavCoursesToAnArray,
// } from "../../GetPostFavCoursesFunctions";
import { GetFavCourses } from "../../GetPostFavCoursesFunctions";
// import axios from "../../axios";
import { IsAuthenticated } from "../../isAuthenticatedFunction";
import { GlobalVariales } from "../../UseContext";
const REGISTER_URL = "/login";

const LoginComponent = () => {
  const {
    userFirstName,
    setUserFirstName,
    setUserLastName,
    setUserId,
    setOpenform,
    setOpenSignUpForm,
    isLogin,
    setIsLogin,
  } = useContext(GlobalVariales);
  const [values, setValues] = useState({
    emailInp: "",
    passwordInp: "",
  });
  const onChangeInp = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  const [errorEmailFromBackEnd, setErrorEmailFromBackEnd] = useState("");
  const [errorPassFromBackEnd, setErrorPassFromBackEnd] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          email: values.emailInp,
          password: values.passwordInp,
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
        setOpenform(false);
        setOpenSignUpForm(true);
        localStorage.setItem("token", response.data.token);

        //
        // const { data, loading, error } = useFetch(
        //   "http://localhost:3000/isAuthenticated",
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: localStorage.getItem("token")
        //         ? localStorage.getItem("token")
        //         : "",
        //     },
        //   }
        // );

        //

        GetFavCourses();

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
      } else if (Object.keys(response.data)[0] === "emailNotFound") {
        setErrorEmailFromBackEnd("Email not found");
        setErrorPassFromBackEnd("");
      } else if (Object.keys(response.data)[0] === "incorrectPassword") {
        setErrorPassFromBackEnd("Incorrect password");
        setErrorEmailFromBackEnd("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <InputSignUpLogin
          type="email"
          required={true}
          className="emailInpLogin"
          name="emailInp"
          placeholder="Email.."
          errorMessage="It should be a valid email address"
          errorMessageFromBackend={errorEmailFromBackEnd}
          onChangeInp={onChangeInp}
        />
        <InputSignUpLogin
          type="password"
          className="passwordInpLogin"
          name="passwordInp"
          placeholder="Password.."
          minLength={6}
          required={true}
          errorMessage="Password should be minimum 6 characters"
          errorMessageFromBackend={errorPassFromBackEnd}
          onChangeInp={onChangeInp}
        />
        <button className="loginBtn">login</button>
      </form>
    </>
  );
};

export default LoginComponent;
