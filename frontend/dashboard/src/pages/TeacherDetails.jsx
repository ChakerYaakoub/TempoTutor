import React from 'react'
import useFetch from "../components/FetchData/getUseFetch"
import TeacherDetailsComponents from '../components/TeacherDetailsComponents';
import NewLoading from "../components/NewLoading"
import ErrorDataFetch from '../components/ErrorDataFetch';
import { useParams } from "react-router-dom";
import { Header } from '../components';

const TeacherDetails = () => {

    const { id } = useParams();
    const { data, loading, error } = useFetch(
        `http://localhost:3000/teachersScreen/data/${id}`
    );



    return (
        <div  className='m-1 md:m-2 mt-16 p-1 md:p-4   bg-white rounded-3xl '>

            {loading && <NewLoading />}
            {error && <ErrorDataFetch />}

            {data && (
                <>
                    <Header category="Teachers Details " title={`Teacher Id  :  ${id}`} />
                    <TeacherDetailsComponents data={data} />



                </>)}


        </div>
    )
}

export default TeacherDetails