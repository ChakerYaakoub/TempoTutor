import React from 'react';

import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { GiInvisible } from 'react-icons/gi';
import { ImFilm } from 'react-icons/im';
import { FcFilm } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';

import { TbFileMusic } from 'react-icons/tb';
import { useStateContext } from '../contexts/ContextProvider';
import { Button, Header } from '../components';

// import { MediaData } from '../data/data/dummy';

import Loading from '../components/Loading';
import DataDashHome from '../components/FetchData/DataDashHome';
import Purchase from '../components/Purchase';


const DashHome = () => {



  const dataHome = DataDashHome();

  // const total = dataHome.data.TotalRevenue.slice(2)

  // "TotalRevenue": 0,
  // "CoursCount": 0,
  // "visiteur": 0,
  // "StudentsCount": 0,
  // "TeachersCount": 0

  const { currentColor } = useStateContext();
  return (

    <div className='mt-12' >
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">

        {/* Total revenue */}

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Revenue</p>
              {/* <p className="text-lg">{dataHome.data.views} </p> */}
              {/* <Button
              color='white'
              bgColor={currentColor}
              text={dataHome.data.views}
              borderRadius="10px"
              size="md"
              disabled="true"
            /> */}
            </div>

          </div>
          <div className='mt-6'>



            <Button
              color='white'
              bgColor={currentColor}
              text={`${dataHome.data.TotalRevenue.toFixed(2)} $`}
              borderRadius="10px"
              size="md"
              disabled={true}
            />

          </div>


        </div>



        <div className='flex m-3 flex-wrap justify-center gap-1 items-center w-11/12' >


          {/* Cours  */}


          <div className="bg-white h-44  dark:text-gray-200 dark:bg-secondary-dark-bg  md:w-57 lg:w-1/4 p-4 pt-9 rounded-2xl text-center ">
            <button
              type="button"
              style={{ color: 'rgb(228, 106, 118)', backgroundColor: 'rgb(255, 244, 229)' }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              disabled={true}
            >
              <TbFileMusic />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{dataHome.data.CoursCount}</span>

            </p>
            <p className="text-sm text-gray-400  mt-1">Cours</p>



          </div>

          {/* visiter  */}

          <div className="bg-white h-44  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 lg:w-1/5   p-4 pt-9 rounded-2xl text-center ">
            <button
              type="button"
              style={{ color: 'black', backgroundColor: 'rgb(254, 201, 15)' }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              disabled="true"
            >
              <GiInvisible />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{dataHome.data.visiteur}</span>

            </p>
            <p className="text-sm text-gray-400  mt-1">Guest</p>
          </div>

          {/* students  */}

          <div className="bg-white h-44  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 lg:w-1/5  p-4 pt-9 rounded-2xl text-center ">
            <button
              type="button"
              style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              disabled={true}
            >
              <MdOutlineSupervisorAccount />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{dataHome.data.StudentsCount}</span>

            </p>
            <p className="text-sm text-gray-400  mt-1">Students</p>
          </div>


          {/* teachers  */}

          <div className="bg-white h-44  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-57 lg:w-1/4  p-4 pt-9 rounded-2xl text-center ">
            <button
              type="button"
              style={{ color: 'rgb(0, 194, 146)', backgroundColor: 'rgb(235, 250, 242)' }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              disabled={true}
            >
              <GiTeacher />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{dataHome.data.TeachersCount}</span>

            </p>
            <p className="text-sm text-gray-400  mt-1">Teachers</p>
          </div>


        </div>

      </div>

      {/* new section 1:54  */}

      <div className='flex m-3 flex-wrap justify-center items-center '>



        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl  w-11/12 z-0 '>
          {/* {!data && <Loading/>} */}
          {/* {data && <Loading/>} */}


          <div>

            <p class="font-bold text-gray-400 text-xl m-2">Financial Information</p>
          </div>



          <Purchase />


        </div>



      </div>

    </div>
  )
}

export default DashHome