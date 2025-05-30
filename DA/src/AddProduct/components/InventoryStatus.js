export function InventoryStatus() {
  return (
    <div className="ap-section">
      <h3>Inventory Status</h3>
      <label>
        <input type="checkbox" /> In Stock
      </label>
      <label>
        <input type="checkbox" /> Out of Stock
      </label>
      <label>
        <input type="checkbox" /> Discontinued
      </label>
    </div>
  );
}