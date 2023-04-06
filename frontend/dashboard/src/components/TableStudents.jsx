import React from 'react'
import useFetch from "../components/FetchData/getUseFetch"
import NewLoading from "../components/NewLoading"
import ErrorDataFetch from './ErrorDataFetch';
import { StudentsGrid } from '../data/data/dummy';
import TableData from './TableData';

const TableStudents = () => {
    const searchSettings = { fields: ['firstName', 'lastName', 'instruments','nationality','countRate','createdAt','IsActivated'], operator: 'contains', key: '', ignoreCase: true, hierarchyMode: 'None' }
    const deletUrl = "http://localhost:3000/admin/DeleteFilm/"
      const { data, loading, error } = useFetch(
        `http://localhost:3000/teachersScreen/dataAdminStudents` 
      );
    
    
    
    
    
      return (
        <div>
    
          {loading && <NewLoading />}
          {error && <ErrorDataFetch />}
    
          {data && (
            <>
              <TableData data={data} dataGrid={StudentsGrid} searchSettings={searchSettings} deletUrl={deletUrl}/>
    
    
    
            </>)}
    
    
        </div>
      )
}

export default TableStudents