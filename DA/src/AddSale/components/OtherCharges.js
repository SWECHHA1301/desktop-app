import React from "react";

export default function OtherCharges() {
  return (
    <div className="section">
      <div className="section-header">Other Charges</div>
      <div className="charge-grid">
        <input placeholder="Shipping Charge" />
        <input placeholder="GST Rate" />
        <input placeholder="Packaging Charge" />
        <input placeholder="GST Rate" />
      </div>
      <div className="total-amount">Total Amount: ₹18000.00</div>
    </div>
  );
}