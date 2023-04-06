import React, { useState } from 'react';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { MdAdminPanelSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';

import FetchToken from './FetchData/FetchToken'




const UserProfile = () => {
  const { currentColor } = useStateContext();
  const [logoutClicked, setLogoutClicked] = useState(false);

  const dataAdmin=FetchToken();


  const handleLogout = () => {
    localStorage.removeItem('Admin-Token');
    setLogoutClicked(true);
  };

  if (logoutClicked) {
    window.location.href = '/LoginAdmin';
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Admin Profile</p>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <MdAdminPanelSettings className='rounded-full h-24 w-24' style={{ color: currentColor }} />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {dataAdmin.firstName} {dataAdmin.lastName}  </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {dataAdmin.email}  </p>
        </div>
      </div>
      <div className="mt-5 text-right">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default UserProfile;
