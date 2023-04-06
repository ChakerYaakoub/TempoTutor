import React from 'react'
import MySVGComponent from '../../Components/MySVGComponent';
import heart from "../../assets/images/heart.png"

import { GlobalVariales } from '../../UseContext';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


const InvoiceData = ({ data }) => {
    const navigate = useNavigate();

    const { userFirstName, userId, userLastName } = useContext(GlobalVariales);
    console.log(data)
    const invoice = data.invoice;
    const GoToCoure = (id) => {

        navigate(`/Course/${id}`)

    };

    function formatDate(dateString) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", options);
    }
    const date = invoice.paymentDate;
    const formattedDate = formatDate(date);


    return (
        <div className='InvoiceComponent'>

            <div className="logo-containerInvoiceSection">


                <div className="logoCertificationSection">
                    <span className='Myspanlogologl'><MySVGComponent /> </span>

                    TempoTutor
                </div>
            </div>

            <table className="invoice-info-containerInvoiceSection">
                <tr>
                    <td rowSpan="2" className="client-nameInvoiceSection">
                        Client Name : {userFirstName} {userLastName}
                    </td>
                    <td>

                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                </tr>
                <tr>
                    <td>
                        Invoice Date: <strong>{formattedDate}</strong>
                    </td>
                    <td>

                    </td>
                </tr>
                <tr>
                    <td>
                        Invoice No: <strong>{invoice._id} </strong>
                    </td>
                    <td>

                    </td>
                </tr>
            </table>


            <table className="line-items-containerInvoiceSection">
                <thead>
                    <tr>
                        <th className="heading-quantityInvoiceSection">Course</th>
                        <th className="heading-descriptionInvoiceSection">Description</th>
                        <th className="heading-priceInvoiceSection">Price</th>
                        <th className="heading-priceInvoiceSection">VAT 20%</th>
                        <th className="heading-subtotalInvoiceSection">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice.courses.map((course, index) => (
                        <tr key={course.courseId._id}>
                            <td>{index + 1}</td>
                            <td>
                 <span className='TitlecertificationUserDivsss' onClick={() => GoToCoure(course.courseId._id)}>{course.courseId.courseName} </span>

                                
                            </td>
                            <td className="rightInvoiceSection">${course.price.toFixed(2)}</td>
                            <td className="rightInvoiceSection">${(course.price * 0.2).toFixed(2)}</td>
                            <td className="boldInvoiceSection">${(course.price * 1.2).toFixed(2)}</td>
                        </tr>
                    ))}

                </tbody>
            </table>


            <table className="line-items-containerInvoiceSection has-bottom-borderInvoiceSection">
                <thead>
                    <tr>
                        <th>Payment Info</th>
                        <th>Due By</th>

                        <th>Total Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="payment-infoInvoiceSection">
                            <div>
                                Account No: <strong>{userId} </strong>
                            </div>
                            <div>
                                Routing No: <strong>{invoice._id}</strong>
                            </div>
                            <div>
                            Payment Methods <strong>{invoice.paymentMethod}</strong>
                            </div>

                        
                        </td>
                        <td className="largeInvoiceSection">{formattedDate}</td>
                        <td className="large totalInvoiceSection">${data.totalAmount}</td>
                    </tr>
                </tbody>
            </table>
            <br /><br /><br />

            <div className="footerInvoiceSection">
                <div className="footer-infoInvoiceSection">
                    <span>TempoTutor@gmail.com</span> |
                    <span>+961-875585</span> |
                    <span>TempoTutor.com</span>
                </div>
                <div className="footer-thanksInvoiceSection">
                    <img src={heart} alt="heart" />

                    <span>Thank you!</span>
                </div>
            </div>



        </div>
    )
}

export default InvoiceData