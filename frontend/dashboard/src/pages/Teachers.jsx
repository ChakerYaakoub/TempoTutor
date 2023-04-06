import React from 'react'
import { Header } from '../components'
import TableTeachers from '../components/TableTeachers'

const Teachers = () => {
  return (
    <div  className='m-1 md:m-2 mt-16 p-1 md:p-4   bg-white rounded-3xl '>
        <Header category="Teachers Tools" title="Our Teachers :"/>
        <TableTeachers/>


    </div>
  )
}

export default Teachers