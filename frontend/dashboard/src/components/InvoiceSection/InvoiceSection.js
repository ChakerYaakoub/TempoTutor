import React from 'react'
import "./InvoiceSection.css"
import { useParams } from 'react-router-dom';
import InvoiceComponent from '../InvoiceComponent/InvoiceComponent';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';


const InvoiceSection = () => {

  const { id } = useParams();

  // function downloadCertificatePdf() {
  //   const element = document.getElementById(`InvoiceSection`);

  //   html2canvas(element).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //     pdf.save('Invoice.pdf');
  //   });
  // }


  // function downloadCertificateImage() {
  //   const element = document.getElementById(`InvoiceSection`);

  //   html2canvas(element).then(canvas => {
  //     const link = document.createElement('a');
  //     link.download = 'Invoice.png';
  //     link.href = canvas.toDataURL();
  //     link.click();
  //   });
  // }
  return (
    <>
      <div >
        <div className='InvoiceSectionFirstDiv'>
          <p className='fisrpinvoice pInvoice'> Invoice No: <span>{id}  </span>   </p>

          {/* <p className='secendpinvoice pInvoice'>We are grateful for your purchase!! Your invoice details are shown below:</p> */}

        </div>

        <div className='InvoiceSection' >


          <div className='SectionChadowInvois'>
            <div id="InvoiceSection">
              <InvoiceComponent id={id} />
            </div>

          </div>






        </div>

        {/* <div className='MybtnCertifictedounlowad'>
          <button className='MybtnSectionMyCertificate' onClick={downloadCertificatePdf}>Download As PDF</button>

          <button className='MybtnSectionMyCertificate' onClick={downloadCertificateImage}>Download As image</button>
        </div> */}

        {/* <div className='InvoiceSectionFirstDiv'>

          <p className='fisrpinvoice pInvoice'>Please feel free to contact us if you need any further information</p>
        </div> */}

      </div>



    </>
  )
}

export default InvoiceSection