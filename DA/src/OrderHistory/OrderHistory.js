import React, { useState } from 'react';
import './OrderHistory.css';

export default function OrderHistory() {
  const data = [
    { Number: 'No.', Id: 'Order ID', Date: 'Order Date', Type: 'Order Type', Method: 'Payment Method', total: 'Total Payment' },
    { Number: '1', Id: 'xxxx5', Date: 'Saturday, April 11', Type: 'Take Away', Method: 'UPI', total: '₹200.00' },
    { Number: '2', Id: 'zzzz7', Date: 'Saturday, April 11', Type: 'Take Away', Method: 'UPI', total: '₹579.00' },
    { Number: '3', Id: 'yyyy9', Date: 'Saturday, April 11', Type: 'Dine in', Method: 'Card', total: '₹1000.00' },
    { Number: '4', Id: 'xxxx4', Date: 'Saturday, April 11', Type: 'Dine in', Method: 'UPI', total: '₹795.00' },
    { Number: '5', Id: 'xxxx7', Date: 'Saturday, April 11', Type: 'Take Away', Method: 'Cash', total: '₹250.00' },
    { Number: '6', Id: 'tthhvv', Date: 'Saturday, April 11', Type: 'Dine in', Method: 'Cash', total: '₹2450.00' },
    { Number: '7', Id: 'jinin', Date: 'Saturday, April 11', Type: 'Dine in', Method: 'Card', total: '₹5075.00' },
  ];

  const [activeTab, setActiveTab] = useState('All');
  const filteredOrders = activeTab === 'All' ? data : data.filter(item => item.Type === activeTab || item.Type === 'Order Type');

  return (
    <div className="Order-Main-Container">
      <div className="tab-sec">
        {['All', 'Dine in', 'Take Away'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="Tab-Section">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Order Type</th>
              <th>Payment Method</th>
              <th>Total Payment</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.slice(1).map((item, index) => (
              <tr key={index}>
                <td>{item.Number}</td>
                <td>{item.Id}</td>
                <td>{item.Date}</td>
                <td>{item.Type}</td>
                <td>{item.Method}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}