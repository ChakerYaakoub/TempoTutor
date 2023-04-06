
import { useState, useEffect, useRef, useReducer } from 'react';
import * as React from 'react';
import "./InstrumentsRegister.css"
import piano from "../../../assets/images/piano.svg";
// import piano1 from "../../../assets/images/piano.jpg" ;
import Guitar from "../../../assets/images/Oud.jpg";
import piano3 from "../../../assets/images/piano3.png";

import { instrumentsArray } from "../../../assets/DummyData"
import AllAlert from '../../AllAlert/AllAlert';



const InstrumentsRegister = ({ instruments, setInstruments, completFormsNb, setCompletFormsNb,error, setError }) => {




  useEffect(() => {
    if (instruments.length > 0) {
      setCompletFormsNb({ ...completFormsNb, 2: true }); 
      setError(false)

    } else {
      setCompletFormsNb({ ...completFormsNb, 2: false }); 
    
    }
  }, [instruments, setCompletFormsNb]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setInstruments([...instruments, value]);
    } else {
      setInstruments(instruments.filter((instrument) => instrument !== value));
    }
  };


  return (
    <div>
          {error && <AllAlert type="danger" message="Please select at least one instrument." /> } 
      <div className="flex-instruments" >
  

        {instrumentsArray.map((instrument) => (
          <div className='one-instruments' key={instrument.name}>
            <label>
              <div className={`imageinstruments-container${instruments.includes(instrument.name.toLowerCase()) ? ' checked' : ''}`}>
                <input className={"Mycheckboxinstruments"} type="checkbox" name={instrument.name.toLowerCase()} value={instrument.name.toLowerCase()} onChange={handleCheckboxChange} />

                <img src={instrument.image} alt={instrument.name} className="image-instruments" />

                <div className='TitleinstrumentsDiv'>
                  {instrument.name}
                </div>
              </div>
            </label>
          </div>
        ))}
   



      </div>
    </div >
  )
}

export default InstrumentsRegister;






