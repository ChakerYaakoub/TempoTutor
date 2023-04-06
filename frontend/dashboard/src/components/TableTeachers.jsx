import React from 'react'
import useFetch from "../components/FetchData/getUseFetch"
import NewLoading from "../components/NewLoading"
import ErrorDataFetch from './ErrorDataFetch';
import { teachersGrid } from '../data/data/dummy';
import TableData from './TableData';

const TableTeachers = () => {
  const searchSettings = { fields: ['firstName', 'lastName', 'instruments','nationality','countRate','createdAt','IsActivated'], operator: 'contains', key: '', ignoreCase: true, hierarchyMode: 'None' }
const deletUrl = "http://localhost:3000/admin/DeleteFilm/"
  const { data, loading, error } = useFetch(
    `http://localhost:3000/teachersScreen/dataAdmin` 
  );





  return (
    <div>

      {loading && <NewLoading />}
      {error && <ErrorDataFetch />}

      {data && (
        <>
          <TableData data={data} dataGrid={teachersGrid} searchSettings={searchSettings} deletUrl={deletUrl}/>



        </>)}


    </div>
  )
}

export default TableTeachers