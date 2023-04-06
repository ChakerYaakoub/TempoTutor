import React from 'react'
import useFetch from "../components/FetchData/getUseFetch"
import CouseDetailsById from '../components/CouseDetailsById';
import NewLoading from "../components/NewLoading"
import ErrorDataFetch from '../components/ErrorDataFetch';
import { useParams } from "react-router-dom";
import { Header } from '../components';

const CourseDetails = () => {

    const { id } = useParams();
    const { data, loading, error } = useFetch(
        `http://localhost:3000/Courses/data/${id}`
    );
  return (
    <div  className='m-1 md:m-2 mt-16 p-1 md:p-4   bg-white rounded-3xl '>

            {loading && <NewLoading />}
            {error && <ErrorDataFetch />}

            {data && (
                <>
                    <Header category="Course Details  " title={`Course Id  :  ${id}`} />
                    <CouseDetailsById data={data} />



                </>)}


        </div>
  )
}

export default CourseDetails