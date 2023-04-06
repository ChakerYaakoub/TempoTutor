import React, { useState, useEffect } from "react";

const ImagePdf = ({ Section }) => {

    const [Imageclasse, setImageclasse] = useState("");



    useEffect(() => {
        // check if either sectionImage or sectionPdf is not null
        if (Section.sectionImage && Section.sectionPdf) {
            setImageclasse("MediaSectionImg");
            console.log(Imageclasse)
        } else {
            setImageclasse("MediaSectionImg111");
            console.log(Imageclasse)
        }
    }, [Section.sectionImage, Section.sectionPdf]);



    // check if either sectionImage or sectionPdf is not null
    if (!Section.sectionImage && !Section.sectionPdf) {
        return (<> </>)

    }



    return (
        <>
            <div className="TitleSectionMini">
                <p className="TitleSectionMini11">Additional Documents :</p>
                <p>Explore supplementary materials to enhance your understanding of the course content</p>


            </div>
            <br />


            <div className={Imageclasse}>


                {Section.sectionImage && <>


                    <div>

                        <img className='ImageMediaSection AllMediaSection' src={`http://localhost:3000/${Section.sectionImage}`} alt="" />


                    </div>

                </>}

                {/* <embed className='ImageMediaSection'  src={`http://localhost:3000/${Section.sectionPdf}`} type="application/pdf" /> */}

           

                {Section.sectionPdf && <> 
                     <div>



                    <iframe className='ImageMediaSection AllMediaSection' src={`http://localhost:3000/${Section.sectionPdf}`} >
                    </iframe>

                </div>
                
                </>}



            </div>
           

        </>
    )

}

export default ImagePdf