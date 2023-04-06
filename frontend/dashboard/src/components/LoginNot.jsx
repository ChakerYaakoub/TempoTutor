import React, { useState, useEffect } from 'react';

const LoginNot = () => {
    const [showAlert, setShowAlert] = useState(true);

    

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
      
            // window.location.href = "/Films";
            // window.location.reload();
        }, 5000);
    }, []);

    if (!showAlert) return null;
  return (


            <div class="bg-red-100 border text-sm border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
       
            <span class="block sm:inline"> E-mail , or Password that you're entering is incorrect </span>
        </div>
        
  
    
    
    
  )
}

export default LoginNot