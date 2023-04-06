import React from 'react'
import "./InvoiceComponent.css"



import useFetch from '../../getUseFetch';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import InvoiceData from './InvoiceData';

import { GlobalVariales } from '../../UseContext';
import { useContext } from "react";


const InvoiceComponent = ({ id }) => {
    const {  userId } = useContext(GlobalVariales);
  

    const { data, loading, error } = useFetch(
        `http://localhost:3000/invoice/${id}`,
        {
            userId: userId

        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token")
                    ? localStorage.getItem("token")
                    : "",
            },
        }
    );

 
    if (loading) {
        return <>  <LoadingSpinner /> </>
    }

    if (error) {
        return <> <ErrorComponent /> </>
    }
  



    if (data) {
        return (
            <> 
            
            <InvoiceData   data={data}  />
            
            </>
        )
    } else {
        return <>

        </>
    }

}

export default InvoiceComponent