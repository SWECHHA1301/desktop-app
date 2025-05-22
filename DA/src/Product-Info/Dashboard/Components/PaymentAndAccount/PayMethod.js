import React from 'react'
import './PayMethod.css'

const blockItems=[
    {
     name:'UPI',
     value:'4,200',
     percent:'42%'
    },

    {
      name:'Card',
     value:'3,100',
     percent:'31%'
    },
    {
     name:'Cash',
     value:'2,700',
     percent:'27%'
    },
    
]

const accountItems=[
  {
    name:'Account1',
    transaction:'5,600',
    UPI:'3,200',
    card:'2,100',
    totalsales:'10,900',
    orders:'43',
  },
  {
    name:'Account2',
    transaction:'3,400',
    UPI:'2,500',
    card:'1,500',
    totalsales:'7,400',
    orders:'30',
  },
]
export default function PayMethod() {
  return (
    <>
     <div className='Pay-Info'>
      <div className='paymentMethod'>
        <div className='pay-method'>

        <p>Payment Method Breakdown</p>
        <div className='Days'>
         <p>30 days</p>
        </div>
      </div>

    <div className='breakdown'>
<div className='pay-graph'></div>


<div className='pay-table'>
   <div className='block-Item-head'>
       <p>Product Name</p>
       <p>Quantity Sold</p>
       <p> Total Revenue</p>
      </div>
    {blockItems.map((item,index) => (
<div className='table-block' key={index}>
<p>{item.name}</p>
<p>{item.value}</p>
<p>{item.percent}</p>

</div>))}
</div>

    </div>

      </div>

       <div className='Account-manage'>
        <div className='Account-title'>
          <p>Account Management</p>
        </div>
         <div className='account-table-head'>
       <p>Counter</p>
       <p>Transaction</p>

       <div><p>UPI</p> <p>( )</p></div>
      <div><p>Card</p> <p>( )</p></div>
       <div><p>Total Sales</p> <p>( )</p></div>
      <div><p>Orders</p> <p>( )</p></div>
      
      </div>
      {accountItems.map((item,index)=>(
      <div className='account-Items' key={index}>
       <p>{item.name}</p>
       <p>{item.transaction}</p>
       <p>{item.UPI}</p>
       <p>{item.card}</p>
       <p>{item.totalsales}</p>
       <p>{item.orders}</p>
      </div>))}
      </div>
     </div>
    </>
  )
}