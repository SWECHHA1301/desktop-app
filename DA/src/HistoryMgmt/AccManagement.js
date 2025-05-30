import React from "react";
// import DateCalendar from '../Common/Calendar/DateCalendar';
import "./AccManagement.css";
import NativeDateRangePicker from "../Common/NativeDateRangePicker";
const details = [
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

export default function AccManagement() {
  return (
    <>
      <div className="Account-section">
        <div className="Account-nav">
          <h2 className="nav-title">Account Management</h2>
          <div style={{ paddingBottom: "16px" }}>
            <NativeDateRangePicker/>
          </div>
        </div>

        <div className="trancation-info">
          <div className="select-account">
            <button className="select-btn">
              <p>Select Account</p>
              <div></div>
            </button>
            <button className="create-btn">
              <p>Create Transaction</p>
            </button>
          </div>

          <div className="Transactions-sec">
            <h2>Transactions</h2>
            <button className="filter">
              <p>Filter</p>
              <div></div>
            </button>
          </div>

         <div className="main-tab">
  <table className="table-header">
    <thead >
      <tr>
        <th>No.</th>
        <th>Order ID</th>
        <th>Order Date</th>
        <th>Order Type</th>
        <th>Payment Method</th>
        <th>Total Payment</th>
      </tr>
    </thead>
  </table>
  <div className="table-body-wrapper">
    <table className="table-body">
      <tbody>
        {details.map((item, index) => (
          <tr key={index}>
            <td>{item.Number}</td>
            <td>{item.Id}</td>
            <td style={{ color: "#3658BF" }}>{item.Date}</td>
            <td>{item.Type}</td>
            <td>{item.Method}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>






        </div>





      </div>
    </>
  );
}
