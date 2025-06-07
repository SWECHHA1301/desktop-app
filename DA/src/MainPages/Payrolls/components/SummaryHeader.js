import React from 'react';

const SummaryHeader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 10,
      height: "54px",
      padding: "10px 0",
      marginBottom: "10px",
    }}
  >
    <div><strong>Balance :</strong> <span style={{ color: 'green' }}>Rs 1200.00</span></div>
    <div><strong>Total Earnings :</strong> Rs 1200.00</div>
    <div><strong>Payments :</strong> <span style={{ color: 'green' }}>Rs 2000.00</span></div>
  </div>
);

export default SummaryHeader;
