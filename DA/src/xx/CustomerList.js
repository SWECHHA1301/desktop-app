import React, { useState } from "react";
import {
  ChevronDown,
  Phone,
  Bell,
  MessageCircle,
  Pencil,
  PlusCircle,
  Clock,
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
      <div className="customer-header">
        <h2>Customer Details</h2>
        <div className="customer-actions">
          <div className="tabs">
            {["All", "Dine in", "Take Away"].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <input className="search-input" placeholder="Search" />
          <NativeDateRangePicker />
        </div>
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
                <div className="drawer-phone">{cust.phone}</div>
              </div>
            </div>
            <div className="drawer-spacer" />
            <div className="drawer-amount">₹ {cust.totalSpent}</div>
          </div>

          {expandedIndex === index && (
            <div className="drawer-content">
              <div className="drawer-info-top">
                <div className="drawer-info-left">
                  <div>
                    Total Orders: <strong>{cust.totalOrders}</strong>
                  </div>
                  <div>
                    Last Order: <strong>{cust.lastOrder}</strong>
                  </div>
                </div>
                <div className="drawer-info-right">
                  <div>
                    Due Balance:{" "}
                    <strong className="drawer-due">₹ {cust.dueBalance}</strong>
                  </div>
                  <div className="drawer-icons">
                    <Phone size={18} color="black" />
                    <MessageCircle size={18} color="black" />
                    <Bell size={18} color="black" />
                  </div>
                </div>
              </div>
              <div className="drawer-buttons">
                <button>
                  <Clock size={14} /> History
                </button>
                <button>
                  <PlusCircle size={14} /> Add Order
                </button>
                <button>
                  <Bell size={14} /> Remind
                </button>
                <button>
                  <Pencil size={14} /> Edit Info
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
