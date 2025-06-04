import React, { useState } from "react";
import { FourPointStar } from "../Common/Icons";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown, Phone, Bell, ChevronRight } from "lucide-react";
import NativeDateRangePicker from "../Common/NativeDateRangePicker";
import UserAvatarIcon from "../Common/Icons";   // ⬅️  removed:  import "./CustomerList.css";

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

  const toggleDrawer = (index) =>
    setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <>
      
      <style>{`
        .customer-actions {
          display: flex;
          flex-direction: row;
          gap: 24px;
          align-items: center;
          margin-bottom: 24px;
          width: 100%;
          overflow: hidden;
          flex-wrap: wrap;
        }

        .customer-list-scroll-area {
          flex-grow: 1;
          overflow-y: auto;
          max-height: calc(100vh - 220px);
          padding-right: 8px;
        }

        .customer-title {
          color: #3658BF;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          margin-bottom: 24px;
          overflow: hidden;
        }

        .tab-buttons {
          max-width: 176px;
          width: 100%;
          height: 40px;
          padding: 0 16px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          border: 1px solid transparent;
          background-color: #3658BF;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tab-buttons.active {
          background-color: white;
          color: black;
        }

        .search-inputs {
          flex-grow: 1;
          height: 40px;
          border-radius: 10px;
          padding: 0 12px;
          border: 1px solid #ccc;
          background-color: #FFF;
          font-size: 14px;
        }

        .drawer-card {
          border-radius: 10px;
          margin-bottom: 8px;
          overflow: hidden;
          background-color: white;
          border: 1px solid black;
        }

        .list-selected {
          background: linear-gradient(270deg,#FFF 0%,rgba(154,171,223,.63) 92.79%,rgba(54,88,191,.25) 100%);
          border-left: 5px solid #3658BF;
        }

        .drawer-header {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 14px 24px 14px 27px;
        }

        .drawer-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: 20px;
        }

        .drawer-avatar {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .drawer-name  { font-weight: 600; font-size: 16px; }
        .drawer-phone { font-size: 12px; color: gray;   }

        .drawer-spacer { flex: 1; }

        .drawer-amount {
          font-weight: 700;
          font-size: 16px;
          margin-right: 12px;
        }

        .drawer-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 153px;
          padding: 24px 24px 24px 73px;
          border-bottom: 5px solid #3658BF;
          border-left : 5px solid #3658BF;
        }

        .drawer-info-top  { display: flex; align-items: center; width: 100%; }
        .drawer-info-left,
        .drawer-due-center,
        .drawer-icons   { flex: 1; }

        .drawer-info-left       { color:#797979; font-weight:400; font-size:16px; }
        .drawer-info-left strong{ color:black;   font-weight:400; font-size:16px; }

        .drawer-due-center { text-align:center; font-weight:600; }
        .drawer-icons      { display:flex; justify-content:flex-end; gap:32px; align-items:center; }

        .drawer-due { color:red; font-weight:bold; }

        .drawer-info-bottom { display:flex; justify-content:flex-end; width:100%; }

        .drawer-buttons      { display:flex; gap:24px; flex-wrap:wrap; padding-top:11px; }
        .drawer-buttons button{
          background-color:#3658BF; color:white;
          padding:6px 12px; border-radius:8px; border:none;
          display:flex; align-items:center; gap:6px;
          font-size:14px; cursor:pointer;
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 768px) {
          .customer-header { flex-direction: column; align-items: flex-start; gap: 12px; }
          .customer-title  { font-size: 24px; margin-bottom: 12px; }

          .customer-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            margin-bottom: 16px;
          }

          .tab-buttons,
          .search-input { max-width: 100%; width: 100%; }

          .drawer-header   { flex-wrap: wrap; padding: 14px; }
          .drawer-profile  { margin-left: 0; gap: 8px; }
          .drawer-content  { padding: 16px; height: auto; }

          .drawer-info-top { flex-direction: column; align-items: flex-start; gap: 12px; }

          .drawer-info-left,
          .drawer-due-center,
          .drawer-icons    { width: 100%; text-align: left; }

          .drawer-icons { justify-content: flex-start; gap: 16px; }
          .drawer-info-bottom { justify-content: flex-start; }
          .drawer-buttons     { justify-content: flex-start; }

          .drawer-scroll-area { max-height: 100vh; overflow-y: auto; padding-right: 0; }
        }
      `}</style>

      <div className="customer-panel">
        <h2 className="customer-title">Customer Details</h2>

        
        <div className="customer-actions">
          {["All", "Dine in", "Take Away"].map((tab) => (
            <button
              key={tab}
              className={`tab-buttons ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <input className="search-inputs" placeholder="Search" />
          <NativeDateRangePicker />
        </div>

       
        <div className="customer-list-scroll-area">
          {customers.map((cust, index) => (
            <div key={index} className="drawer-card">
              {/* HEADER */}
              <div
                className={`drawer-header ${
                  expandedIndex === index ? "list-selected" : ""
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
                      <Phone size={16} color="#3658BF" fill="#3658BF" />
                      {cust.phone}
                    </div>
                  </div>
                </div>

                <div className="drawer-spacer" />

                <div
                  className="drawer-amount"
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <FourPointStar size={24} fill="#3658BF" width="32px" height="32px" />
                  {cust.totalSpent}
                </div>
              </div>

            
              {expandedIndex === index && (
                <div className="drawer-content">
                  <div className="drawer-info-top">
                    <div className="drawer-info-left">
                      <div>
                        Total Orders : <strong>{cust.totalOrders}</strong>
                      </div>
                      <div>
                        Last Order : <strong>{cust.lastOrder}</strong>
                      </div>
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
                      <button>Add Order</button>
                      <button>Remind</button>
                      <button>Edit Info</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
