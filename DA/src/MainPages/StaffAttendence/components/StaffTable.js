import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StaffTable({ staffList, handleMark }) {
  const gridTemplate = "1fr 1fr 1fr 1fr 1fr";



  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        width: "100%",
        maxWidth: "1350px",
        height: "360px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >

      {/* Table Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridTemplate,
          alignItems: "center",
          padding: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          fontWeight: 700,
          border: "1px solid #797979",
          textAlign: "center",
          margin: "16px 16px 8px 16px",
        }}
      >
        <div>#</div>
        <div style={{ textAlign: "left" }}>Staff Name</div>
        <div>Employee Id</div>
        <div>Status</div>
        <div>Mark</div>
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
        <div style={{ display: "flex", flexDirection: "column", }}>
          {staffList.map((emp, index) => (
            <div
              key={emp.id}
              style={{
                display: "grid",
                gridTemplateColumns: gridTemplate,
                alignItems: "center",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                color: "#444",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <div>{index + 1}</div>
              <div style={{ textAlign: "left", fontWeight: 500, color: "#000" }}>
                {emp.name}
              </div>
              <div>{emp.empId}</div>
              <div>{emp.status}</div>
              <div>
                <button
                  onClick={() => handleMark(index, "Present")}
                  style={{
                    padding: "5px 10px",
                    margin: "0 4px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    backgroundColor:
                      emp.status === "Present" ? "#28a745" : "#fff",
                    color: emp.status === "Present" ? "#fff" : "#28a745",
                    border:
                      emp.status === "Present" ? "none" : "1px solid #ccc",
                    cursor: "pointer",
                  }}
                >
                  P
                </button>
                <button
                  onClick={() => handleMark(index, "Absent")}
                  style={{
                    padding: "5px 10px",
                    margin: "0 4px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    backgroundColor:
                      emp.status === "Absent" ? "#dc3545" : "#fff",
                    color: emp.status === "Absent" ? "#fff" : "#dc3545",
                    border:
                      emp.status === "Absent" ? "none" : "1px solid #ccc",
                    cursor: "pointer",
                  }}
                >
                  A
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #ccc",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
  
        <ChevronLeft size={16} style={{ cursor: "pointer", marginRight: 8 }} />
        <span style={{ marginRight: "16px", color: "#333" }}>1/10</span>
        <ChevronRight size={16} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
