import React from "react";

export default function CancelItemsModal({ onEdit, onCancel }) {
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
      padding: "30px",
    },
    label: {
      color: "#797979",
      fontSize: 16,
      fontWeight: 700,
      marginLeft: "40px",
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
      marginLeft: "20px",
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "16px 20px",
      backgroundColor: "#f0f0f0",
      gap: 8,
    },
    btnEdit: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px 16px",
      backgroundColor: "#fff",
      border: "1px solid #3658BF",
      borderRadius: 10,
      color: "#3658BF",
      cursor: "pointer",
      fontWeight: 600,
      height: 32,
    },

    btnCancel: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
        <div style={styles.header}>Cancel Items ?</div>
        <div style={styles.content}>
          <p style={{ fontSize: 17, fontWeight: 700 }}>
            <strong>
              Are you sure you want to cancel the following items?
            </strong>
          </p>
          <div style={styles.row}>
            <span style={styles.label}>Item Name :</span>
            <span style={{ fontSize: 16, fontWeight: 400, marginLeft: "98px" }}>
              Pizza , Burger
            </span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Refundable Amount :</span>
            <span style={{ fontSize: 16, fontWeight: 400, marginLeft: "30px" }}>
              ₹ 480
            </span>
          </div>
          <p style={styles.note}>
            These items will be cancelled and KOT will be updated.
          </p>
        </div>
        <div style={styles.footer}>
          <button style={styles.btnEdit} onClick={onEdit}>
            No, Edit Items
          </button>
          <button style={styles.btnCancel} onClick={onCancel}>
            Yes, Cancel These Items
          </button>
        </div>
      </div>
    </div>
  );
}
