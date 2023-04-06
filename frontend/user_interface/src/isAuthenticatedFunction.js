import axios from "./axios";

export const IsAuthenticated = async (callback) => {
  try {
    const response = await axios.get("/isAuthenticated", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
      },
    });

    callback(response.data);
  } catch (err) {
    console.log(err);
  }
};
