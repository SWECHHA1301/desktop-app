import React from "react";

export default function DeliveryDetails() {
  return (
    <div className="deliverydetails-section">
      <div className="section-header">Delivery Details</div>
      <div className="delivery-grid">
        <input placeholder="Buyers Order Number" defaultValue="8456600" />
        <input placeholder="Despatched Through" defaultValue="Speed Post" />
        <input placeholder="Delivery Note" defaultValue="Glass,Handle with Care" />
      </div>
    </div>
  );
}