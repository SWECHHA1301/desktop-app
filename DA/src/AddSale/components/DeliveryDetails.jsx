import React from "react";

export default function DeliveryDetails() {
  return (
    <div className="section">
      <div className="section-header" style={{
        marginTop: "40px",
      }}>Delivery Details</div>
      <div className="delivery-grid"
       style={{
        display: "flex",
        flexDirection: "column",
       }}>
        <span >Buyers Order Number</span>
        <input placeholder="Buyers Order Number" defaultValue="8456600" />
        <span >Buyers Order Number</span>
        <input placeholder="Despatched Through" defaultValue="Speed Post" />
        <span >Buyers Order Number</span>
        <textarea id="message" name="message" rows="3" cols="40" placeholder="Type your message here..."
        
      style={{
        backgroundColor: "#E3E6EE",
      }}></textarea>
      </div>
    </div>
  );
}