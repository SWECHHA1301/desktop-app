import React from "react";

export default function AttendanceSummary({ total, present, absent }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 24px",
        backgroundColor: "#FFF",
        borderRadius: "8px",
        fontWeight: 400,
        marginBottom: "12px",
        border: "1px solid #3658BF",
        fontSize: 16,
      }}
    >
      <span style={{ color: "#939191" }}>
        Total Staff : <span style={{ color: "green" }}>{total}</span>
      </span>
      <span style={{ color: "#939191" }}>Present : {present}</span>
      <span style={{ color: "#939191", marginRight: "20px" }}>
        Absent : {absent}
      </span>
    </div>
  );
}
