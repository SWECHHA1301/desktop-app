import React from "react";
import { AddPlus } from "../../Common/Icons";

export default function PaymentPaid() {
  return (
    <div className=" paymentpaid-section">
      <div className="section-header">Payment Paid</div>
      
     
      <div className="payment-grid">
        {/* <div style={{display:'flex',justifyContent:'space-between' ,maxWidth:'500px'}}>
        <p>Payment</p>
        <p>Amount</p></div> */}
        <div className="payment-row">
         <div>
          <label style={{color:'#797979',fontSize:"14px",
            fontWeight:'400'
          }}>Payment</label>

         <div style={{display:'flex',flexDirection:'column',gap:'17px'}}>
        <input placeholder="Cash" />
       <input placeholder="Card" /></div></div>

       <div>
<label style={{color:'#797979',fontSize:"14px",
            fontWeight:'400' }}>
              Amount</label>
        <div style={{display:'flex',flexDirection:'column',gap:'17px'}}>
        <input placeholder="Amount" />
        <input placeholder="Amount" /></div></div>
        </div>
        <button className="add-payment-btn"><AddPlus /> Add Payment Type</button>
      </div>
    </div>
  );
}