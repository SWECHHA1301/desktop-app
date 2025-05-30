import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function VariantDetails({ openDrawer }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        borderTop: "1px solid #D4DAED",
        borderBottom: "1px solid #D4DAED",
        padding: "16px",
        marginTop: "8px",
      }}
    >
      {/* Title Row with Chevron */}
      <div
        onClick={toggleSection}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}>
          Variant Details
        </h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </span>
      </div>

      {/* Collapsible Section */}
      {isOpen && (
        <>
          <label style={{ fontSize: "14px", marginBottom: "6px", display: "block" }}>
            Has Variant
          </label>
          <div style={{ display: "flex", gap: "20px", marginBottom: "16px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <input type="radio" name="variant" /> Yes
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <input type="radio" name="variant" /> No
            </label>
          </div>

          <div
            style={{
              border: "2px solid #3658BF",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "12px",
              width: "100%",
              maxWidth: "812px",
              position: "relative",
              height: "99px",
              padding: "16px 24px"
            }}
          >
            <label
              style={{
                fontSize: "13px",
                color: "#888",
                background: "#fff",
                padding: "0 4px",
              }}
            >
              Color
            </label>

            <div style={{ display: "flex", gap: "8px", marginTop: "10px", cursor: "pointer"}}>
              <span
                style={{
                  border: "1px solid #3658BF",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  fontSize: "13px",
                  color: "#2B50EC",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Red <span style={{ fontWeight: "bold" }}>x</span>
              </span>

              <span
                style={{
                  border: "1px solid #3658BF",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  fontSize: "13px",
                  color: "#2B50EC",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Blue <span style={{ fontWeight: "bold" }}>x</span>
              </span>
            </div>

            {/* Edit and Clear icons (for UI look) */}
            <div style={{ position: "absolute", top: "8px", right: "10px", display: "flex", gap: "10px" }}>
              <span style={{ cursor: "pointer" }}>✎</span>
              <span style={{ cursor: "pointer" }}>✖</span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={openDrawer}
            style={{
              border: "1px solid #3658BF",
              color: "#2B50EC",
              backgroundColor: "transparent",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              width: "100%",
              maxWidth: "812px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>＋</span>
            Add Variant Attributes
          </button>
        </>
      )}
    </div>
  );
}
