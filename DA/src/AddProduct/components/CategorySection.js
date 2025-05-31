import React, { useState } from "react";
import { ChevronDown, ChevronUp} from "lucide-react";

export function CategorySection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px 24px",
        // marginTop: "8px",
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
        <h3 style={{ fontSize: "16px", fontWeight: "600",}}>
          Category
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>  {isOpen ? <ChevronDown style={{ color: "#939191" }} size={20} /> : <ChevronUp style={{ color: "#939191" }} size={20} />}</span>
      </div>

      {/* Dropdown field */}
      {isOpen && (
        <div style={{marginTop:'24px',}}>
          <select
            style={{
              width: "321px",
              padding:'0 16px',
              borderRadius: "5px",
              border: "1px solid #ccc ",
              backgroundColor: "#E3E6EE",
              fontSize: "12px",
              color: "#797979",
height:'27px',
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
