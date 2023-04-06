import React from 'react'
import { Header } from '../components'
import TableStudents from '../components/TableStudents'

const StudentsPage = () => {
  return (
    <div  className='m-1 md:m-2 mt-16 p-1 md:p-4   bg-white rounded-3xl '>
        <Header category="Students Tools" title="Our Students :"/>

        <TableStudents/>


    </div>
  )
}

export default StudentsPage