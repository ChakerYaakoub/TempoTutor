import React from 'react'
import AddNewCours from '../AddNewCours/AddNewCours'
import AddNewSection from '../AddNewSection/AddNewSection'
import SubmitPageCours from '../SubmitPageCours/SubmitPageCours'
import "./ContentsAddNewCours.css"

const ContentsAddNewCours = ({totalPage,
    completFormsNb, setCompletFormsNb, update, state,
    initialSections, sectionIndex, dispatchSections,
    activeStep, setActiveStep,
    setError, error,contents,SubmitPage

}) => {

    const updateSection = (sectionIndex, field) => (event) => {
        let value;

        if (event && event.filesData) {
            value = event.filesData[0].rawFile;
        } else if (event && event.value) {
            value = event.value;
        } else {
            value = null;
        }

        dispatchSections({
            type: "update_section",
            sectionIndex,
            field,
            value,
        });
    };

     contents = [
        {
            id: 1,
            content:
                <AddNewCours
                    completFormsNb={completFormsNb}
                    setCompletFormsNb={setCompletFormsNb}
                    update={update}
                    state={state}
                    setError={setError}
                    error={error}
                    activeStep={activeStep}
                    pageNb={1}

                />
        },
        ...[...Array(sectionIndex)].map((_, index) => ({
            id: 1 + index + 1,

            content: (
                <div key={index}>
                    <AddNewSection
                        initialSections={initialSections}
                        sectionIndex={index}
                        pageNb={1 + index + 1}
                        title={`Section ${index + 1}`}
                        completFormsNb={completFormsNb}
                        setCompletFormsNb={setCompletFormsNb}
                        setError={setError}
                        error={error}
                        activeStep={activeStep}

                        dispatchSections={dispatchSections}
                        updateSection={updateSection.bind(null, index)}

                    />
                </div>
            ),
        })),
        ...[...Array(SubmitPage)].map((_, index) => ({
            id: index+1000,

            content: (
                <div key={index+1000}>
                    <SubmitPageCours
                        initialSections={initialSections}
                        // sectionIndex={index}
                        pageNb={activeStep+1}
                        // title={`Section ${index + 1}`}
                        completFormsNb={completFormsNb}
                        setCompletFormsNb={setCompletFormsNb}
                        state={state}
                        setError={setError}
                        error={error}
                        setActiveStep={setActiveStep}
                        activeStep={activeStep}
                        update={update}

                   

                    />
                </div>
            ),
        })),

        
    ];
    return (


        <div className="Mycontent-formsAddCours">
            {contents.map((item) => (
                <div key={item.id} id={item.id} className={`MyitemFormAddCours ${item.id === activeStep ? 'active' : 'inactive'}`}>

                    {/* {error && <AllAlert type="danger" message="Please fill out all the required fields" /> } */}

                    <div className="MyitemForm-contentAddCours">{item.content}</div>
                </div>
            ))}








        </div>
    )
}

export default ContentsAddNewCours