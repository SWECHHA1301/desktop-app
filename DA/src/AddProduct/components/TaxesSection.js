import React, { useState } from "react";
import { ChevronDown, ChevronUp} from "lucide-react";

export function TaxesSection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px",
        marginTop: "8px",
      }}
    >
      {/* Header with toggle chevron */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}>
          Taxes
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </span>
      </div>

      {/* Inputs */}
      {isOpen && (
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {/* GST (HSN/SAC) */}
          <select
            style={{
              flex: "1",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #E0E3EA",
              backgroundColor: "#F1F3F7",
              fontSize: "14px",
              color: "#666",
              appearance: "none",
            }}
          >
            <option>HSN/SAC</option>
            <option>HSN 1001</option>
            <option>SAC 9988</option>
          </select>

          {/* GST Rate */}
          <select
            style={{
              flex: "1",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #E0E3EA",
              backgroundColor: "#F1F3F7",
              fontSize: "14px",
              color: "#666",
            }}
          >
            <option>GST @ 0.00%</option>
            <option>GST @ 5%</option>
            <option>GST @ 12%</option>
            <option>GST @ 18%</option>
          </select>
        </div>
      )}
    </div>
  );
}
