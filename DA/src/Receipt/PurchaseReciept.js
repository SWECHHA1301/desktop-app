import React, { useState } from "react";
import {
  Hash,
  Plus,
   ChevronRight,
  PlusCircle,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import OrderTypeSwitch from "../Common/OrderTypeSwitch";
import "./PurchaseReceipt.css";

const PurchaseReceipt = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Pizza", qty: 1, price: 240 },
    { id: 2, name: "Manchurian", qty: 1, price: 90 },
    { id: 3, name: "Fried Rice", qty: 1, price: 80 },
  ]);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [table, setTable] = useState("B-2");
  const [orderType, setOrderType] = useState("Dine in");
  const [showSummary, setShowSummary] = useState(false);

  const toggleExpand = (id) => {
    setExpandedItemId((prev) => (prev === id ? null : id));
  };

  const handleQuantityChange = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="body">
      <div className="receipt-wrapper">
        <div className="receipt-container">
          <div className="receipt-header">
  <button className="circle-icon blue-outline">
    <div className="blue-circle">
      <ChevronRight size={20} color="white" />
    </div>
  </button>

  <div className="header-title">
    <h2 className="receipt-title">Purchase Receipt</h2>
    <div className="receipt-id">
      <span className="receipt-hash">
        <Hash size={12} />
      </span>
      <span>123400</span>
    </div>
  </div>

  <button className="circle-icon black-outline">
    <Plus size={20} />
  </button>
</div>


          <div className="order-type-switch">
            <OrderTypeSwitch selected={orderType} onChange={setOrderType} />
          </div>

          <div className="customer-inputs">
            <div className="input-group">
              <label className="input-label">
                Customer Name
                <span className="small-icon">
                  <PlusCircle size={10} color="white" />
                </span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="input-label">Table</label>
              <input
                type="text"
                value={table}
                onChange={(e) => setTable(e.target.value)}
              />
            </div>
          </div>

          <div className="receipt-body">
       
            <div className="receipt-h">
              <span>S.No</span>
              <span>Food Name</span>
              <span>QTY</span>
              <span>Amount</span>
            </div>
     
       
            <div className="receipt-info">
              <span className="ss">KOT : 1</span>
              <span className="ss">Time : 17:05</span>
              <span className="ss">Items : {items.length}</span>
            </div>
            
            <div className="item-list-scrollable">
            {items.map((item) => (
            <div key={item.id} style={{ marginBottom: "8px" }}>
            <div
            style={
            item.id === expandedItemId
            ? {
                borderLeftWidth: 5,
                borderColor: "#3658BF",
                borderRadius: 10,
              }
            : {}
        }
      >
     
        <div
          style={
            item.id === expandedItemId
              ? {
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                }
              : {}
          }
          className="item-row"
          onClick={() => toggleExpand(item.id)}
        >
          <div className="item-id">
            {expandedItemId === item.id ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>
          <div className="item-name">{item.name}</div>
          <div className="item-qty">{item.qty}</div>
          <div className="item-price">₹{item.qty * item.price}</div>
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              handleRemove(item.id);
            }}
            className="remove-btn"
          >
            <X size={16} />
          </button>
        </div>

        {expandedItemId === item.id && (
          <div className="inline-drawer">
            <div className="drawer-controls">
              <div className="drawer-column">
                <div className="drawer-label">Quantity</div>
                <div className="qty-control">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuantityChange(item.id, -1);
                    }}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuantityChange(item.id, 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="drawer-column">
                <div className="drawer-label">Discount</div>
                <div className="discount-input">
                  <input
                    type="text"
                    placeholder="0"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <select onClick={(e) => e.stopPropagation()}>
                    <option value="%">%</option>
                    <option value="₹">₹</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

          </div>

          <div className="payment-section">

<div className="receipt-top-actions">
  <span className="receipt-top-left">Add</span>
  <div className="receipt-top-right">
    <span className="action-link">Discount</span>
    <span className="action-link">Coupon Code</span>
    <span className="action-link">Note</span>
  </div>
</div>


  <div className="receipt-summary-drawer">
    <div
      className="summary-toggle"
      onClick={() => setShowSummary((prev) => !prev)}
    >
      <span>Payment Summary</span>
      {showSummary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </div>

    {showSummary && (
      <div className="summary-details">
        <div className="summary-row muted">
          <span>SubTotal</span>
          <span className="st">₹{total.toFixed(2)}</span>
        </div>
        <div className="summary-row muted">
          <span>Taxes</span>
          <span className="st">₹0.00</span>
        </div>
        <div className="summary-row muted">
          <span>Discount</span>
          <span className="st">₹0.00</span>
        </div>
      </div>
    )}

    <div className="summary-total always-visible">
      <span>Total</span>
      <span>₹{total.toFixed(2)}</span>
    </div>
  </div>

  <div className="payment-buttons">
    <div className="receipt-actions">
      <button className="btn add-btn">
        Add <span>＋</span>
      </button>
      <button className="btn abort-btn">
        Abort <span>✖</span>
      </button>
    </div>
    <div className="receipt-actions">
      <button className="btn kot-btns">
        KOT <span>⏸</span>
      </button>
      <button className="btn proceed-btn">
        Proceed <span>→</span>
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default PurchaseReceipt;
