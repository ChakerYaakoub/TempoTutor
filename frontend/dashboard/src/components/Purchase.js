import React, { useState, useEffect } from 'react';
import '../components/css/Purchase.css';
import Loading from './Loading';
import Button from './Button';
import ErrorDataFetch from './ErrorDataFetch';
import useFetch from './FetchData/getUseFetch';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import NewLoading from './NewLoading';

const Purchase = () => {
  const { currentColor } = useStateContext();
  const [ToTal, SetTotal] = useState(0)
  const [Courses, SetCourses] = useState(0)
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    'http://localhost:3000/UserLearning/AllPurchaseDach',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
          ? localStorage.getItem('token')
          : '',
      },
    }
  );
  const [idFilter, setIdFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const GoToinvoice = (id) => {
    navigate(`/invoice/${id}`);
  };

  const resertFilter = ()=>{
    setIdFilter('') ;
    setDateFilter('')
  }




  const filteredData = data
    ? data.filter((invoice) => {
      if (idFilter && invoice.invoice._id !== idFilter) {

        return false;
      }
      if (dateFilter) {
        const invoiceDate = new Date(invoice.invoice.paymentDate);
        const filterDate = new Date(dateFilter);
        if (
          invoiceDate.getFullYear() !== filterDate.getFullYear() ||
          invoiceDate.getMonth() !== filterDate.getMonth() ||
          invoiceDate.getDate() !== filterDate.getDate()
        ) {
          return false;
        }
      }

      return true;
    })
    : [];


  useEffect(() => {
    let isMounted = true; // add this variable to track if the component is mounted
    if (filteredData) {
      let total = 0;
      let cours = 0
      for (let i = 0; i < filteredData.length; i++) {
        total += filteredData[i].totalAmount;
        cours += filteredData[i].invoice.courses.length;

      }
      if (isMounted) { // check if the component is still mounted before updating the state
        SetTotal(total);
        SetCourses(cours)
      }
    }
    return () => { isMounted = false }; // add cleanup function to cancel any outstanding tasks
  }, [data, error, filteredData]);



  if (loading ) {
    return (
      <div className='PurchasePrincipale '>
        <p className='VoidePurchAAse'>
        <NewLoading />
        </p>
      </div>
    );
  }



 

  if (!Array.isArray(data) || data.length === 0 ) {
    return (
      <div className='PurchasePrincipale '>
        <p className='VoidePurchAAse'>
          we don't have any Purchase yet
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='AllALlALlPurchase'>


        {loading && <Loading />}
        {error && !data && <ErrorDataFetch />}
        {data && Array.isArray(data) && (
          <>

            {/* <div>
        
              <p class="font-bold text-gray-400 text-xl m-2">Financial Information</p>
            </div> */}
      

            <div className='resetDivData'>


              {(idFilter || dateFilter) && <>  
                   <button style={{ background: currentColor }} className=' myabsolutebtnck'
                    onClick={() => resertFilter()}
                   
                   >
                reset </button>
                  </>}
         

            </div>
            <br /><br />

            <div className='MyInputsFilterPurchase'>

              <div>
                <label className='HidelABB' htmlFor='idFilter'>Search <span>Invoice </span>  By No </label> <br />
                <input
                  type='text'
                  id='idFilter'
                  value={idFilter}
                  placeholder="e.g.:642160db44eaeba4d4b82496"
                  onChange={(e) => setIdFilter(e.target.value)}
                  className="  text-gray-900 dark:text-white"
                />
              </div>



              <div >
                <label className='HidelABB' htmlFor='dateFilter'>Filter <span> Purchase </span>   By  Date</label> <br />
                <input
                  type='date'
                  id='dateFilter'
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="  text-gray-400"
                />
              </div>
            </div>

            <div className='FlexDivsInfoRevenue1'>

              <div className='FlexDivsInfoRevenue12'>

                <div style={{ background: currentColor }}>
                  <span className='Titititile'> returns  </span>  <br />
                  <span className=' NbNBNbrev'> {ToTal.toFixed(2)}</span>
                </div>
                <div style={{ background: currentColor }}>
                  <span className='Titititile'>   Vat 20%  </span> <br />
                  <span className=' NbNBNbrev'>{(ToTal * 20 / 100).toFixed(2)}</span>
                </div>
                <div style={{ background: currentColor }}>
                  <span className='Titititile'>    Returns - VAT </span>  <br />
                  <span className=' NbNBNbrev'> {(ToTal - (ToTal * 20 / 100)).toFixed(2)} </span>
                </div>

                <div style={{ background: currentColor }}>
                  <span className='Titititile'>  profits 25% </span> <br />
                  <span className=' NbNBNbrev'> {((ToTal - (ToTal * 20 / 100)) * 20 / 100).toFixed(2)}</span>
                </div>
                <div style={{ background: currentColor }}>
                  <span className='Titititile'> PCD courses NB </span> <br />
                  <span className=' NbNBNbrev'>   {Courses}</span>
                </div>

              </div>

              {/* <div className='FlexDivsInfoRevenue123'>

                <div style={{ background: currentColor }}>
                  <span className='Titititile'>  profits 25%  : </span>
                  <span className=' NbNBNbrev'> {((ToTal - (ToTal * 20 / 100)) * 20 / 100).toFixed(2)}</span>
                </div>
                <div style={{ background: currentColor }}>
                  <span className='Titititile'>  Purchased courses NB : </span>
                  <span className=' NbNBNbrev'>   {Courses}</span>
                </div>
              </div> */}






            </div>



            <div className='PurchasePrincipale'>
              <div className='PurchaseContent'>
                <div className='FisrtPurchaseTitleHideAfter PurchasePrincipaleDivs text-gray-900 dark:text-white'>


                  <div> Description</div>
                  <div> Purchase Date</div>
                  <div>Sub Total</div>
                  <div> VAT 20%</div>
                  <div> Total Amount </div>
                  <div> Invoice </div>
                </div>
                {
                  filteredData.map((invoice, index) => (

                    <div key={invoice._id} className='FisrtPurchaseTitleNotHide PurchasePrincipaleDivs'>

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
                          <button style={{ background: currentColor }} className='BTNDetailSpanPurchase' onClick={() => GoToinvoice(invoice.invoice._id)} > Details </button>
                        </span>
                      </div>
                    </div>
                  ))
                }

                {(filteredData.length===0) && <>
                <div className='nothigFilter'> No record was found for this entry</div>
                
                
                </>}
              </div>
            </div>
          </>
        )}
        {(!Array.isArray(data) || data.length === 0) && (!loading) && data && (
          <div className="PurchasePrincipale">
            <p className='VoidePurchAAse' >You don't have any Purchase yet</p>
          </div>
        )}

      </div>
    </>
  );
}

export default Purchase