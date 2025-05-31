import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BarcodeReader } from "../../Common/Icons";

export function InventoryDetails() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px 24px",
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
          Inventory Detail
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>
         {isOpen ? <ChevronDown style={{ color: "#939191" }} size={20} /> : <ChevronUp style={{ color: "#939191" }} size={20} />}
        </span>
      </div>

      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          {/* Product Price */}
          <div>
            <label style={labelStyle}>Product Price *</label>
            <input type="text" placeholder="Product Price *" style={inputStyle} />
          </div>

          {/* Discount Percent */}
          <div>
            <label style={labelStyle}>Discount Percent</label>
            <input type="text" placeholder="Discount Percent" style={inputStyle} />
          </div>

          {/* Barcode row with Assign Code inside input and BarcodeReader icon outside */}
          <div>
            <label style={labelStyle}>Barcode</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div style={{ position: "relative", width: "321px" }}>
                <input
                  type="text"
                  defaultValue="84562084566051"
                  style={{ ...inputStyle, paddingRight: "80px" }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "14px",
                    color: "#3658BF",
                    fontWeight: "500",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Assign Code
                </span>
              </div>
              <span style={{ fontSize: "18px", color: "#2B50EC" }}>
                <BarcodeReader />
              </span>
            </div>
          </div>

          {/* Stock + Min Stock Quantity */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <label style={labelStyle}>Stock Quantity</label>
              <input type="number" defaultValue="20" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Min Stock Quantity</label>
              <input type="number" defaultValue="20" style={inputStyleShort} />
            </div>
          </div>
        </div>
      )}

      {/* Media query for responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          input {
            width: 100% !important;
          }

          div[style*="display: flex"][style*="gap: 20px"] {
            flex-direction: column !important;
          }

          div[style*="position: relative"] {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

// Your original styles
const labelStyle = {
  fontSize: "13px",
  color: "#797979",
  display: "block",
  marginBottom: "4px",
};

const inputStyle = {
  width: "321px",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "12px",
  height: "27px",
  color: "black",
  backgroundColor: "#E3E6EE",
};

const inputStyleShort = {
  width: "301px",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "12px",
  height: "27px",
  color: "black",
  backgroundColor: "#E3E6EE",
};
