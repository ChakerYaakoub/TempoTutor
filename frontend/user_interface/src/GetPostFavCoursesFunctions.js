import axios from "./PostUseFetch";
import { useState, useRef, useContext, useEffect } from "react";

import { OpenSignUpContext } from "./UseContext";
export const PostFavCourses = async (myHeartIcon, callback) => {
  try {
    const postFavCourses = await axios.post(
      "/favCourses",
      {
        favCourse_id: myHeartIcon,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (callback && typeof callback === "function") {
      callback();
    }
  } catch (err) {
    console.log(err);
  }
};
// export const GetFavCourses = async (callback) => {
//   try {
//     const getFavCourses = await axios.get("/favCourses", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: localStorage.getItem("token"),
//       },
//     });
//     callback(getFavCourses.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const AddFavCoursesToAnArray = (data) => {
//   const arrIdFavCourses = [];
//   if (data !== []) {
//     console.log(data);
//     data.forEach(function (li) {
//       arrIdFavCourses.push(li._id);
//     });
//   }
//   localStorage.setItem("favCourses", JSON.stringify(arrIdFavCourses));
// };
export const GetFavCourses = async () => {
  try {
    const getFavCourses = await axios.get("/favCourses", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    if (Array.isArray(getFavCourses.data)) {
      const arrIdFavCourses = getFavCourses.data.map((course) => course._id);
      localStorage.setItem("favCourses", JSON.stringify(arrIdFavCourses));
    } else if (getFavCourses.data === "there is nothing") {
      localStorage.setItem("favCourses", JSON.stringify([]));
    }
    return getFavCourses.data;
  } catch (err) {
    console.log(err);
  }
};
