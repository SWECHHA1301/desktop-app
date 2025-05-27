import React from "react";

export default function DeliveryDetails() {
  const inputStyle = {
    background: "#e8eafc",
    border: "none",
    borderRadius: "8px",
    padding: "10px 12px",
    fontSize: "14px",
    width: "100%",
    marginTop: "4px",
    marginBottom: "16px",
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h3 style={{ marginBottom: "1rem" }}>Delivery Details</h3>

      <div>
        <label style={{ color: "#6b6b6b", fontSize: "14px" }}>
          Buyers Order Number
        </label>
        <input type="text" value="8456600" style={inputStyle} readOnly />
      </div>

      <div>
        <label style={{ color: "#6b6b6b", fontSize: "14px" }}>
          Despatched Through
        </label>
        <input type="text" value="Speed Post" style={inputStyle} readOnly />
      </div>

      <div>
        <label style={{ color: "#6b6b6b", fontSize: "14px" }}>
          Delivery Note
        </label>
        <textarea
          value="Glass,Handle with Care"
          style={{
            ...inputStyle,
            height: "78px",
            resize: "none",
          }}
          
        />
      </div>
    </div>
  );
}
