import React from 'react';

const SummaryHeader = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: "10px",
      marginBottom: "10px",
      gap: "10px",
    }}
  >
    <div style={{ minWidth: "150px", textAlign: "center" }}>
      <strong>Balance :</strong> <span style={{ color: 'green' }}>Rs 1200.00</span>
    </div>
    <div style={{ minWidth: "150px", textAlign: "center" }}>
      <strong>Total Earnings :</strong> Rs 1200.00
    </div>
    <div style={{ minWidth: "150px", textAlign: "center" }}>
      <strong>Payments :</strong> <span style={{ color: 'green' }}>Rs 2000.00</span>
    </div>
  </div>
);

export default SummaryHeader;
