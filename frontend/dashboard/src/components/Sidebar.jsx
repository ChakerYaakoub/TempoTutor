import React from 'react' ;
import { Link  , NavLink} from 'react-router-dom';

import {MdOutlineCancel} from 'react-icons/md' ; 

import {TooltipComponent} from '@syncfusion/ej2-react-popups' ;

import {links} from '../data/data/dummy' ;

import { useStateContext } from '../contexts/ContextProvider';
import appIcon from "../data/data/iconBlack.svg";
import MySVGComponent from './MySVGComponent';


const Sidebar = () => {
  const{activeMenu , setActiveMenu , screenSize , currentColor } = useStateContext() ;

  const handleCloseSideBar =()=>{
    if(activeMenu && screenSize <=900 ){
      setActiveMenu(false)
    }
  }


  const activeLink = 'flex items-center gap-5  pl-4 pt-3 pb-2.5  rounded-lg text-white text-md m-2 ' ;

  const normalLink = 'flex items-center gap-5  pl-4 pt-3 pb-2.5  rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 '
  return (
   <div className="ml-3 h-screen md:overflow-hidden overflow-auto  
    md:hover:overflow-auto pb-10 ">
      {activeMenu && (<>
      <div className="flex justify-between items-center">
        <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 
        mt-4 text-xl font-extrabold tracking-tighter dark: text-white ">
          <div class=" items-center inline-flex mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                
                {/* <img src={appIcon} style={{ background :currentColor }}  alt="logo" className='w-8 rounded-full rounded-l-xl rounded-r  ' /> */}


                <MySVGComponent color={currentColor} />
                <span >Tempo<span style={{ color :currentColor }} className=' dark:text-white'>Tutor</span> </span>
         

        </div>

        </Link>

        <TooltipComponent content="Menu" position='BottomCenter'>
          <button 
          type='button' 
          onClick={()=>setActiveMenu(
            (prevActiveMenu)=>!prevActiveMenu
          )}
          className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden ">   {/* md:hidden */}
        
            
            <MdOutlineCancel/>
          </button>

        </TooltipComponent>

      </div>

      <div className="mt-10">

        {links.map((item)=>(
        
        <div key={item.title}>
          <p className='text-gray-400 m-3 mt-4 uppercase'>
            {item.title}
            </p>
            {item.links.map((Link)=>(
              <NavLink to={`${Link.name}`} 
              key={Link.name}

              style={({isActive})=> ({backgroundColor: isActive ? currentColor:''})}

              onClick={handleCloseSideBar}
              className={({isActive})=> isActive? activeLink : normalLink}
              >
                {Link.icon} 
                <span className='capitalize'>
                  {Link.nameLink}

                </span>



              </NavLink>
            ))}

        </div>


        ))}
      </div>
      
      </>)}

   </div>
  )
}

export default Sidebar