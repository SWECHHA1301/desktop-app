import React from 'react'
import { useState } from 'react';
import './ItemCancellation.css'
import {
  ChevronDown,} from "lucide-react";
  

const kotsItem = [
  { number: '1', name: 'Pizza', volume: 1, value: 240 },
  { number: '2', name: 'Item 2', volume: 1, value: 340 },
  { number: '3', name: 'Burger', volume: 1, value: 270 },
  { number: '4', name: 'Item4', volume: 1, value: 140 },

  { number: '5', name: 'Pizza', volume: 1, value: 440 },
  { number: '6', name: 'Item 2', volume: 1, value: 210 },
  { number: '7', name: 'Burger', volume: 1, value: 270 },
  { number: '8', name: 'Item4', volume: 1, value: 150 },
];

const KOT1 = kotsItem.filter(item => ['1', '7', '3', '5'].includes(item.number));


export default function ItemCancellation() {

const [refundType, setRefundType] = useState(null); // 'complete' or 'partial'

const [items, setItems] = useState(kotsItem);
  const [selectedKOTItems, setSelectedKOTItems] = useState([]);


 const handleQtyChange = (number, direction) => {
  setItems((prev) =>
    prev.map((item) => {
      if (item.number !== number) return item;
      const newQty = direction === 'inc' ? item.volume + 1 : Math.max(1, item.volume - 1);
      return { ...item, volume: newQty };
    })
  );
};

const handleKOTClick = (kotName) => {
    if (kotName === 'KOT1') {
      setSelectedKOTItems(KOT1.map(item => item.number));
    }
  };
  return (
    <>
    <div className='cancellation-container'>
      <div className='item-cancellation'>
      <h2>Item Cancellation</h2>
      </div>
      <div className='item-main-container'>

     <div className='table-number'>
      <p style={{fontSize:'16px',fontWeight:'700',lineHeight:'100%',color:'#797979'}}>Table Number</p>
      <p style={{color:'#797979',fontSize:'16px',fontWeight:'700'}}>:</p>
      <button className='AC-btn'>
        <p >
            Non AC
        </p>
         <ChevronDown  color='#797979'/>
      </button>
      <button className='T2-btn'>
        <p>
            T2
        </p>
       <ChevronDown  color='#797979'/>
      </button>
     </div>

     <div className='customer-detail-container'>
     <h2>Customer Details</h2>
     <div className='customer-info'>
      <div className='customer-name'>
        <p>Name</p>
        <p>:</p>
        <p>Airy</p>
      </div>

      <div className='customer-name'>
        <p>Phone No.</p>
        <p>:</p>
        <p>8263200401</p>
      </div>

     </div>
     </div>

     <div className='item-list'>
      <p>Item List</p>
      <p>:</p>
      <button onClick={() => handleKOTClick('KOT1')}>KOT1</button>
      <button>KOT2</button>
      <button>KOT3</button>
     </div>

     <div className='item-cancellation-table'>
      <table>
      <thead>
        <tr className='item-head'>
          <th>S.No.</th>
          <th>Food Name</th>
          <th>Qty</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index)=>(
          <tr key={index}
                  className={`items-in-table ${selectedKOTItems.includes(item.number) ? 'highlight-kot' : ''}`}>
             <td >{item.number}</td>
          <td>{item.name}</td>

          <td><button onClick={() => handleQtyChange(item.number, 'dec')}>-</button>
                <span style={{padding:'0 23px'}}>{item.volume}</span>
                <button onClick={() => handleQtyChange(item.number, 'inc')}>+</button></td>
         
          <td>₹ {item.value * item.volume}</td>
    <td></td>
          </tr>
        ))}
      </tbody>
      </table>
     </div>

     <div className='refund-amount'>
      <div className='refund-head'>
      <h2>Refund Amount</h2>
      {/* <p>480</p> */}
      </div>
<div className='complete-refund'>
  <input
    type='radio'
    id='complete'
    name='refund'
    value='complete'
    checked={refundType === 'complete'}
    onChange={() => setRefundType('complete')}
  />
  
    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
      <p>Complete Refund</p>
      <p>₹ 480</p>
    </div>

</div>




<div className='partial-refund'>
  <input
    type='radio'
    id='partial'
    name='refund'
    value='partial'
    checked={refundType === 'partial'}
    onChange={() => setRefundType('partial')}
  />
  <label htmlFor='partial' className={refundType === 'partial' ? 'selected' : ''}>
    Partial Refund
  </label>
</div>



 
{refundType === 'partial' && (
  <div className='slider-section show'>
     <p > Amount</p>
    <p>:</p>
    <p>₹ 100</p>
  </div>
)}





     </div>
       
   
      </div>
      

      <div className='state-btn'>
        
          <button className='cancel'>
            Cancel
          </button>
          <button className='update'>
            Update KOT
          </button>
        
      </div>

    </div>
    </>
  )
}