import React from 'react'
import './SellingItem.css'

const Items=[
    {
     name:' chesse pizza',
     Volume:'25',
     price:'2400'
    },

    {
     name:' Product Name',
     Volume:'Quantity sold',
     price:'2000'
    },
    {
     name:' Product Name',
     Volume:'Quantity sold',
     price:'1800'
    },
       {
     name:' Product Name',
     Volume:'Quantity sold',
     price:'1000'
    },
       {
     name:' Product Name',
     Volume:'Quantity sold',
     price:'550'
    },
]
export default function SellingItem() {
  return (
    <>
    <div className='Sale-Info'>

     <div className='Most-sale'>

      <div className='head-title'>
        <p>Most Selling Items</p>
      </div>
 <div className='Item-name-head'>
       <p>Product Name</p>
       <p>Quantity Sold</p>
       <p> Total Revenue</p>
      </div>
      
       <div style={{ marginBottom: '20px'}}>
       
        {Items.map((item,index)=>(
       <div className='Item-info' key={index}>
    
        <p>{item.name}</p>
         <p>{item.Volume}</p>
         
          <p>{item.price}</p>
       </div>))}
       </div>
     </div>

     <div className='Most-sale-graph'>
      <div className='head-title'>
        <p>Most Selling Items</p>
      </div>
      <div className='graph-container'>
      <div className='graph'>
       
      </div></div>
     </div>

     </div>

    </>
  )
}
