import React, { useState } from "react";
import { ChevronDown, ChevronRight} from "lucide-react";

export function TaxesSection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px 24px",
        // marginTop: "8px",
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
        <h3 style={{ fontSize: "16px", fontWeight: "600", }}>
          Taxes
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>
            {isOpen ? <ChevronDown style={{ color: "#939191" }} /> : <ChevronRight style={{ color: "#939191" }} />}
        </span>
      </div>

      {/* Inputs */}
      {isOpen && (
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" ,marginTop:'24px'}}>
          {/* GST (HSN/SAC) */}
          <div>
            <p style={{fontSize:'14px',fontWeight:'400',color:'#797979',marginBottom:'4px'}}>GST</p>
          <select
            style={{
              width:'321px',
              height:'27px',
              backgroundColor: "#E3E6EE",
           
              padding:' 0 16px',
              borderRadius: "5px",
            border: "1px solid #ccc ",
             fontSize: "12px",
              color: "#666",
              appearance: "none",
            }}
          >
            <option>HSN/SAC</option>
            <option>HSN 1001</option>
            <option>SAC 9988</option>
          </select>
</div>
          {/* GST Rate */}
<div>
            <p style={{fontSize:'14px',fontWeight:'400',color:'#797979',marginBottom:'4px'}}>GST Rate</p>
          <select
            style={{
              width:'301px',
              height:'27px',
              backgroundColor: "#E3E6EE",
            
              padding:' 0 16px',
              borderRadius: "5px",
            border: "1px solid #ccc ",
             fontSize: "12px",
              color: "#666",
              appearance: "none",
            }}
          >
            <option>GST @ 0.00%</option>
            <option>GST @ 5%</option>
            <option>GST @ 12%</option>
            <option>GST @ 18%</option>
          </select>
          </div>
        </div>
      )}
    </div>
  );
}
