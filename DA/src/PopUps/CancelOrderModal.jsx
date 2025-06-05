import React from "react";

export default function CancelOrderModal({ onBack, onConfirm }) {
  const styles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
    },
    modal: {
      width: "556px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      overflow: "hidden",
      fontFamily: "Arial",
    },
    header: {
      backgroundColor: "#3658BF",
      padding: "16px",
      color: "#fff",
      fontSize: 24,
      fontWeight: 700,
    },
    content: {
      padding: "20px",
    },
    label: {
      color: '#797979',
      fontSize: 16,
      fontWeight: 700,
      marginLeft: '40px'
    },
    row: {
      marginTop: "8px",
      display: "flex",
      justifyContent: "centre",
    },
    note: {
      color: "#3658BF",
      fontSize: "12px",
      fontWeight: 400,
      marginTop: "12px",
      marginLeft: '20px'
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      padding: "16px 20px",
      backgroundColor: "#E2E6F3",
      height: 60,
    },
    btnBack: {
      padding: "8px 16px",
      backgroundColor: "#fff",
      border: "1px solid #3658BF",
      borderRadius: 10,
      color: "#3658BF",
      cursor: "pointer",
      fontWeight: 600,
      height: 32,
    },
    btnConfirm: {
      padding: "8px 16px",
      backgroundColor: "#FF0000",
      border: "none",
      borderRadius: 10,
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
      height: 32,
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>Cancel Order ?</div>
        <div style={styles.content}>
          <p style={{fontSize: 17, fontWeight: 700,}}>
            <strong>
              Are you sure you want to cancel the following Order?
            </strong>
          </p>
          <div style={styles.row}>
            <span style={styles.label}>Order Number :</span>
            <span style={{fontSize: 16, fontWeight: 400,marginLeft: '60px'}}>#15</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Refundable Amount :</span>
            <span style={{fontSize: 16, fontWeight: 400, marginLeft: '20px'}}>₹ 480</span>
          </div>
          <p style={styles.note}>
            This Order will be cancelled and KOT will be updated.
          </p>
        </div>
        <div style={styles.footer}>
          <button style={styles.btnBack} onClick={onBack}>
            Go Back
          </button>
          <button style={styles.btnConfirm} onClick={onConfirm}>
            Yes, Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
