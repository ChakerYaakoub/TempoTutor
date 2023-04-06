import React, { useState, useEffect, useContext } from "react";
import { LoadingSpinner, ErrorComponent, UserCertificates } from "../../Components/index";
import "./userCertificatesSection.css"
import useFetch from "../../getUseFetch";
import { GlobalVariales } from '../../UseContext';
import Empty from "../../Components/Empty/Empty";



const UserCertificatesSection = () => {
    const { userId } = useContext(GlobalVariales);



    const { data, loading, error } = useFetch(`http://localhost:3000/Sections/users/${userId}`);

    const [data1, setData1] = useState(data);
    const [loading1, setLoading1] = useState(loading);
    const [error1, setError1] = useState(error);
    const [empty, Setempty] = useState(false);

    useEffect(() => {
        if (data) {
            setError1(false)
            setLoading1(false)
            setData1(data)
            // console.log(data.certification.length )

            if (data) {
                if (data.certification.length === 0) {
                    Setempty(true)
                }
            }



        } else {

        }


    },
        [userId, data, loading, error, empty]);
    return (

        <>

            {loading1 && (
                <>
                    <br />
                    <br />
                    <br />
                    <LoadingSpinner />
                </>
            )}
            {error1 && <ErrorComponent />}


            {data1 && data1.certification.length > 0 ? (
                <>
                    <UserCertificates data={data} />
                </>
            )
                : (
                    <>
                        {/* <Empty text={" You don't have any certificate"} /> */}

                       
                        {!empty &&  <> <p className="MyhidePadiing"></p> </> }

                    </>

                )}


            {empty &&
                <>
                    <Empty text={" You don't have any certificate"} />

                </>


            }





        </>




    )
}

export default UserCertificatesSection