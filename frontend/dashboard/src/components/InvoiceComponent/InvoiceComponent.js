import React from 'react'
import "./InvoiceComponent.css"



import useFetch from '../FetchData/getUseFetch';
import Loading from '../Loading';
import ErrorDataFetch from '../ErrorDataFetch';
import InvoiceData from './InvoiceData';




const InvoiceComponent = ({ id }) => {
    // const {  userId } = useContext(GlobalVariales);
  

    const { data, loading, error } = useFetch(
        `http://localhost:3000/invoice/${id}`,
        {
            userId: id

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
        return <>  <Loading /> </>
    }

    if (error) {
        return <> <ErrorDataFetch /> </>
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