import React, { useState } from "react";
import { ChevronDown, ChevronUp} from "lucide-react";
import { BarcodeReader } from "../../Common/Icons";

export function InventoryDetails() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px",
        marginTop: "8px",
      }}
    >
      {/* Title row with chevron */}
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
          Inventory Detail
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
      </div>

      {isOpen && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Product Price */}
          <div>
            <label
              style={{
                fontSize: "13px",
                color: "#666",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Product Price *
            </label>
            <input
              type="text"
              placeholder="Product Price *"
              style={{
                width: "300px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Discount Percent */}
          <div>
            <label
              style={{
                fontSize: "13px",
                color: "#666",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Discount Percent
            </label>
            <input
              type="text"
              placeholder="Discount Percent"
              style={{
                width: "300px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Barcode row with assign + icon */}
          <div>
            <label
              style={{
                fontSize: "13px",
                color: "#666",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Barcode
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <input
                type="text"
                defaultValue="84562084566051"
                style={{
                  width: "300px",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <span
                style={{
                  color: "#2B50EC",
                  fontSize: "14px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Assign Code
              </span>
              <span style={{ fontSize: "18px", color: "#2B50EC" }}><BarcodeReader/></span>
            </div>
          </div>

          {/* Stock + Min Stock Quantity side-by-side */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <label
                style={{
                  fontSize: "13px",
                  color: "#666",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Stock Quantity
              </label>
              <input
                type="number"
                defaultValue="20"
                style={{
                  width: "321px",
                  height: "27px",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: "13px",
                  color: "#666",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Min Stock Quantity
              </label>
              <input
                type="number"
                defaultValue="20"
                style={{
                  width: "321px",
                  height: "27px",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
