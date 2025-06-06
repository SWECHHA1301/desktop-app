import React from "react";
import { ChevronLeft, ChevronRight, BarcodeIcon, Plus } from "lucide-react";

const products = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  name: "Product Name",
  stock: "8",
  barcode: "27845884583",
  price: "₹52",
  revenue: "13000",
  img: "https://th.bing.com/th/id/OIP.egsUk-BcmvCjh7-aFIlhhAHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7",
}));

export default function ManageProduct() {
  const styles = {
    mainContainer: {
      maxWidth: "1305px",
      width: "100%",
      fontFamily: "Arial, sans-serif",
      background: "#E2E6F3",
    },
    navContainer: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "24px",
      flexDirection: "row",
      marginBottom: "24px",
    },
    chevronWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      position: "relative",
    },
    productsLabel: {
      color: "#3658BF",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "100%",
    },
    scrollWrapper: {
      width: "100%",
      height: "70vh",
      overflowY: "scroll",
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    },
    productCard: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      maxWidth: "288px",
      maxHeight: "415px",
      boxShadow: "4px 4px 4px #3658BF40",
    },
    productImage: {
      width: "100%",
       maxHeight: "288px",
      objectFit: "contain",
    
      // border: "1.5px solid rgb(31, 31, 31)",
      borderRadius: "10px 10px 0 0",
    },
  
    textBlock: {
      padding: " 6px 16px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    productName: {
      fontWeight: "400",
      fontSize: "20px",
    },
    barcodeRow: {
      fontWeight: "200",
      fontSize: "12px",
      color: "#797979",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    dividerRow: {
      borderTop: "2.5px solid #D9D9D9",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px 12px 16px",
    },
    infoColumn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    label: {
      fontWeight: "400",
      fontSize: "14px",
      color: "#797979",
    },
    value: {
      fontWeight: "500",
      fontSize: "16px",
    },
    stockValue: {
      color: "green",
      fontWeight: "400",
      fontSize: "16px",
    },
    addButtonWrapper: {
      display: "flex",
      position: "absolute",
      top: "90%",
      left: "80%",
    },
    button: {
      width: "246px",
      height: "70px",
      backgroundColor: "#3658BF",
      color: "#fff",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      display: "flex",
      gap: "16px",
      alignItems: "center",
      justifyContent: "center",
    },
    addIcon: {
      border: "2px solid white",
      borderRadius: "50%",
      width: "24px",
      height: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      cursor: "pointer",
    },
    addText: {
      fontSize: "20px",
      fontWeight: "700",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.navContainer}>
        <div style={styles.chevronWrapper}>
          <ChevronLeft style={{ color: "white", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
        </div>
        <p style={styles.productsLabel}>Products</p>
      </div>

      <div style={styles.scrollWrapper}>
        <div style={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img src={product.img} alt="product" style={styles.productImage} />
              <div style={styles.cardInfo}>
                <div style={styles.textBlock}>
                  <p style={styles.productName}>{product.name}</p>
                  <div style={styles.barcodeRow}>
                    <BarcodeIcon size={14} style={{ color: "#797979" }} />
                    <p>{product.barcode}</p>
                  </div>
                </div>
                <div style={styles.dividerRow}>
                  <div style={styles.infoColumn}>
                    <p style={styles.label}>Amount</p>
                    <p style={styles.value}>{product.price}</p>
                  </div>
                  <div style={styles.infoColumn}>
                    <p style={styles.label}>Stock Qty</p>
                    <span style={styles.stockValue}>{product.stock}</span>
                  </div>
                  <div style={styles.infoColumn}>
                    <p style={styles.label}>Revenue</p>
                    <p>{product.revenue}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div style={styles.addButtonWrapper}>
            <button style={styles.button}>
              <div style={styles.addIcon}>
                <Plus size={18} />
              </div>
              <p style={styles.addText}>Add Products</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

