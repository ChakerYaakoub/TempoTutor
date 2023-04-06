import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const DataDashHome = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('Admin-Token');
    const abortCont = new AbortController() // for stop the fetch 
    const requestOptions = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      signal: abortCont.signal
    };
    fetch('http://localhost:3000/admin/dashboard', requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(json => {
        setData(json);
      })
      .catch(error => {
        setError(error.message);
        console.log(error)
      });
    return () => abortCont.abort();
  }, ['http://localhost:3000/admin/dashboard']);

  // if (error) {

  //   return <Redirect to="/LoginAdmin" />;
  // }

  return data ? data:{
    "data": {
        "TotalRevenue": 0,
        "CoursCount": 0,
        "visiteur": 0,
        "StudentsCount": 0,
        "TeachersCount": 0
    }
  };
};

export default DataDashHome;
