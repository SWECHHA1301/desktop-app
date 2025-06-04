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

export default function CustomTable() {
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [items, setItems] = useState([
    { id: 1, name: "Pizza", qty: 1, price: 240 },
    { id: 2, name: "Manchurian", qty: 1, price: 90 },
    { id: 3, name: "Fried Rice", qty: 1, price: 80 },
    { id: 4, name: "Fried Rice", qty: 1, price: 80 },
    { id: 5, name: "Fried Rice", qty: 1, price: 80 },
    { id: 6, name: "Fried Rice", qty: 1, price: 80 },
  ]);

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

    const total = items.reduce((acc, item) => acc + item.qty * item.price, 0);
  };
  return (
    <>
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
    </>
  );
}
