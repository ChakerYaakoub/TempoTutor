import React from 'react'
import { Header } from '../components'
import Coursestable from '../components/Coursestable'

const Courses = () => {
  return (
    <div  className='m-1 md:m-2 mt-16 p-1 md:p-4   bg-white rounded-3xl '>
    <Header category="Courses  Tools" title="Our Courses :"/>
    <Coursestable />



</div>
  )
}

export default Courses