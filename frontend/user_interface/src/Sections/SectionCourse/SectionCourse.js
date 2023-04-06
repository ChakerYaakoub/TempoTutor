import React, { useState, useEffect, useContext } from "react";
import { SideBareSection, LoadingSpinner, ErrorComponent, ContentSection, HeaderSection,Whatenext,CertificationSection } from "../../Components/index";
import useFetch from "../../getUseFetch";
import "./SectionCourse.css"
import { GlobalVariales } from '../../UseContext';
import Header from "../Header/Header";

const SectionCourse = ({ CourseId, sectionIndex }) => {
    let { data, loading, error  } = useFetch(`http://localhost:3000/Courses/dataPopi/${CourseId}`);
    const { userId } = useContext(GlobalVariales);
    const [showSideBar, setShowSideBar] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [newData, setNewData] = useState(null); // <-- add a new state for new data



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setShowSideBar(false);
            } else {
                setShowSideBar(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [showSideBar,setShowSideBar]);


    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/Courses/dataPopi/${CourseId}`);
        const newData = await res.json();
        setNewData(newData); // <-- update the state with the new data
        console.log("new data");
    };

    useEffect(() => {
        if (refresh) {
            fetchData();
            setRefresh(false);
        }
    }, [refresh,setRefresh]);

    const classWidthContinue = showSideBar ? "" : "widdht100";
    const addClassFormMedia = showSideBar ? "" : "SidebareSectionOnmedia";
    const contentData = newData || data;

    return (
        <>
            {loading && (
                <>
                    <br />
                    <br />
                    <br />
                    <LoadingSpinner />
                </>
            )}
            {error && <ErrorComponent />}

            {data && (
                <>
                    <div className="MyfixedHeader">
                        <Header />
                    </div>

                    <div className="HeaderSection1234">
                        <HeaderSection data={contentData} sectionIndex={sectionIndex} ShowSideBare={showSideBar} SetShowSideBare={setShowSideBar} />
                    </div>

                    <div className="SectionContinueAll">
                        {showSideBar && (
                            <div className={`SidebareSectionAll ${addClassFormMedia}`}>
                                <SideBareSection sectionIndex={sectionIndex} CourseId={CourseId} data={contentData} userId={userId} refresh={refresh} setRefresh={setRefresh} />
                            </div>
                        )}

                        <div className={`continuelessonsection ${classWidthContinue}`}>
                            {sectionIndex < 1000 && <ContentSection sectionIndex={sectionIndex} CourseId={CourseId} data={contentData} userId={userId} refresh={refresh} setRefresh={setRefresh}  />}
                            {sectionIndex === 1000 && <Whatenext sectionIndex={sectionIndex} CourseId={CourseId} data={contentData} userId={userId} refresh={refresh} setRefresh={setRefresh} />}
                            {sectionIndex === 1001 && <CertificationSection sectionIndex={sectionIndex} CourseId={CourseId} dataCourse={contentData} userId={userId} refresh={refresh} setRefresh={setRefresh}/>}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default SectionCourse;
