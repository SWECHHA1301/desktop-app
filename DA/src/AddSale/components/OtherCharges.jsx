import React from "react";
import {ChevronDown} from "lucide-react";
export default function OtherCharges({ setIsDrawerOpen }) {
  return (
    <>
    <div className="ordercharges-section">
      <div className="section-header"><p>Other Charges</p>
         <ChevronDown color="#939191"/>
      </div>
      <div className="charge-grid">
        <div>
          <label>Shipping Charge</label>
        <input placeholder="Shipping Charge" />
        </div>
        <div>
           <label>GST Rate</label>
        <input placeholder="GST Rate" />
        </div>
        <div>
           <label>Packaging Charge</label>
        <input placeholder="Packaging Charge" />
        </div>
        <div>
           <label>GST Rate</label>
        <input placeholder="GST Rate" />
        </div>
      </div>

       <button className="add-payment-btn" onClick={() => setIsDrawerOpen(true)} style={{maxWidth:'390px'}}>
           <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'16.5px'}}>
            <p className="add-payment-icon"><p>+</p></p>
          <p> Add Payment Type</p></div>
        </button>
      
 </div>
 <div className="total-amount-btn"><button
  style={{border:'1px solid black',borderRadius:'5px', padding:'  16px',width:'100%',height:'42px',
  display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'14px',fontWeight:'400'}}
 ><p>Total Amount:</p> <p>₹18000.00</p></button></div>
 </>
 );
}