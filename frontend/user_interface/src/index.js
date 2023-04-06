import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UseContext } from "./UseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UseContext>
    <App />
  </UseContext>
);

