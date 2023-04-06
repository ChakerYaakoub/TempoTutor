import { createContext, useState } from "react";

const GlobalVariales = createContext();

const UseContext = ({ children }) => {
  const [openSignUpForm, setOpenSignUpForm] = useState(true);
  const [openForm, setOpenform] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <>
      <GlobalVariales.Provider
        value={{
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
        }}
      >
        {children}
      </GlobalVariales.Provider>
    </>
  );
};

export { UseContext, GlobalVariales };
