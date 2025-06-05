import { useState, useRef, useEffect } from "react";
import { Avatar, Pencile } from "../../Common/Icons";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CustomerInfo() {
  const [isExpanded, setIsExpanded] = useState(true);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("none");

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isExpanded]);

  return (
    <div className="customersection">
      {/* Section Header with toggle icon */}
      <div
        className="section-header"
        onClick={() => setIsExpanded((prev) => !prev)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Customer Info</p>
        {isExpanded ? <ChevronUp color="#939191" /> : <ChevronDown color="#939191" />}
      </div>

      {/* Collapsible Content */}
      <div
        ref={contentRef}
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          maxHeight: maxHeight,
        }}
      >
        <div className="customer-box">
          <span
            style={{
              display: "flex",
              justifyContent: "row",
              gap: "16px",
              alignItems: "center",
              color: "#939191",
              fontWeight: "700",
            }}
          >
            <Avatar /> Customer
          </span>
          <button
            style={{
              display: "flex",
              justifyContent: "row",
              gap: "8px",
              border: "2px solid #797979",
              alignItems: "center",
              borderRadius: "10px",
              padding: "12.5px 16px",
              cursor: "pointer",
              color: "#939191",
            }}
          >
            <p>Edit</p> <Pencile />
          </button>
        </div>
      </div>
    </div>
  );
}
