import React, { useState } from "react";
import OrderTypeSwitch from "./OrderTypeSwitch";

const PurchaseReceipt = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Pizza", qty: 1, price: 240 },
    { id: 2, name: "Manchurian", qty: 1, price: 90 },
    { id: 3, name: "Fried Rice", qty: 1, price: 80 },
  ]);

  const [customerName, setCustomerName] = useState("");
  const [table, setTable] = useState("B-2");
  const [orderType, setOrderType] = useState("Dine in");

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
    <div className="w-96 bg-white rounded-xl shadow-lg p-4 border">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-lg">Purchase Receipt</h2>
        <button className="text-xl font-bold">+</button>
      </div>

      <div className="flex justify-around mb-2">
        <OrderTypeSwitch selected={orderType} onChange={setOrderType} />
      </div>

      <div className="flex justify-between gap-2 mb-3">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-1/2 p-1 border rounded"
        />
        <input
          type="text"
          value={table}
          onChange={(e) => setTable(e.target.value)}
          className="w-1/2 p-1 border rounded text-center"
        />
      </div>

      <div className="border-t pt-2">
        <div className="text-sm font-medium flex justify-between mb-1">
          <span>KOT : 1</span>
          <span>Time : 17:05</span>
          <span>Items : {items.length}</span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center text-sm py-1 border-b">
            <div className="flex-1">{item.name}</div>
            <div className="flex items-center gap-1">
              {item.name === "Fried Rice" ? (
                <>
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 border rounded"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </>
              ) : (
                <span>{item.qty}</span>
              )}
            </div>
            <div className="w-16 text-right">₹{item.qty * item.price}</div>
            <button onClick={() => handleRemove(item.id)} className="text-red-500 ml-2">×</button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm">
        <div className="flex justify-between">
          <span>SubTotal</span>
          <span>₹{total}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>₹0.00</span>
        </div>
        <div className="flex justify-between font-semibold border-t pt-2 mt-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded flex items-center">
          + Add
        </button>
        <button className="bg-red-100 text-red-700 px-3 py-1 rounded">Abort</button>
        <button className="bg-green-600 text-white px-3 py-1 rounded">Proceed →</button>
      </div>
    </div>
  );
};

export default PurchaseReceipt;

