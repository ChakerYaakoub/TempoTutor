import { useRef,useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";

import { BsFillCartCheckFill } from "react-icons/bs";
import "./AddToCartIcon.css";
import axios from "../../PostUseFetch";
import useFetch from "../../getUseFetch";
import { useContext } from "react";
import { GlobalVariales } from "../../UseContext";
import { BsFillCartPlusFill } from "react-icons/bs";





const AddToCartIcon = (props) => {
  const { openSignUpForm, setOpenSignUpForm, openForm, setOpenform } =
    useContext(GlobalVariales);
    const [succ, setSucc] = useState(false);


  const { data, loading, error } = useFetch(
    "http://localhost:3000/isAuthenticated",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
      },
    }
  );
  const myAddTocartIcon = useRef();


  const addTocart = async () => {
    if (data !== "Not authenticated") {
      try {
        const postCoursesToCart = await axios.post(
          "/addcourses",
          {
            course_id: myAddTocartIcon.current.id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        
        );
        setSucc(true)
      } catch (err) {
        console.log(err);
        setSucc(false)
      }
    } else {
      setOpenSignUpForm(true);
      setOpenform(true);
    }

  };

  return (
    <>
 
      <span
        // className="addToCartIcon"

        className="addToCartIconcur"

        id={props.iconId}
        ref={myAddTocartIcon}
        onClick={addTocart}
      >
     

        {!succ &&   <FaCartPlus />}
        {/* {!succ &&   <BsFillCartPlusFill />} */}
        {succ && <BsFillCartCheckFill/>}
      </span>
   
    </>
  );
};

export default AddToCartIcon;
