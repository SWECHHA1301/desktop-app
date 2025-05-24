import React, { useState } from "react";
import NativeDateRangePicker from "../Common/NativeDateRangePicker";
import "./OrderHistory.css";

export default function OrderHistory() {
  const data = [
    {
      Number: "1",
      Id: "xxxx5",
      Date: "Saturday, April 11",
      Type: "Take Away",
      Method: "UPI",
      total: "₹200.00",
    },
    {
      Number: "2",
      Id: "zzzz7",
      Date: "Saturday, April 11",
      Type: "Take Away",
      Method: "UPI",
      total: "₹579.00",
    },
    {
      Number: "3",
      Id: "yyyy9",
      Date: "Saturday, April 11",
      Type: "Dine in",
      Method: "Card",
      total: "₹1000.00",
    },
    {
      Number: "4",
      Id: "xxxx4",
      Date: "Saturday, April 11",
      Type: "Dine in",
      Method: "UPI",
      total: "₹795.00",
    },
    {
      Number: "5",
      Id: "xxxx7",
      Date: "Saturday, April 11",
      Type: "Take Away",
      Method: "Cash",
      total: "₹250.00",
    },
    {
      Number: "6",
      Id: "tthhvv",
      Date: "Saturday, April 11",
      Type: "Dine in",
      Method: "Cash",
      total: "₹2450.00",
    },
    {
      Number: "7",
      Id: "jinin",
      Date: "Saturday, April 11",
      Type: "Dine in",
      Method: "Card",
      total: "₹5075.00",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = data.filter((item) => {
    const matchesTab = activeTab === "All" || item.Type === activeTab;
    const matchesSearch = Object.values(item).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesTab && matchesSearch;
  });

  return (
    <div className="Order-Main-Container">
      <div className="tab-sec">
        {["All", "Dine in", "Take Away"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

        <div className="Search-detail">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <NativeDateRangePicker />
      </div>

      <div className="Tab-Section">
        <table>
          <thead>
            <tr style={{ borderRadius: "10px 10px 0 0" }}>
              <th>No.</th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Order Type</th>
              <th>Payment Method</th>
              <th>Total Payment</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((item, index) => (
              <tr key={index}>
                <td>{item.Number}</td>
                <td>{item.Id}</td>
                <td style={{ color: "#3658BF" }}>{item.Date}</td>
                <td
                  style={{
                    color: item.Type === "Dine in" ? "#FF0000" : "#2CAC04",
                  }}
                >
                  {item.Type}
                </td>
                <td
                  style={{
                    color:
                      item.Method === "Card"
                        ? "#FF0000"
                        : item.Method === "Cash"
                        ? "#2CAC04"
                        : "inherit",
                  }}
                >
                  {item.Method}
                </td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
