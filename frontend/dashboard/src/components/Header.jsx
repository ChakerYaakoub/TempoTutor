import React from 'react'


const Header = ({category , title}) => {
  return (
    <div>
        <div className=' mt-3 mb-10 '>
        <p className='text-gray-400 pb-2'>
            {category}
        </p>

        <p className='text-3xl font-extrabold tracking-tight text-slate-900'>
            {title}
        </p>

    </div>
    </div>
  
  )
}

export default Header