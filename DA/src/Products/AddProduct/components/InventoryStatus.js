import React, { useState } from "react";
import { ChevronDown, ChevronRight} from "lucide-react";

export function InventoryStatus() {
  const [isOpen, setIsOpen] = useState(true);
  const [availability, setAvailability] = useState("InStock");

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px 24px",
      
      }}
    >
      {/* Header with chevron */}
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
          Inventory
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>
           {isOpen ? <ChevronDown style={{ color: "#939191" }}/> : <ChevronRight style={{ color: "#939191" }} />}
        </span>
      </div>

      {/* Radio Inputs */}
      {isOpen && (
        
        <div style={{ display: "flex", flexDirection:'column', marginTop:'24px'}}>
          <div style={{color:'#797979',fontSize:'14px',fontWeight:'400'}}><p>Availability</p></div>
          <div style={{display:'flex', gap:'24px'}}>
          <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize:'16px',fontWeight:'400' }}>
            <input
              type="radio"
              name="availability"
              value="InStock"
              checked={availability === "InStock"}
              onChange={(e) => setAvailability(e.target.value)}
            />
            
            InStock
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "6px" ,fontSize:'16px',fontWeight:'400'}}>
            <input
              type="radio"
              name="availability"
              value="OutOfStock"
              checked={availability === "OutOfStock"}
              onChange={(e) => setAvailability(e.target.value)}
            />
            Out Of Stock
          </label>
          </div>
        </div>
      )}
    </div>
  );
}
