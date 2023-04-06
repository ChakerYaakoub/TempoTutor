import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from './Button';
import { useStateContext } from '../contexts/ContextProvider';

const Alert = ({ title, text1 ,titleData,text2 }) => {
    const [showAlert, setShowAlert] = useState(true);
    const { currentColor } = useStateContext();

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
      
            // window.location.href = "/Films";
            // window.location.reload();
        }, 5000);
    }, []);

    if (!showAlert) return null;

    return (

        <div>

              <div class="p-4 text-green-900 bg-green-100 border border-green-200 rounded-md" >
            <div class="flex justify-between flex-wrap">
                <div class="w-0 flex-1 flex">
                    <div class="mr-3 pt-1">
                        <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M8.445 12.6675A.9.9 0 0 0 7.1424 13.91l2.5726 2.7448c.3679.3856.9884.3689 1.335-.036l5.591-7.0366a.9.9 0 0 0-1.3674-1.1705l-4.6548 5.9132a.4.4 0 0 1-.607.0252l-1.567-1.6826zM1.9995 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 class="text-md leading-6 font-medium">
                        Great ! {text1}
                        </h4>
                        <p class="text-sm">
                            {titleData}  {text2}
                        </p>
                      
                    </div>
                </div>
            
            </div>
        </div>
        <br /><br />

        </div>




    );
};

export default Alert;
// https://flowbite.com/docs/components/alerts/
// https://tailwindtemplates.io/templates?category=alert