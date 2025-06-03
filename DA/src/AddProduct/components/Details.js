import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

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
        {isOpen ? (
          <ChevronDown style={{ color: "#939191" }} />
        ) : (
          <ChevronRight style={{ color: "#939191" }} />
        )}
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
          <label style={{ fontSize: "14px", color: "#797979" }}>Unit type</label>

          <div style={{ display: "flex", flexDirection: "row", gap: "8px", flexWrap: "wrap" }}>
            {/* Custom styled select with icon */}
            <div className="select-wrapper">
              <select className="custom-select">
                <option>Primary Unit</option>
              </select>
              <ChevronDown className="select-icon" size={16} />
            </div>

            <div className="select-wrapper">
              <select className="custom-select">
                <option>Secondary Unit</option>
              </select>
              <ChevronDown className="select-icon" size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .select-wrapper {
          position: relative;
          width: 100%;
          max-width: 390px;
        }

        .custom-select {
          appearance: none;
          width: 100%;
          background-color: #e3e6ee;
          border: 1px solid #ccc;
          padding: 9px 40px 9px 16px;
          border-radius: 5px;
          font-size: 12px;
          color: #333;
        }

        .select-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #666;
        }

        @media (max-width: 768px) {
          .select-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
