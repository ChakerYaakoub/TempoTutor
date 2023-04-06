import React, { useState } from "react";
import "./UserLearningSection.css"

import { GlobalVariales } from '../../UseContext';
import { useContext } from "react";
import {  NavBareUserLearning, ContentUserLearning } from "../../Components/index";
import { useNavigate } from 'react-router-dom';

const UserLearningSection = () => {
    const navigate = useNavigate();

    const {  userId } = useContext(GlobalVariales);
    if(!userId){
        navigate("/");

    }
    const [activeStep, setActiveStep] = useState(1);
    return (
        <div className="UserLearningSectionFirst">

            <div className="TiteleForMyLearninf">
                <h1>My Learning</h1>
            </div>
            <NavBareUserLearning activeStep={activeStep} setActiveStep={setActiveStep} />
            <ContentUserLearning  activeStep={activeStep} setActiveStep={setActiveStep} userId={userId}/>


        </div>
    )
}

export default UserLearningSection