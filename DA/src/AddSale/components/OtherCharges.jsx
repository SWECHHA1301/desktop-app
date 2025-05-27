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
 <div style={{
  display: "flex",
  flexDirection: "row",
  padding: "16px",

 }}><span
  style={{border:'1px solid black',borderRadius:'5px', padding:'16px',width:'809px',height:'42px'}}
 >Total Amount: </span>
 <span >₹ 18000.00</span></div>
 </>
  );
}