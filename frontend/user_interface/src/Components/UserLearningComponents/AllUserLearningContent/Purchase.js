import React, { useEffect } from 'react'
import "./Purchase.css"
import { LoadingSpinner, ErrorComponent } from "../../../Components/index";
import useFetch from '../../../getUseFetch';
import { Link, useNavigate } from "react-router-dom";
import Empty from '../../Empty/Empty';



const Purchase = ({ userId }) => {

  const navigate = useNavigate();


  const { data, loading, error } = useFetch(
    `http://localhost:3000/UserLearning/AllPurchase/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
      },
    }
  );

  // if (data) {
  //   console.log(data)
  // }

  const GoToinvoice = (id) => {

    navigate(`/invoice/${id}`)

  };

  useEffect(() => {

  },
    [data, error]);

    if (loading) {
      // return <Empty text={" You don't have any favorite courses yet"} />
  
      return <div className="PurchasePrincipale ">
        <LoadingSpinner />
      </div>;
    }

  if (!Array.isArray(data) || data.length === 0) {
    // return <Empty text={" You don't have any favorite courses yet"} />

    return <div className="PurchasePrincipale ">
      <p className='VoidePurchAAse' >You don't have any Purchase  yet</p>
    </div>;
  }

  return (

    <>

      {loading && <LoadingSpinner />}
      {(error && !data) && <ErrorComponent />}

      {(data && userId && Array.isArray(data)) && <>

        <div className='PurchasePrincipale'>
          <div className='PurchaseContent'>

            <div className='FisrtPurchaseTitleHideAfter PurchasePrincipaleDivs'>
              <div>Purchase </div>
              <div> Description</div>
              <div>  Purchase Date</div>
              <div>Sub Total</div>
              <div> VAT 20%</div>
              <div> Total Amount </div>
              <div> Invoice </div>

            </div>
            {
              data.map((invoice, index) => (
                <div key={invoice._id} className='FisrtPurchaseTitleNotHide PurchasePrincipaleDivs'>
                  <div className='regulairediv'>
                    <span className='HideTitlePurchase'>Purchase :</span>
                    <span className='DetailSpanPurchase'> Purchase {index + 1}</span>
                  </div>
                  <div className='regulairediv'>
                    <span className='HideTitlePurchase'>Description :</span>
                    <span className='DetailSpanPurchase'>{invoice.invoice.courses.length} course-s</span>
                  </div>
                  <div className='regulairediv'>
                    <span className='HideTitlePurchase'>Purchase Date :</span>
                    <span className='DetailSpanPurchase'>{new Date(invoice.invoice.paymentDate).toLocaleDateString()}</span>
                  </div>
                  <div className='regulairediv'>
                    <span className='HideTitlePurchase'>Sub Total :</span>
                    <span className='DetailSpanPurchase'> {invoice.invoice.amount.toFixed(2)} $</span>
                  </div>
                  <div className='regulairediv'>
                    <span className='HideTitlePurchase'>VAT 20% :</span>
                    <span className='DetailSpanPurchase'> {invoice.invoice.VAT.toFixed(2)} $</span>
                  </div>
                  <div className='regulairediv'>
                    <span className='HideTitlePurchase'>Total Amount :</span>
                    <span className='DetailSpanPurchase'> {invoice.totalAmount.toFixed(2)} $</span>
                  </div>
                  <div className='BtnDetailSpanPurchaseDiv'>
                    <span className='DetailSpanPurchase'>
                      <button className='BTNDetailSpanPurchase' onClick={() => GoToinvoice(invoice.invoice._id)} > Details </button>
                    </span>
                  </div>
                </div>
              ))}


          </div>


        </div>

      </>}

      {/* {(!Array.isArray(data) || data.length === 0) &&(!loading) && data && (
        <Empty text={" You don't have any favorite courses yet"} />
      )} */}

    </>


  )
}

export default Purchase