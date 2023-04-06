import React from 'react'
import { Header } from '../components';
import Purchase from '../components/Purchase';

const Financial = () => {
    return (
        <div className='m-1 md:m-2 mt-16 p-1 md:p-4   bg-white rounded-3xl '>





            <Header category="Financial Information  " title={`Sales / Invoices By Date/NO `} />

            <Purchase />

            {/* <br /><br />
            <p>Table </p> */}







        </div>
    )
}

export default Financial