import React from "react";
import { PlusCircle, Printer, Eye, ClipboardList } from "lucide-react";

const tables = [
  {
    type: "AC",
    rows: [
      [
        { id: "t1", time: "7 Min", price: 769, status: "printed" },
        { id: "t2", time: "10 Min", price: 975, status: "printed" },
        { id: "t3" }, { id: "t4" },
        { id: "t5", time: "7 Min", price: 769, status: "running KOT" },
        { id: "t6" }, { id: "t7" }, { id: "t8" }, { id: "t9" }, { id: "t10" },
        { id: "t11", time: "7 Min", price: 769, status: "running KOT" }
      ],
      [
        { id: "f1", time: "7 Min", price: 769, status: "printed" },
        { id: "f2", time: "10 Min", price: 975, status: "printed" },
        { id: "f3" }, { id: "f4" },
        { id: "f5", time: "7 Min", price: 769, status: "running KOT" },
        { id: "f6" }, { id: "f7" }, { id: "f8" }, { id: "f9" }, { id: "f10" },
        { id: "f11", time: "7 Min", price: 769, status: "running KOT" }
      ]
    ]
  },
  {
    type: "NON AC",
    rows: [
      [
        { id: "t1", time: "7 Min", price: 769, status: "printed" },
        { id: "t2", time: "10 Min", price: 975, status: "printed" },
        { id: "t3" }, { id: "t4" },
        { id: "t5", time: "7 Min", price: 769, status: "running KOT" },
        { id: "t6" }, { id: "t7" }, { id: "t8" }, { id: "t9" }, { id: "t10" },
        { id: "t11", time: "7 Min", price: 769, status: "running KOT" }
      ],
      [
        { id: "f1", time: "7 Min", price: 769, status: "printed" },
        { id: "f2", time: "10 Min", price: 975, status: "printed" },
        { id: "f3" }, { id: "f4" },
        { id: "f5", time: "7 Min", price: 769, status: "running KOT" },
        { id: "f6" }, { id: "f7" }, { id: "f8" }, { id: "f9" }, { id: "f10" },
        { id: "f11", time: "7 Min", price: 769, status: "running KOT" }
      ]
    ]
  }
];

const TableDashboard = () => (
  <div className="dashboard-container">
    <style>{`
      .dashboard-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
      }

      .top-controls {
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        flex-shrink: 0;
        background: #e2e8f0;
      }

      .buttons {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }

      .action-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #3b82f6;
        color: white;
        padding: 10px 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        white-space: nowrap;
        height: 30px;
        width: 204px;
      }

      .legend {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        font-size: 14px;
        align-items: center;
      }

      .legend div {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .circle {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }

      .gray   { background-color: #939393; }
      .green  { background-color: #98FA7A; }
      .blue   { background-color: #02E6FF; }
      .orange { background-color: #F9DF7A; }

      /* Mobile responsiveness */
      @media (max-width: 768px) {
        .top-controls {
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          padding: 10px;
        }
        .buttons       { flex-direction: column; width: 100%; }
        .action-btn    { width: 100%; justify-content: center; font-size: 16px; }
        .legend        { width: 100%; gap: 10px; font-size: 14px; }
        .legend div    { width: 48%; }
        .icons         { flex-wrap: wrap; justify-content: center; gap: 4px; }
        .icon-button   { width: 28px; height: 28px; padding: 2px; font-size: 12px; overflow-y: scroll; }
        .table-box     { font-size: 12px; padding: 6px 4px; }
        .table-row     { overflow-x: auto; overflow-y: hidden; display: flex; flex-wrap: nowrap; }
      }

      .sections-wrapper {
        flex: 1;
        overflow-y: auto;
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        box-sizing: border-box;
      }

      .section-card {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.05);
      }

      .section-card h3 {
        margin-top: 0;
        font-size: 18px;
        font-weight: 700;
      }

      .section-card h4 {
        margin-top: 10px;
      }

      .row-label {
        margin: 10px 0 5px;
        font-weight: 500;
      }

      .table-row {
        display: flex;
        gap: 10px;
        flex-wrap: nowrap;
        width: 100%;
        box-sizing: border-box;
        max-width: 100%;
        margin-bottom: 40px;
      }

      .table-box {
        flex: 1;
        width: 100px;
        height: 100px;
        background-color: #d1d5db;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: 1px dashed black;
        min-width: 100px;
        position: relative;
      }

      .table-box.printed { background-color: #98FA7A; }
      .table-box.kot     { background-color: #F9DF7A; }

      .empty-box {
        opacity: 0.6;
        justify-content: center;
        align-items: center;
      }

      /* ✅ No absolute here, icons are flex-placed */
      .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        bottom: -10px;
        position: absolute;
        flex-wrap: wrap;
      }

      .icon-button {
        background-color: white;
        border: 1px solid #333;
        padding: 2px;
        border-radius: 4px;
        cursor: pointer;
      }
    `}</style>

    {/* ---------- TOP PANEL ---------- */}
    <div className="top-controls">
      <div className="buttons">
        <button className="action-btn">
          <PlusCircle size={14} /> Table Reservation
        </button>
        <button className="action-btn">
          <PlusCircle size={14} /> Contactless
        </button>
      </div>

      <div className="legend">
        <div><span className="circle gray"></span> Blank Table</div>
        <div><span className="circle blue"></span> Running Table</div>
        <div><span className="circle green"></span> Printed Table</div>
        <div><span className="circle orange"></span> Running KOT Table</div>
      </div>
    </div>

    {/* ---------- TABLE SECTIONS ---------- */}
    <div className="sections-wrapper">
      {tables.map((section, index) => (
        <div key={index} className="section-card">
          <h3>{section.type} Table</h3>

          {section.rows.map((row, rIndex) => (
            <div key={rIndex}>
              <h4 className="row-label">Table For 2</h4>
              <div className="table-row">
                {row.map((table, i) => {
                  const statusClass =
                    table.status === "printed"
                      ? "printed"
                      : table.status === "running KOT"
                        ? "kot"
                        : "";

                  return (
                    <div key={i} className={`table-box ${statusClass}`}>
                      <div style={{ textAlign: "center" }}>
                        {table.time ? (
                          <>
                            <div>{table.time}</div>
                            <div>{table.id}</div>
                            <div>₹{table.price}</div>
                          </>
                        ) : (
                          <div className="empty-box">{table.id}</div>
                        )}
                      </div>

                      {/* Icons based on status */}
                      {table.status === "printed" && (
                        <div className="icons">
                          <ClipboardList size={24} className="icon-button" />
                        </div>
                      )}
                      {table.status === "running KOT" && (
                        <div className="icons">
                          <Printer size={24} className="icon-button" />
                          <Eye size={24} className="icon-button" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default TableDashboard;
