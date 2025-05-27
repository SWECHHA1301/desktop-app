import React from "react";

export default function OtherCharges() {
  return (
    <>
    <div className="ordercharges-section">
      <div className="section-header">Other Charges</div>
      <div className="charge-grid">
        <input placeholder="Shipping Charge" />
        <input placeholder="GST Rate" />
        <input placeholder="Packaging Charge" />
        <input placeholder="GST Rate" />
      </div>
      
    </div>
 <div className="total-amount"><button
  style={{border:'1px solid black',borderRadius:'5px', padding:' 8px 16px 16px 16px',width:'100%',height:'42px',
  }}
 >Total Amount: ₹18000.00</button></div>
 </>
  );
}