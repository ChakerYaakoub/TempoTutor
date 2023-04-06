import { useContext } from "react";
import { GlobalVariales } from "./UseContext";

export const RemoveTokenFunction = () => {
  const {
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    userId,
    setUserId,
  } = useContext(GlobalVariales);
  localStorage.removeItem("token");
  setUserFirstName("");
  setUserLastName("");
  setUserId("");
};
