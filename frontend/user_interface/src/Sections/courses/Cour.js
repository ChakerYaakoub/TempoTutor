import React, { useState, useRef, useEffect  } from 'react' ;
import { Link, Navigate, useParams } from 'react-router-dom';
import useFetch from "../../getUseFetch";
import {CoursPrincipale,LoadingSpinner, ErrorComponent, SectionCour} from "../../Components/index";
// import {AddRemoveFav} from "../../Components/AddFav/AddFav"
import './cour.css'


const Cour = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch( `http://localhost:3000/Courses/dataPopi/${id}`);
    if(data) {
        console.log(data)
    }


  return (

<>
{loading && <> 
<br /><br /><br /><br /><br />

  <LoadingSpinner />
  <br /><br /><br /><br /><br />

</>


}
{error && <ErrorComponent />}


{data && 

<CoursPrincipale data={data} />
}

{data && 

<SectionCour   data={data} />

}
    </>



  )
}


export default Cour
