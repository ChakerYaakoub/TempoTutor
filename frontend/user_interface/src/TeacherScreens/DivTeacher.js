import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import './teachers.css'

const DivTeacher = (props) => {
  const [InstrementArray , setInstrementArray] = useState(props.instruments);
  // const { id } = useParams();
  const [teacher, setTeacher] = React.useState({});
  

//  React.useEffect(() => {
//     axios.get(`/teachersScreen/${id}`)
//       .then((response) => {
//         setTeacher(response.props);
//       }) 
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);


  return (

            <div className='body'>
            <div className='teacherInfo' key={props._id}>

               <div className='imge'>
                <img src={`http://localhost:3000/${props.profilePicture}`}  alt=''  />
                </div>


              <div className='all'>
                <div className='Information'>
                  <h2>{`${props.firstName} ${props.lastName}`}</h2>
                </div>

                <div className='materiel'>
                 {InstrementArray.map((instrument) => (
                    <span key={instrument}>
                      <i className='fa-solid fa-play'></i>
                      {instrument}
                    </span>
                  ))}
                </div>

                <div className='description'>
                  {props.descriptionEXP}
                </div>
                <br></br>

                <div className='button'>
                  <Link to={`/teacherDetails/${props.id}`} className="button1">VIEW PROFILE</Link>
                  <button className='button2'>BOOK A LESSON</button>
                </div>
              </div>

            </div>
            </div>
          );
}

export default DivTeacher