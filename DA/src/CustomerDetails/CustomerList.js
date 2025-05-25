import React, { useState } from "react";
import { FourPointStar } from "../Common/Icons";
import { FaWhatsapp } from "react-icons/fa";
import {
  ChevronDown,
  Phone,
  Bell,
  ChevronRight,
} from "lucide-react";
import NativeDateRangePicker from "../Common/NativeDateRangePicker";
import UserAvatarIcon from "../Common/Icons";
import "./CustomerList.css";

const customers = new Array(7).fill({
  name: "Username",
  phone: "985XXXXXXX",
  totalOrders: 15,
  lastOrder: "01 April 2025",
  dueBalance: 56,
  totalSpent: 220,
});

export default function CustomerList() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const toggleDrawer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="customer-panel">
  <h2 className="customer-title">Customer Details</h2>

  <div className="customer-actions">
      {['All', 'Dine in', 'Take Away'].map((tab) => (
        <button
          key={tab}
          className={`tab-buttons ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    <input className="search-input" placeholder="Search" />
    <NativeDateRangePicker />
  </div>



      {customers.map((cust, index) => (
        <div key={index} className="drawer-card">
          <div
            className={`drawer-header ${
              expandedIndex === index ? "selected" : ""
            }`}
            onClick={() => toggleDrawer(index)}
          >
            {expandedIndex === index ? <ChevronDown /> : <ChevronRight />}

            <div className="drawer-profile">
              <div className="drawer-avatar">
                <UserAvatarIcon />
              </div>
              <div>
                <div className="drawer-name">{cust.name}</div>
                <div
                className="drawer-phone"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
              <Phone size={16} color="#3658BF" fill="#3658BF" />{cust.phone}</div>
              </div>
            </div>
            <div className="drawer-spacer" />
            <div className="drawer-amount"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <FourPointStar size={24} fill="#3658BF" width="32px" height="32px" />{cust.totalSpent}</div>
          </div>

          {expandedIndex === index && (
            <div className="drawer-content">
              <div className="drawer-info-top">
              <div className="drawer-info-left">
              <div>Total Orders : <strong>{cust.totalOrders}</strong></div>
              <div>Last Order : <strong>{cust.lastOrder}</strong></div>
           </div>

  <div className="drawer-due-center">
    Due Balance: <strong className="drawer-due">₹ {cust.dueBalance}</strong>
  </div>

  <div className="drawer-icons">
    <Phone size={18} color="black" fill="black" />
    <FaWhatsapp size={18} color="black" />
    <Bell size={18} color="black" fill="black" />
  </div>
</div>

             <div className="drawer-info-bottom">
  <div className="drawer-buttons">
    <button>History</button>
    <button> Add Order</button>
    <button> Remind</button>
    <button> Edit Info</button>
  </div>
</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
