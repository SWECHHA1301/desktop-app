import React from "react";
import "./TableDashboard.css";
import {
  PlusCircle,
  Printer,
  Eye,
  ClipboardList,
} from "lucide-react";

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

const TableDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Fixed Top Panel */}
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

      {/* Table Sections */}
      <div className="sections-wrapper">
        {tables.map((section, index) => (
          <div key={index} className="section-card">
            <h3>{section.type} Table</h3>
            {section.rows.map((row, rowIndex) => (
              <div key={rowIndex}>
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
                        {table.time ? (
                          <>
                            <div>{table.time}</div>
                            <div>{table.id}</div>
                            <div>₹{table.price}</div>
                          </>
                        ) : (
                          <div className="empty-box">{table.id}</div>
                        )}

                        {/* Icons per status */}
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
};

export default TableDashboard;




