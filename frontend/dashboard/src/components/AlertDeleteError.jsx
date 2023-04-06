
import React, { useState, useEffect } from 'react';

const AlertDeleteError = ({text}) => {
  const [showAlert, setShowAlert] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);

      // window.location.href = "/Films";
      // window.location.reload('/Films');
    }, 5000);
  }, []);

  if (!showAlert) return null;


 
    return (
      <div>

        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Holy smokes!</strong>
          <span class="block sm:inline">
            {text}
            
            {/* Something seriously bad happened. Data Not Deleted */}
            </span>

        </div>

        <br /><br />
      </div>

    );
 
  }



export default AlertDeleteError