import React from 'react'
import { useState } from "react";
import {
  Hash,
  Plus,
   ChevronRight,
  PlusCircle,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";



export default function PaymentSummary() {
    const [showSummary, setShowSummary] = useState(false);
  return (
   <>
  
        <div className="payment-section">

<div className="receipt-top-actions">
  <span className="receipt-top-left">Add</span>
  <div className="receipt-top-right">
    <span className="action-link">Discount</span>
    <span className="action-link">Coupon Code</span>
    <span className="action-link">Note</span>
  </div>
</div>


  <div className="receipt-summary-drawer">
    <div
      className="summary-toggle"
      onClick={() => setShowSummary((prev) => !prev)}
    >
      <span>Payment Summary</span>
      {showSummary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </div>

    {showSummary && (
      <div className="summary-details">
        <div className="summary-row muted">
          <span>SubTotal</span>
          {/* <span className="st">₹{total.toFixed(2)}</span> */}
        </div>
        <div className="summary-row muted">
          <span>Taxes</span>
          <span className="st">₹0.00</span>
        </div>
        <div className="summary-row muted">
          <span>Discount</span>
          <span className="st">₹0.00</span>
        </div>
      </div>
    )}

    <div className="summary-total always-visible">
      <span>Total</span>
      {/* <span>₹{total.toFixed(2)}</span> */}
    </div>
  </div>

  <div className="payment-buttons">
    <div className="receipt-actions">
      <button className="btn add-btn">
        Add <span>＋</span>
      </button>
      <button className="btn abort-btn">
        Abort <span>✖</span>
      </button>
    </div>
    <div className="receipt-actions">
      <button className="btn kot-btns">
        KOT <span>⏸</span>
      </button>
      <button className="btn proceed-btn">
        Proceed <span>→</span>
      </button>
    </div>
  </div>
</div>

   </>
  )
}
