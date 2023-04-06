import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import FetchToken from './FetchData/FetchToken'



import { Cart, Chat, Notification, UserProfile } from '.';

import { useStateContext } from '../contexts/ContextProvider';



const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  
  <TooltipComponent content={title} position="BottomCenter">

    <button type='button'
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray" >

      <span style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "/>

        {icon}
      



    </button>

  </TooltipComponent>
)


const Navbar = () => {
  const { activeMenu, setActiveMenu ,isClicked,
     setisClicked , handleClick ,
     screenSize, setscreenSize , currentColor} = useStateContext();

     const dataAdmin=FetchToken();

   

     useEffect(()=>{
      const handleResize = ()=> setscreenSize(window.innerWidth) ;
      window.addEventListener('resize' , handleResize) ;

      handleResize() ;
      return ()=> window.removeEventListener('resize' , handleResize) ;

     }, []) ;

     useEffect(()=>{
      if(screenSize <=900) {
        setActiveMenu(false) ;
      } else{
        setActiveMenu(true) ;

      }
     },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>

      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">


     



        {/* <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        /> */}



        {/* <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line  />}
        /> */}


        <TooltipComponent
          content="Profile"
          position='BottomCenter'>

          <div className='flex items-center gap-2 cursor-pointer p-2 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          > 

          {/* <img src={avatar}  /> */}
          <MdOutlineAdminPanelSettings className=' w-6 h-7' style={{ color :currentColor }}/>

          <p>
            <span className='text-gray-400 text-14'> Hi , </span> {''}
            <span className='text-gray-400 font-bold ml-1 text-14'>{dataAdmin.firstName} {dataAdmin.lastName}</span>
           
          </p> 
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>

          </div>

        </TooltipComponent >

    
        {/* {isClicked.chat && <Chat/>} */}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}


      </div>

    </div>
  )
}

export default Navbar