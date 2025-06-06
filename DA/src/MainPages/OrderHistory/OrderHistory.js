import React, { useState } from "react";
import NativeDateRangePicker from "../../Common/NativeDateRangePicker";

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
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", width: "100%" }}>
      <div
        style={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          maxWidth: "1304px",
          height: "40px",
        }}
      >
        {["All", "Dine in", "Take Away"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              width: "100%",
              maxWidth: "176px",
              height: "40px",
              padding: "10px 24px",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "16px",
              border: "none",
              backgroundColor: activeTab === tab ? "white" : "#3658BF",
              color: activeTab === tab ? "black" : "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {tab}
          </button>
        ))}

        <div
          style={{
            maxWidth: "369px",
            width: "100%",
            height: "40px",
            position: "relative",
          }}
        >
          <i
            className="fa fa-search"
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: "#999",
              fontSize: "16px",
            }}
          ></i>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              height: "40px",
              padding: "8px 12px 8px 36px",
              borderRadius: "10px",
              border: "1px solid  #616161",
              fontSize: "16px",
              fontWeight: "700",
              boxSizing: "border-box",
            }}
          />
        </div>

        <NativeDateRangePicker />
      </div>

      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: "10px",
          padding: "24px",
          height: "calc(92vh - 104px)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <table
            style={{
              width: "100%",
              tableLayout: "fixed",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                 border: "1px solid rgb(41, 41, 41)",
                  borderRadius: '10px 10px 0 0'
                  
                }}
              >
                <th style={headerCellStyle}>No.</th>
                <th style={headerCellStyle}>Order ID</th>
                <th style={headerCellStyle}>Order Date</th>
                <th style={headerCellStyle}>Payment Method</th>
                <th style={headerCellStyle}>Order Type</th>
                <th style={headerCellStyle}>Total Payment</th>
              </tr>
            </thead>
          </table>

          <div style={{ flex: 1, overflowY: "auto" }}>
            <table style={{ width: "100%", tableLayout: "fixed" }}>
              <tbody>
                {filteredOrders.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      border: "1px solid rgb(41, 41, 41)",
                      backgroundColor: "white",
                    }}
                  >
                    <td style={cellStyle}>{item.Number}</td>
                    <td style={{...cellStyle,color:'black'}}>{item.Id}</td>
                    <td style={{ ...cellStyle, fontWeight: 400 }}>
                      {item.Date}
                    </td>
                    <td style={{ ...cellStyle, fontWeight: 400 ,color:'black'}}>
                      {item.Method}
                    </td>
                    <td style={{ ...cellStyle, fontWeight: 400 ,fontSize:'14px'}}>
                      <button
                        style={{
                          maxWidth: "87px",
                          width: "100%",
                          height: "32px",
                          // padding: "8px",
                          borderRadius: "10px",
                         
                          backgroundColor:
                            item.Type === "Dine in" ? "#F4C430" : "#2F5D62",
                          color: item.Type === "Dine in" ? "black" : "white",
                        }}
                      >
                        {item.Type}
                      </button>
                    </td>
                    <td style={{ ...cellStyle, justifyContent: "end" , color:'black' }}>
                      {item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const cellStyle = {
  padding: "19px 20px",
  maxWidth: "140px",
  width: "100%",
  fontSize: "16px",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  color: "#797979",
 
};

const headerCellStyle = {
  ...cellStyle,
  fontWeight: "700",
  fontSize: "16px",
  color: "#797979",

   
};

