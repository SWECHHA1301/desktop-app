import React from "react";

export default function PaymentPaid() {
  return (
    <div className=" paymentpaid-section">
      <div className="section-header">Payment Paid</div>
      
     
      <div className="payment-grid">
        <div style={{display:'flex',justifyContents:'space-between'}}>
        <p>Payment</p>
        <p>Amount</p></div>
        <div className="payment-row">
         
        <input placeholder="Cash" />
       
        <input placeholder="Amount" />
          
        <input placeholder="Card" />
        
        <input placeholder="Amount" />
        </div>
        <button className="add-payment-btn">+ Add Payment Type</button>
      </div>
    </div>
  );
}