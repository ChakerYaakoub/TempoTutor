import React from 'react'
import useFetch from "../components/FetchData/getUseFetch"
import NewLoading from "../components/NewLoading"
import ErrorDataFetch from './ErrorDataFetch';
import { CoursGrid } from '../data/data/dummy';
import TableData from './TableData';

const Coursestable = () => {

    const searchSettings = { fields: ['courseName', 'courseSubject', 'numberOfStudents','rateCourse','CourseDate','isPublish'], operator: 'contains', key: '', ignoreCase: true, hierarchyMode: 'None' }
    const deletUrl = "http://localhost:3000/admin/delete/"
      const { data, loading, error } = useFetch(
        `http://localhost:3000/Courses/dataAdmin`
      );
  return (
    <div>

    {loading && <NewLoading />}
    {error && <ErrorDataFetch />}

    {data && (
      <>
        <TableData data={data} dataGrid={CoursGrid} searchSettings={searchSettings} deletUrl={deletUrl}/>



      </>)} 


  </div>
  )
}

export default Coursestable