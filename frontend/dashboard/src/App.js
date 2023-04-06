import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { FiSettings } from 'react-icons/fi';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import {
  DashHome, Reviews, Bar, Pie, ColorMapping
} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css'


import NotFound from './pages/NotFound';
import LoginAdmin from './pages/LoginAdmin';


import IsLogin from './components/FetchData/IsLogin'
import Teachers from './pages/Teachers';
import TeacherDetails from './pages/TeacherDetails';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import InvoiceSection from './components/InvoiceSection/InvoiceSection';
import Financial from './pages/Financial';
import StudentsPage from './pages/StudentsPage';



const App = () => {

  IsLogin();
  const token = localStorage.getItem('Admin-Token');

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext(); // for another component 



  return (



    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        {token ? (
          <>
            <div className="flex relative dark:bg-main-dark-bg">

              {/* statrt div of setting button  */}

              <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>

                <TooltipComponent content="Settings" position='Top'>

                  <button type='button' className='text-3xl p-3  hover:drop-shadow-xl hover:bg-light-gray text-white'
                    style={{ background: currentColor, borderRadius: '50%' }}
                    onClick={() => setThemeSettings(true)}>

                    <FiSettings />
                  </button>

                </TooltipComponent>

              </div>

              {/* start div active menu  */}

              {activeMenu ? (
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg  bg-white'>
                  <Sidebar />

                </div>
              ) : (

                <div className='w-0 dark:bg-secondary-dark-bg'>
                  <Sidebar />

                </div>
              )}

              <div className={
                `dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full
          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>

                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>



                <div>
                  {themeSettings && <ThemeSettings />}
                  <Routes>





                    {/* dashboard  */}
                    <Route exact path="/" element={(<DashHome />)} />
                    <Route exact path="/DashHome" element={(<DashHome />)} />

                    <Route exact path="/invoice/:id" element={<InvoiceSection />} />



                    {/*user  TOOLS*/}
                    <Route exact path="/Teachers" element={(<Teachers />)} />
                    <Route exact path="/Teacher/:id" element={(<TeacherDetails />)} />

                    <Route exact path="/Student" element={(<StudentsPage />)} />


                    {/*user  TOOLS*/}
                    <Route exact path="/Cours" element={(<Courses />)} />
                    <Route exact path="/Course/:id" element={(<CourseDetails />)} />

                    {/*Reviews Financial*/}
                    <Route exact path="/Financial" element={(<Financial />)} />


                    {/*Reviews TOOLS*/}
                    {/* <Route exact path="/Reviews" element={(<Reviews />)} /> */}







                    {/* charts  */}

                    {/* <Route exact path="/bar" element={<Bar />} />
                    <Route exact path="/pie" element={<Pie />} />

                    <Route exact path="/color-mapping" element={<ColorMapping />} /> */}

                    {/* NotFound 404  */}
                    <Route path="*" element={<NotFound />} />





                  </Routes>
                </div>
              </div>

            </div>

          </>
        ) : (
          <Routes>
            {/* Login Form  */}
            <Route exact path="/LoginAdmin" element={<LoginAdmin />} />
            <Route path="*" element={<LoginAdmin />} />
          </Routes>

        )}

      </BrowserRouter>
    </div>


  )
}

export default App