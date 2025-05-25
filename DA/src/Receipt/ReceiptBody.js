import React from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const ReceiptBody = ({
  items,
  expandedItemId,
  toggleExpand,
  handleQuantityChange,
  handleRemove,
}) => {
  return (
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
                className={"item-row"}
              >
                <div
                  className="item-id"
                  onClick={() => toggleExpand(item.id)}
                  style={{ cursor: "pointer" }}
                >
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
                  onClick={() => handleRemove(item.id)}
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
                        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <div className="drawer-column">
                      <div className="drawer-label">Discount</div>
                      <div className="discount-input">
                        <input type="text" placeholder="0" />
                        <select>
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
  );
};

export default ReceiptBody;
