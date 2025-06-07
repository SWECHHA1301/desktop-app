import React, { useState } from "react";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import TabSwitcher from "./TabSwitcher"; // Make sure this path is correct

const payments = [
  {
    date: "05/14/2025",
    day: "Wednesday,May",
    time: "16:59:00",
    type: "Advance",
    amount: 2000,
  },
  {
    date: "05/14/2025",
    day: "Wednesday,May",
    time: "10:59:00",
    type: "Salary",
    amount: 2000,
  },
  {
    date: "05/14/2025",
    day: "Wednesday,May",
    time: "10:59:00",
    type: "Advance",
    amount: 2000,
  },
  {
    date: "05/14/2025",
    day: "Wednesday,May",
    time: "10:59:00",
    type: "Other",
    amount: 2000,
  },
];

const gridTemplate = "1fr 1.5fr 2fr 1.5fr 1.5fr 1.5fr";

const PaymentTable = () => {
  const [activeTab, setActiveTab] = useState("payment");

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        width: "100%",
        maxWidth: "1358px",
        height: "430px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxSizing: "border-box",
        border: "1px solid #ddd",
      }}
    >
      {/* Tab Switcher */}
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "payment" && (
        <>
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridTemplate,
              alignItems: "center",
              padding: "10px",
              fontWeight: 700,
              textAlign: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              margin: "0 16px 8px 16px",
              border: "1px solid #ccc",
              color: "#797979",
            }}
          >
            <div>No.</div>
            <div>Date</div>
            <div>Day/Month</div>
            <div>Time</div>
            <div>Payment Type</div>
            <div>Amount</div>
          </div>

          {/* Scrollable Body */}
          <div
            style={{
              overflowY: "auto",
              flex: 1,
              margin: "0 16px",
              paddingRight: "6px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {payments.map((p, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: gridTemplate,
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    marginBottom: "8px",
                    fontWeight: "400px",
                  }}
                >
                  <div>{index + 1}.</div>
                  <div>{p.date}</div>
                  <div>{p.day}</div>
                  <div>{p.time}</div>
                  <div>{p.type}</div>
                  <div style={{ fontWeight: "700" }}>
                    ₹{p.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Payment Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px",
            }}
          >
            <button
              style={{
                backgroundColor: "#3658BF",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "none",
                borderRadius: "20px",
                padding: "10px 16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              <PlusCircle size={18} />
              Add new Payment
            </button>
          </div>
        </>
      )}

      {activeTab === "wage" && (
        <div style={{ textAlign: "center", marginTop: 40, color: "#666" }}>
          Wage summary content goes here.
        </div>
      )}
    </div>
  );
};

export default PaymentTable;
