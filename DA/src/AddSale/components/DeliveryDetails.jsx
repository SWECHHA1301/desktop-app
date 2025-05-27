import React from "react";
import {ChevronDown} from "lucide-react";
export default function DeliveryDetails() {
  return (
    <div className="deliverydetails-section">
      <div className="section-header">
        <p>Delivery Details</p>
         <ChevronDown color="#939191"/>
          </div>
          
      <div className="delivery-grid">

        <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
          <label for='ordernumber'>Buyers Order Number</label>
        <input id='ordernumber' placeholder="Buyers Order Number" defaultValue="8456600" type=""/></div>

        <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
          <label for='Despatched'>Despatched Through</label>
        <input  id='Despatched' placeholder="Despatched Through" defaultValue="Speed Post" type="text"/></div>
       
        <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
         <label for="message">Delivery Note</label>
          <input
          style={{height:'78px' ,color:'black', textAlign:'left'
          }}
           id="message" defaultValue="Glass,Handle with Care" placeholder="Glass,Handle with Care"></input>

        {/* <input placeholder="Delivery Note" defaultValue="Glass,Handle with Care" type="text"/> */}
        </div>
      </div>
</div>
  );
}