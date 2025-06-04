import React from "react";
import PurchaseReceipt from "../Receipt/PurchaseReciept";

const ProductCard = () => {
  const products = new Array(16).fill({
    name: "Pizza",
    price: 240,
  });

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 75px)",
        overflow: "hidden",
        padding: "0 12px 12px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          marginTop: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#FFF",
            height: 52,
            width: "100%",
            borderRadius: 10,
            padding: "12px 20px",
            position: "sticky",
            top: 0,
            zIndex: 10,
            marginBottom: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              style={{
                color: "#000",
                borderRadius: 10,
                border: "0.5px solid #000",
                fontFamily: "Inter",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                width: 88,
                height: 20,
              }}
            >
              BreakFast
            </button>
            <button
              style={{
                color: "#000",
                borderRadius: 10,
                border: "0.5px solid #000",
                fontFamily: "Inter",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                width: 88,
                height: 20,
              }}
            >
              Lunch
            </button>
            <button
              style={{
                color: "#000",
                borderRadius: 10,
                border: "0.5px solid #000",
                fontFamily: "Inter",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                width: 88,
                height: 20,
              }}
            >
              Dinner
            </button>
            <div
              style={{
                width: 20,
                height: 20,
                border: "1.5px solid #ccc",
                borderRadius: 4,
                backgroundColor: "limegreen",
              }}
            ></div>
            <div
              style={{
                width: 20,
                height: 20,
                border: "1.5px solid red",
                borderRadius: 4,
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <span
                style={{
                  content: '"▲"',
                  color: "red",
                  fontSize: 10,
                  position: "absolute",
                }}
              >
                ▲
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingRight: 8,
            paddingBottom: 8,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            height: "auto",
          }}
        >
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                border: "2px solid #e0e0e0",
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 192,
              }}
            >
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#d3d3d3",
                  height: 121,
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 12px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#333",
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#000",
                      marginTop: 4,
                    }}
                  >
                    ₹{item.price}
                  </p>
                </div>
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #000",
                    borderRadius: "50%",
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000",
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "28%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: 0,
        }}
      >
        <PurchaseReceipt />
      </div>
    </div>
  );
};

export default ProductCard;