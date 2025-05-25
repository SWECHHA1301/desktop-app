import React from 'react'
import './PayMethod.css'
import { Calendar } from "lucide-react";
const blockItems=[

    {
     name:'UPI',
     value:'4,200',
     percent:'42%',
     style:{
      color:'#2BAC04',
      
     }
    },

    {
      name:'Card',
     value:'3,100',
     percent:'31%',
     style:{
      color:'#E38417',
      
     }
    },
    {
     name:'Cash',
     value:'2,700',
     percent:'27%',
     style:{
      color:'#FECB00',
      
     }
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
    style:{
      color:'#3658BF'
    }
  },
  {
    name:'Account2',
    transaction:'3,400',
    UPI:'2,500',
    card:'1,500',
    totalsales:'7,400',
    orders:'30',
    style:{
      color:'#3658BF'
    }
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
        <Calendar size={20} color='black'/>
         <p>30 days</p>
        </div>
      </div>

    <div className='breakdown'>
<div className='pay-graph'></div>


<table className='pay-table'>
  
   <thead >
      <tr className='block-Item-head'> <th>Method</th>
       <th>Value()</th>
       <th>Percentage</th>
       </tr>
      </thead>
      <tbody>
    {blockItems.map((item,index) => (
<tr className='table-block' key={index} >
<td style={item.style} >{item.name}</td>
<td>{item.value}</td>
<td>{item.percent}</td>

</tr>))}</tbody>
</table>

    </div>

      </div>

       <div className='Account-manage'>

        <div className='Account-title'>
          <p>Account Management</p>
        </div>
        <table className='Acc-table'>
          <thead>
         <tr className='account-table-head'>
       <th>Counter</th>
       <th>Transaction</th>

       <th style={{display:'flex', flexDirection:'column'}}> <p>UPI</p> <p>( )</p></th>
      <th style={{display:'flex', flexDirection:'column'}}><p>Card</p> <p>( )</p></th>
       <th style={{display:'flex', flexDirection:'column'}}><p>Total Sales</p> <p>( )</p></th>
      <th style={{display:'flex', flexDirection:'column'}}><p>Orders</p> <p>( )</p></th>
      
      </tr></thead>
      <tbody>
      {accountItems.map((item,index)=>(
      <tr className='account-Items' key={index}>
       <td style={item.style}>{item.name}</td>
       <td>{item.transaction}</td>
       <td>{item.UPI}</td>
       <td>{item.card}</td>
       <td>{item.totalsales}</td>
       <td>{item.orders}</td>
      </tr>))}</tbody>
      </table>
      </div>
     </div>
    </>
  )
}
