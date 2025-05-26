import React from "react";

export default function PaymentPaid() {
  return (
    <div className="section">
      <div className="section-header">Payment Paid</div>
      <div className="payment-grid">
        <div className="payment-row">
          <div>Cash</div>
          <input placeholder="₹18000.00" />
        </div>
        <div className="payment-row">
          <div>Card</div>
          <input />
        </div>
        <button className="add-payment-btn">+ Add Payment Type</button>
      </div>
    </div>
  );
}