import { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const IsLogin = () => {


  const {  isAuthenticated,setIsAuthenticated } = useStateContext(); // for another component 
  // const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('Admin-Token');
   
    if (!token) {
      setIsAuthenticated(false);
      
    
     
    }else{
      setIsAuthenticated(true);
      
    }

    // fetch('http://localhost:3000/admin/IsLoginAdmin', {
    //   method: 'GET',
    //   headers: {
    //     'Admin-Token': `Bearer ${token}`,
    //   },
    // })
    // .then(response => {
    //   if (response.status === 200) {
    //     if (response.headers.get("content-type").indexOf("application/json") !== -1) {
    //       return response.json();
    //     } else {
    //       throw new Error("Response is not JSON");
    //     }
    //   } else {
    //     console.log('here')
    //     const err =  response.json();
    //           throw new Error(err.message);
        
    //   }
    // })
    // .then(data => {
    //   setIsAuthenticated(true);
    // })
    // .catch(error => {
    //   setIsAuthenticated(false);
    //   // setErrorMessage(error.message);
    //   console.error('Error:', error.message);
    //   throw new Error(error.message);
    // });
  }, []);

  return { isAuthenticated };
};

export default IsLogin;
