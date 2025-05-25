import React, { useState } from "react";
import { Calendar,ChevronDown } from "lucide-react"; // Optional, you can use any icon lib

export default function NativeDateRangePicker() {
  const [startDate, setStartDate] = useState("2024-11-05");
  const [endDate, setEndDate] = useState("2025-01-30");

  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return "";
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(dateStr).toLocaleDateString("en-US", options).replace(",", "");
  };

  return (
    <div style={styles.wrapper}>
      <div style={{display:'flex',alignItems:'center',gap:'8.5px'}}>
      <Calendar size={16} style={styles.icon} />
      <span style={styles.text}>
        {formatDisplayDate(startDate)} - {formatDisplayDate(endDate)}
      </span>
      <div style={styles.inputs}>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={styles.hiddenInput}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={styles.hiddenInput}
        />
      </div>
      </div>
      <span><ChevronDown /></span>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
     justifyContent: 'space-between',
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    border: "1px solid #616161",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: "14px",
    position: "relative",
    cursor: "pointer",
    width: '100%',
    maxWidth:'270px',
    height: '40px'
  },
  icon: {
    color: "#4b5563",
  },
  text: {
    color: "#111827",
  },
  chevron: {
    fontSize: "12px",
    color: "#6b7280",
    marginLeft: "60px",
  },
  inputs: {
    position: "absolute",
    inset: 0,
    opacity: 0,
    pointerEvents: "all",
    display: "flex",
  },
  hiddenInput: {
    width: "50%",
    height: "100%",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
}
