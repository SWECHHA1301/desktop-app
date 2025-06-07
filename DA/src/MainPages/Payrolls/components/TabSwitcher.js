import React from "react";

export default function TabSwitcher({ activeTab, setActiveTab }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "16px",
        overflow: "hidden",
        gap: "30px"
      }}
    >
      <button
        onClick={() => setActiveTab("wage")}
        style={{
          width: "601px",
          padding: "10px 0",
          backgroundColor: activeTab === "wage" ? "#3658BF" : "transparent",
          fontWeight: "bold",
          borderRadius: "10px",
          border: "1px solid #3658BF",
          color: activeTab === "wage" ? "#fff" : "#3658BF",
          cursor: "pointer",
        }}
      >
        Wage summary
      </button>
      <button
        onClick={() => setActiveTab("payment")}
        style={{
          width: "601px",
          padding: "10px 0",
          backgroundColor: activeTab === "payment" ? "#3658BF" : "transparent",
          fontWeight: "bold",
          borderRadius: "10px",
          border: "1px solid #3658BF",
          color: activeTab === "payment" ? "#fff" : "#3658BF",
          cursor: "pointer",
        }}
      >
        Payments
      </button>
    </div>
  );
}
