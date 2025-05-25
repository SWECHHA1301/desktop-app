import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const PaymentSection = ({ total, showSummary, setShowSummary }) => {
  return (
    <div
      className="payment-section"
      style={{
        borderTopWidth: 5,
        borderColor: "#3658BF",
        borderRadius: 10,
      }}
    >
      <div className="receipt-summary-drawer">
        <div className="summary-toggle" onClick={() => setShowSummary((prev) => !prev)}>
          <span>Payment Summary</span>
          {showSummary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {showSummary && (
          <div className="summary-details">
            <div className="summary-row muted">
              <span>SubTotal</span>
              <span className="st">₹{total.toFixed(2)}</span>
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
          <span>₹{total.toFixed(2)}</span>
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
          <button className="btn kot-btn">
            KOT <span>⏸</span>
          </button>
          <button className="btn proceed-btn">
            Proceed <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
