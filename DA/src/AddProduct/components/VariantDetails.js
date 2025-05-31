import React, { useState } from "react";
import { ChevronDown, ChevronUp, PencilLine } from "lucide-react";

export default function VariantDetails({ openDrawer }) {
  const [isOpen, setIsOpen] = useState(true);
  const [colors, setColors] = useState(["Red", "Blue"]); // Color state

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  // Remove color handler
  const removeColor = (colorToRemove) => {
    setColors(colors.filter((color) => color !== colorToRemove));
  };

  return (
    <div
      style={{
        borderBottom: "1px solid #D4DAED",
        padding: "16px 24px",
      }}
    >
      {/* Title Row */}
      <div
        onClick={toggleSection}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>Variant Details</h3>
        <span style={{ fontSize: "18px", userSelect: "none" }}>
          {isOpen ? <ChevronDown style={{ color: "#939191" }} /> : <ChevronUp style={{ color: "#939191" }} />}
        </span>
      </div>

      {isOpen && (
        <>
          {/* Has Variant */}
          <label
            style={{
              fontSize: "14px",
              marginBottom: "4px",
              marginTop: "24px",
              display: "block",
              color: "#797979",
            }}
          >
            Has Variant
          </label>
          <div style={{ display: "flex", gap: "20px", marginBottom: "16px", fontSize: "16px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <input type="radio" name="variant" /> Yes
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <input type="radio" name="variant" /> No
            </label>
          </div>

          {/* Color Box */}
          <div
            style={{
              border: "2px solid #3658BF",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "12px",
              width: "100%",
              maxWidth: "812px",
              position: "relative",
              height: "auto",
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

            <div style={{ display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
              {colors.map((color) => (
                <span
                  key={color}
                  style={{
                    border: "1px solid #3658BF",
                    borderRadius: "20px",
                    padding: "4px 12px",
                    fontSize: "13px",
                    color: "#2B50EC",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "#D4DAED",
                    cursor: "default",
                  }}
                >
                  {color}
                  <span
                    onClick={() => removeColor(color)}
                    style={{
                      fontWeight: "bold",
                      color: "#797979",
                      cursor: "pointer",
                    }}
                  >
                    ✖
                  </span>
                </span>
              ))}
            </div>

            {/* Edit/Clear icons */}
            <div style={{ position: "absolute", top: "8px", right: "10px", display: "flex", gap: "10px" }}>
              <span style={{ cursor: "pointer" }}>
                <PencilLine style={{ color: "#797979" }} />
              </span>
              <span style={{ cursor: "pointer", color: "#3658BF" }}>✖</span>
            </div>
          </div>

          {/* Add Variant Button */}
          <button
            onClick={openDrawer}
            style={{
              border: "1px solid #3658BF",
              color: "#3658BF",
              backgroundColor: "transparent",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              width: "100%",
              maxWidth: "812px",
              height: "30px",
            }}
          >
            <span
              style={{
                fontWeight: "700",
                fontSize: "12px",
                display: "flex",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50px",
                  border: "2px solid #3658BF",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "2px",
                }}
              >
                <p>＋</p>
              </p>
              <p>Add Variant Attributes</p>
            </span>
          </button>
        </>
      )}
    </div>
  );
}

