import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Details() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ borderBottom: "1px solid #D4DAED" }}>
      {/* Clickable Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          cursor: "pointer",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "500", margin: 0 }}>Details</h3>
        {isOpen ? <ChevronUp size={20} 
        style={{
          color: "#939191"
          }}/> : <ChevronDown size={20} 
          style={{
            color: "#939191"}} />}
      </div>

      {/* Collapsible Content */}
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div
          style={{
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <label
            style={{
              fontSize: "14px",
              marginBottom: "4px",
              color: "#797979",
            }}
          >
            Unit type
          </label>

          <select
            style={{
              backgroundColor: "#E3E6EE",
              border: "none",
              padding: "9px 16px",
              borderRadius: "5px",
              width: "100%",
              maxWidth: "390px",
              fontSize: "12px",
            }}
          >
            <option>Unit</option>
          </select>

          <div style={{ display: "flex", marginLeft: "16px" }}>
            <div style={{ fontSize: "12px", color: "#555" }}>
              <div style={{ marginBottom: "4px", display: "flex", gap: "20px" }}>
                <span style={{ fontWeight: "400", width: "88px" }}>Primary Unit</span>
                <p>:</p>
                <span style={{ color: "black" }}>in unit</span>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <span style={{ fontWeight: "400", width: "88px" }}>Secondary Unit</span>
                <p>:</p>
                <span style={{ color: "black" }}>in unit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          select {
            width: 100% !important;
          }
          div[style*='marginLeft: 16px'] {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
