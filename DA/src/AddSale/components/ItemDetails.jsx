export default function ItemDetails() {
  return (
    <div className="itemdetail-section">
      <div className="section-header">Item Details</div>
      <table className="item-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Discount %</th>
            <th>Tax %</th>
            <th>Subtotal</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1</td>
            <td>Samsung S10</td>
            <td>10%</td>
            <td>GST@3%</td>
            <td>₹9956.31</td>
            <td>₹9,198.73</td>
          </tr>
          <tr>
            <td>#2</td>
            <td>Item</td>
            <td>Discount</td>
            <td>Tax</td>
            <td>₹9956.31</td>
            <td>₹9,198.73</td>
          </tr>
        </tbody>
      </table>
      <div style={{ textAlign: "right", marginTop: "0.5rem" }}>
        Net Amount: <strong>₹18000.00</strong>
      </div>
    </div>
  );
}