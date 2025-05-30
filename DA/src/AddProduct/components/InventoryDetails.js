import React from "react";

export function InventoryDetails() {
  return (
    <div className="ap-section">
      <h3>Inventory Details</h3>
      <input type="text" placeholder="SKU" />
      <input type="number" placeholder="Quantity in Stock" />
      <input type="text" placeholder="Warehouse Location" />
    </div>
  );
}