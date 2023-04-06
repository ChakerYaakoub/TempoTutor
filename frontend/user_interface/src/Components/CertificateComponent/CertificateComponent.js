import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import "./CertificateComponent.css"

import border from "../../assets/images/border.png"
import MySVGComponent from '../MySVGComponent';
import { FaCertificate } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";




const CertificateComponent = ({keyProp=1, data }) => {

    // console.log(`iam in 11 : ${JSON.stringify(data)}`)

    function formatDate(dateString) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", options);
    }

    function downloadCertificatePdf() {
        const element = document.getElementById(`certificateSection${keyProp}`);

        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('certificate.pdf');
        });
    }

    // function downloadCertificatePdf() {
    //     const element = document.getElementById('certificate');

    //     html2canvas(element).then((canvas) => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]); // set page size to match image
    //         pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    //         pdf.save('certificate.pdf');
    //     });
    // }


    function downloadCertificateImage() {
        const element = document.getElementById(`certificateSection${keyProp}`);

        html2canvas(element).then(canvas => {
            const link = document.createElement('a');
            link.download = 'certificate.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }


    const date = data.certificationDate;
    const formattedDate = formatDate(date);

    return (
        <div>






            <div className='PrinsipalcontainerCertificationSection ' id={`certificateSection${keyProp}`}>
                <div class="containerCertificationSection"  >
                {/* style={{ borderImage: `url(${border}) 30 stretch` }} */}

                    <div className='ContinueCertificate'>
                        <div class="logoCertificationSection">
                            <span className='Myspanlogologl'><MySVGComponent /> </span>

                            TempoTutor
                        </div>
                        <br />

                        <div class="marqueeCertificationSection">
                            Certificate of Completion
                        </div>

                        {/* <div class="assignmentCertificationSection">
              This certificate is presented to
            </div> */}

                        <div class="personCertificationSection">
                            {data.userfirstName.toUpperCase()}    {data.userlastName.toUpperCase()}
                        </div>

                        <div class="reasonCertificationSection">
                            This is to certify that <span>  {data.userfirstName.toUpperCase()}    {data.userlastName.toUpperCase()}  </span>
                            successfully completed  <br />
                            <span> {data.courseduration}  </span>
                            of   <span>  {data.courseName} " </span> <br />
                            online course on {formattedDate}
                        </div>


                        <div className='FelxCertificationSectionButtom'>
                            <div className='IdtextFaCertificate'>
                                CA : {data.CAId}
                                {/* .slice(0, 20) */}

                            </div>
                            <div className='FaCertificate'>
                                <FaCertificate />
                            </div>
                            <div className='FaSignaturecerti'>
                                {/* <p>test</p> */}
                                TempoTutor-director  <br /> <br />
                                <span className='FaSignaturecertiIcon'><FaSignature /> </span>


                            </div>
                        </div>


                    </div>


                </div>


            </div>

            <div className='MybtnCertifictedounlowad'>
                <button className='MybtnSectionMyCertificate' onClick={downloadCertificatePdf}>Download As PDF</button>

                <button className='MybtnSectionMyCertificate' onClick={downloadCertificateImage}>Download As image</button>
            </div>

            







        </div>
    )
}

export default CertificateComponent