import React, { useState, useEffect } from 'react';
import "./AllAlert.css"

const AllAlert = ({ type, message, timeout = 5000 }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  const handleClose = () => {
    setShowAlert(false);
  };

  return showAlert ? (
    <div className={`Myalert ${type}-alert`}>
      <p className='MyalertPP'>{message}</p>
      <a className="MyMyclose" onClick={handleClose}>
        <span> &times; </span>
      </a>
    </div>
  ) : null;
};

export default AllAlert;
