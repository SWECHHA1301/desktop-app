import React, { useState } from "react";
import { ChevronLeft, X } from "lucide-react";
import { QrCode } from "../Common/Icons";

const PaymentModal = ({ onClose }) => {
  const [selectedPayment, setSelectedPayment] = useState("UPI");

  const commonSymbolStyle = {
    position: "absolute",
    left: 8,
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: "#333",
  };

  const paymentOptions = [
    {
      key: "UPI",
      label: "UPI",
      description: "Scan the QR Code to pay",
      content: (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}>
          <QrCode />
        </div>
      ),
    },
    {
      key: "Card",
      label: "Card",
      description: "Swipe and Pay",
      content: (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 5 }}>
            <div>
              <div style={{ color: "#797979", fontWeight: 500 }}>Card last 4 digits</div>
              <div style={{ fontWeight: 400, fontSize: 12 }}>XXXX-XXXX-XXXX-1234</div>
            </div>
            <div>
              <div style={{ color: "#797979", fontWeight: 500 }}>Transaction ID</div>
              <div style={{ fontWeight: 400, fontSize: 12 }}>t266372XXXX</div>
            </div>
          </div>
          <div style={{ marginTop: 10, marginLeft: 40, fontSize: 12, color: "#797979" }}>
            <div>Status</div>
            <span style={{
              backgroundColor: "#F7DFB8",
              color: "#E38417",
              padding: "2px 8px",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: "bold",
              display: "inline-block",
              marginTop: 4,
            }}>pending</span>
          </div>
        </>
      ),
    },
    {
      key: "Cash",
      label: "Cash",
      description: "Pay in cash",
      content: (
        <div style={{ display: "flex", justifyContent: "space-between", gap: 20, marginTop: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, fontSize: 14 }}>
            <span>Cash Received</span>
            <div style={{ position: "relative", display: "inline-block" }}>
              <span style={commonSymbolStyle}>₹</span>
              <input
                type="text"
                defaultValue="00.00"
                style={{
                  paddingLeft: 20,
                  borderRadius: 10,
                  border: "1px solid #797979",
                  padding: "4px 8px",
                  width: 80,
                  textAlign: "right",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, fontSize: 14 }}>
            <span>Return Amount</span>
            <span>₹ 00.00</span>
          </div>
        </div>
      ),
    },
    {
      key: "Split",
      label: "Split",
      description: "Pay in multiple methods",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
          {["Cash", "UPI", "Card"].map(method => (
            <div key={method} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{method} :</span>
              <div style={{ position: "relative", display: "inline-block" }}>
                <span style={commonSymbolStyle}>₹</span>
                <input
                  type="text"
                  defaultValue="00.00"
                  style={{
                    paddingLeft: 20,
                    borderRadius: 10,
                    border: "1px solid #ccc",
                    padding: "4px 8px",
                    width: 100,
                    textAlign: "right",
                  }}
                />
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Return :</span>
            <span>₹ 00.00</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
      marginTop: 30,
    }}>
      <div style={{
        background: "#fff",
        width: "90%",
        maxWidth: "852px",
        height: "90vh",
        borderRadius: 10,
        boxShadow: "0 0 10px #0002",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          background: "#3f51b5",
          height: 66,
          color: "white",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
        }}>
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            color: "white",
            fontSize: 16,
            cursor: "pointer",
          }}>
            <ChevronLeft size={18} />
            <span>Back</span>
          </button>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
            <X />
          </button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, padding: 20, display: "flex", gap: 20, overflow: "hidden" }}>
          {/* Charges Section */}
          <div style={{ width: 300, flexShrink: 0, overflow: "hidden" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 10,
            }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#555" }}>Charges</span>
              <span style={{ fontSize: 14, color: "#3658BF", fontWeight: 500 }}>Additional Charges</span>
            </div>
            <div style={{ marginTop: 10 }}>
              {["Subtotal", "Taxes", "Discount", "Coupon", "Round off", "Tip amount", "Added Charges 1"].map((item) => (
                <div key={item} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px 0",
                  margin: "0 30px",
                }}>
                  <span>{item}</span>
                  <span>
                    {(item.includes("Tip") || item.includes("Added")) ? (
                      <div style={{ position: "relative", display: "inline-block" }}>
                        <span style={commonSymbolStyle}>₹</span>
                        <input
                          type="text"
                          defaultValue="00.00"
                          style={{
                            paddingLeft: 20,
                            borderRadius: 10,
                            border: "1px solid #797979",
                            textAlign: "right",
                            height: 36,
                            width: 65,
                            borderRadius: 10,
                          }}
                        />
                      </div>
                    ) : (
                      <>
                        <span>₹</span> 00.00
                      </>
                    )}
                  </span>
                </div>
              ))}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderTop: "1px solid #797979",
                borderBottom: "1px solid #797979",
                margin: "10px 30px 0",
              }}>
                <strong>Total Payable</strong>
                <strong>₹ 00.00</strong>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: 2, backgroundColor: "#797979", margin: "0 20px" }} />

          {/* Payment Section */}
          <div style={{ flex: 1, overflowY: "auto", paddingRight: 10, display: "flex", flexDirection: "column" }}>
            <div style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 25,
            }}>
              <h3 style={{ color: "#797979", fontSize: 16, fontWeight: 700 }}>Payment Method</h3>
              {paymentOptions.map((option) => (
                <div
                  key={option.key}
                  onClick={() => setSelectedPayment(option.key)}
                  style={{
                    padding: 10,
                    width: 279,
                    marginBottom: 10,
                    marginLeft: 30,
                    borderRadius: 10,
                    border: selectedPayment === option.key ? "2px solid #3658BF" : "none",
                  }}
                >
                  <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedPayment === option.key}
                        onChange={() => setSelectedPayment(option.key)}
                        style={{
                          accentColor: "#3658BF",
                          width: 24,
                          height: 24,
                          verticalAlign: "middle",
                        }}
                      />
                      <strong style={{ marginLeft: 8, color: selectedPayment === option.key ? "#3658BF" : "#000" }}>
                        {option.label}
                      </strong>
                    </div>
                    <span>₹ 00.00</span>
                  </label>
                  <p style={{ color: "#797979", marginTop: 4, marginLeft: 28 }}>{option.description}</p>
                  {selectedPayment === option.key && option.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          justifyContent: "flex-end",
          padding: "15px 20px",
          gap: 10,
          borderTop: "1px solid #ddd",
          background: "#f0f0f0",
        }}>
          <button style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: 6, background: "white", cursor: "pointer" }}>Cancel</button>
          <button style={{ padding: "8px 12px", border: "none", borderRadius: 6, background: "#3f51b5", color: "white", cursor: "pointer" }}>Save</button>
          <button style={{ padding: "8px 12px", border: "none", borderRadius: 6, background: "#3f51b5", color: "white", cursor: "pointer" }}>Save & Print</button>
          <button style={{ padding: "8px 12px", border: "none", borderRadius: 6, background: "#3f51b5", color: "white", cursor: "pointer" }}>Save & eBill</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
