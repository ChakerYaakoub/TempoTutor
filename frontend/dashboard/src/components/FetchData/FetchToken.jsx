import React, { useState, useEffect } from 'react';

const FetchToken = () => {
  const [tokenData, setTokenData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('Admin-Token');
    if (token) {
      fetch('http://localhost:3000/admin/DataAdmin', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then(data => {
          setTokenData({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    return () => {};
  }, []);

  return tokenData;
};

export default FetchToken;
