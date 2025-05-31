import React, { useState } from 'react';
import './OrderDashboard.css';

const orders = [
  { table: 't2', status: 'Completed', type: 'Dine in' },
  { table: 't2', status: 'Completed', type: 'Dine in' },
  { table: 't2', status: 'pending', type: 'Dine in' },
  { table: 't2', status: 'Completed', type: 'Dine in' },
  { table: 't2', status: 'Completed', type: 'Dine in' },
  { table: 't2', status: 'Completed', type: 'Dine in' },
  { table: 't2', status: 'pending', type: 'Dine in' },
  { table: 't2', status: 'Completed', type: 'Dine in' }
];

const OrderCard = ({ table, status, type, isSelected, onClick }) => (
  <div className={`order-container ${isSelected ? 'selected' : ''}`} onClick={onClick}>
    <div className={`order-cards ${status.toLowerCase()}`}>
      <div className="order-header">
        <span className="order-table">Table No.-{table}</span>
        <div className="order-time">
          <div>Time :</div>
          <div>Date :</div>
        </div>
      </div>
      <div className="order-info">KOT-xxx | Bill-xx4</div>
      <div className="order-types-row">
        <span className="order-types">Type - {type}</span>
        <span className={`order-status ${status.toLowerCase()}`}>{status}</span>
      </div>
    </div>
  </div>
);

export default function OrderDashboard() {

  const [activeTab, setActiveTab] = useState('All');

  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredOrders = activeTab === 'All'
    ? orders
    : orders.filter(order => order.type === activeTab);

  return (
    <div className="dashboard-orders">
      <div className="tabs">
        {['All', 'Dine in', 'Take Away'].map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="orders-grid">
        {filteredOrders.map((order, index) => (
          <OrderCard
            key={index}
            {...order}
            isSelected={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}



