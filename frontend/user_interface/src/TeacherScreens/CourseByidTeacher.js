import React, { useState, useEffect } from 'react';
import "./CourseByidTeacher.css";
import useFetch from '../getUseFetch';
import { LoadingSpinner, ErrorComponent, DivCors } from "../Components/index";

const CourseByidTeacher = ({ id }) => {
    const { data, loading, error } = useFetch(`http://localhost:3000/teachersScreen/Course/Teacher/${id}`);
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        if (data && Array.isArray(data.courses)) {
            setDataArray(data.courses);
        }
    }, [data]);

    return (
        <>
            {loading && (
                <>
                    <br />
                    <br />
                    <br />
                    <LoadingSpinner />
                    <br />
                    <br />
                    <br />
                </>
            )}
            {error && <ErrorComponent />}
            {dataArray.length > 0 && (
                <>
                    <div className="CourseByidTeacher">
                        <h3 className="CourseByidTeacherTitle">Teachers Courses : </h3>
                    </div>
                    <div className="flex-MyCours" id="DataSearch">
                        {dataArray.map((cours) => (
                            <DivCors
                                key={cours._id}
                                courseName={cours.courseName}
                                instructorName={cours.instructorName}
                                iconId={cours._id}
                                price={cours.price}
                                description={cours.briefDescription}
                                numberOfStudents={cours.numberOfStudents}
                                mainCover={cours.mainCover}
                            />
                        ))}
                    </div>
                </>
            )}

            {!dataArray.length > 0 && (
                <>
                    <div className="CourseByidTeacher">
                        <p className="CourseByidTeacherTitle">Teachers Courses  : </p>
                    </div>


                    <p className='emty'>This Teacher has no courses</p>


                </>
            )}
        </>
    );
};

export default CourseByidTeacher;
