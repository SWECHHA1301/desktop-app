import React, { useState } from "react";
import { ChevronDown, ChevronUp} from "lucide-react";

export function InventoryStatus() {
  const [isOpen, setIsOpen] = useState(true);
  const [availability, setAvailability] = useState("InStock");

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px",
        marginTop: "8px",
        borderRadius: "8px",
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
        <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}>
          Inventory
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </span>
      </div>

      {/* Radio Inputs */}
      {isOpen && (
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <input
              type="radio"
              name="availability"
              value="InStock"
              checked={availability === "InStock"}
              onChange={(e) => setAvailability(e.target.value)}
            />
            InStock
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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
      )}
    </div>
  );
}
