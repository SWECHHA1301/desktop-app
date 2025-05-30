import React, { useState } from "react";
import { ChevronDown, ChevronUp} from "lucide-react";

export function CategorySection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px",
        marginTop: "8px",
      }}
    >
      {/* Title and toggle chevron */}
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
          Category
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
      </div>

      {/* Dropdown field */}
      {isOpen && (
        <div>
          <select
            style={{
              width: "300px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #E0E3EA",
              backgroundColor: "#F1F3F7",
              fontSize: "14px",
              color: "#666",
              appearance: "none",
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg fill=\"gray\" height=\"16\" viewBox=\"0 0 24 24\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
              backgroundSize: "16px",
              marginTop: "8px",
            }}
          >
            <option value="">Category *</option>
            <option value="electronics">Electronics</option>
            <option value="grocery">Grocery</option>
          </select>
        </div>
      )}
    </div>
  );
}
