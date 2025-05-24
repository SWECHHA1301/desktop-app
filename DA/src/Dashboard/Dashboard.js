import React from 'react'
import './Dashboard.css'
import TotalItem from './Components/TotalBlock/TotalItem'
import SellingItem from './Components/SellingItem/SellingItem'
import PayMethod from './Components/PaymentAndAccount/PayMethod'
export default function Dashboard() {
  return (
    <>
    <div className='dash-board'>
      <div className='Element-container'>

        <div>
      <h2 className='title'>Dashboard</h2>
      </div>

      <div className='total-Items'>
        <TotalItem/>
      </div>

       <div  className='collection-block'>
       <SellingItem/>

       <PayMethod/>
       </div>

      </div>
    </div>
    </>
  )
}
