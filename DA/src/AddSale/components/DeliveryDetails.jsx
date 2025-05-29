import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DeliveryDetails() {
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
    <div className="deliverydetails-section">
      <div
        className="section-header"
        onClick={() => setIsExpanded((prev) => !prev)}
        style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <p>Delivery Details</p>
        {isExpanded ? <ChevronUp color="#939191" /> : <ChevronDown color="#939191" />}
      </div>

      <div
        ref={contentRef}
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          maxHeight: maxHeight,
        }}
      >
        <div className="delivery-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="ordernumber">Buyers Order Number</label>
            <input
              id="ordernumber"
              placeholder="Buyers Order Number"
              defaultValue="8456600"
              type="text"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="Despatched">Despatched Through</label>
            <input
              id="Despatched"
              placeholder="Despatched Through"
              defaultValue="Speed Post"
              type="text"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="message">Delivery Note</label>
            <input
              id="message"
              placeholder="Glass,Handle with Care"
              defaultValue="Glass,Handle with Care"
              style={{
                height: "78px",
                color: "black",
                textAlign: "left",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
