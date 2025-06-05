import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PaymentPaid({ setIsDrawerOpen }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("none");

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isExpanded]);

  return (
    <div className="paymentpaid-section">
      {/* Header with collapse toggle */}
      <div
        className="section-header"
        onClick={() => setIsExpanded((prev) => !prev)}
        style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <p>Payment Paid</p>
        {isExpanded ? <ChevronUp color="#939191" /> : <ChevronDown color="#939191" />}
      </div>

      {/* Collapsible content */}
      <div
        ref={contentRef}
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          maxHeight: maxHeight,
        }}
      >
        <div className="payment-grid">
          <div className="payment-row">
            <div>
              <label style={{ color: '#797979', fontSize: "14px", fontWeight: '400' }}>Payment</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                <input placeholder="Cash" defaultValue='Cash' />
                <input placeholder="Card" defaultValue='Card' />
              </div>
            </div>
            <div>
              <label style={{ color: '#797979', fontSize: "14px", fontWeight: '400' }}>Amount</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                <input placeholder="Amount" />
                <input placeholder="Amount" />
              </div>
            </div>
          </div>

          <button className="add-payment-btn" onClick={() => setIsDrawerOpen(true)}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16.5px' }}>
              <div className="add-payment-icon"><p>+</p></div>
              <p>Add Payment Type</p>
            </div>
          </button>
        </div>

        
        
        

      </div>
    </div>
  );
}

