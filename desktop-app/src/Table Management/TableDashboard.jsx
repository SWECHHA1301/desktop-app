import React from "react";
import "./TableDashboard.css";
import {
  PlusCircle,
  Circle,
  Printer,
  Eye,
  ClipboardList,
} from "lucide-react";

const tables = [
  {
    type: "AC",
    rows: [
      [
        { id: "t1", time: "7 Min", price: 769, status: "running" },
        { id: "t2", time: "10 Min", price: 975, status: "running" },
        { id: "t3" }, { id: "t4" },
        { id: "t5", time: "7 Min", price: 769, status: "kot" },
        { id: "t6" }, { id: "t7" }, { id: "t8" }, { id: "t9" }, { id: "t10" },
        { id: "t11", time: "7 Min", price: 769, status: "kot" }
      ],
      [
        { id: "f1", time: "7 Min", price: 769, status: "running" },
        { id: "f2", time: "10 Min", price: 975, status: "running" },
        { id: "f3" }, { id: "f4" },
        { id: "f5", time: "7 Min", price: 769, status: "kot" },
        { id: "f6" }, { id: "f7" }, { id: "f8" }, { id: "f9" }, { id: "f10" },
        { id: "f11", time: "7 Min", price: 769, status: "kot" }
      ]
    ]
  },
  {
    type: "NON AC",
    rows: [
      [
        { id: "t1", time: "7 Min", price: 769, status: "running" },
        { id: "t2", time: "10 Min", price: 975, status: "running" },
        { id: "t3" }, { id: "t4" },
        { id: "t5", time: "7 Min", price: 769, status: "kot" },
        { id: "t6" }, { id: "t7" }, { id: "t8" }, { id: "t9" }, { id: "t10" },
        { id: "t11", time: "7 Min", price: 769, status: "kot" }
      ],
      [
        { id: "f1", time: "7 Min", price: 769, status: "running" },
        { id: "f2", time: "10 Min", price: 975, status: "running" },
        { id: "f3" }, { id: "f4" },
        { id: "f5", time: "7 Min", price: 769, status: "kot" },
        { id: "f6" }, { id: "f7" }, { id: "f8" }, { id: "f9" }, { id: "f10" },
        { id: "f11", time: "7 Min", price: 769, status: "kot" }
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
            <PlusCircle size={16} /> Table Reservation
          </button>
          <button className="action-btn">
            <PlusCircle size={16} /> Contactless
          </button>
        </div>
        <div className="legend">  
      <div className="legend-item"><Circle size={12} className="kot" /> Running KOT Table</div>  
      <div className="legend-item"><Circle size={12} className="move" /> Move KOT /Item</div>  
      <div className="legend-item"><Circle size={12} className="blank" /> Blank Table</div>  
      <div className="legend-item"><Circle size={12} className="running" /> Running Table</div>  
      <div className="legend-item"><Circle size={12} className="printed" /> Printed Table</div>  
      <div className="legend-item"><Circle size={12} className="print" /> Print Table</div>
        </div>

      </div>

      {/* Table Sections */}
      <div className="sections-wrapper">
        {tables.map((section, index) => (
          <div key={index} className="section-card">
            <h3>{section.type} Table</h3>
            {section.rows.map((row, rowIndex) => (
              <div key={rowIndex}>
                <p className="row-label">Table For 2</p>
                <div className="table-row">
                  {row.map((table, i) => (
                    <div
                      key={i}
                      className={`table-box ${table.status || "blank"}`}
                    >
                      {table.time ? (
                        <>
                          <div>{table.time}</div>
                          <div>{table.id}</div>
                          <div>₹{table.price}</div>
                          <div className="icons">
                            <Printer size={14} />
                            <ClipboardList size={14} />
                            <Eye size={14} />
                          </div>
                        </>
                      ) : (
                        <div className="empty-box">{table.id}</div>
                      )}
                    </div>
                  ))}
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


