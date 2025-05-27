import React from "react";
import {ChevronLeft, X} from "lucide-react";
import {QrCode} from "../Common/Icons"
import "./PaymentModal.css";

const PaymentModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button className="back-btn">
          <ChevronLeft size={18} />
          <span>Back</span>
          </button>
          <button className="close-btn" onClick={onClose}><X />
          </button>
        </div>

        <div className="modal-body">
          <div className="charges-section">
          <div className="charges-header">
                <span className="charges-title">Charges</span>
                <span className="additional-link">Additional Charges</span>
              </div>
            <div className="charges-list">
              {[
                "Subtotal",
                "Taxes",
                "Discount",
                "Coupon",
                "Round off",
                "Tip amount",
                "Added Charges 1",
              ].map((item) => (
                <div className="charge-row" key={item}>
                  <span>{item}</span>
                  <span>
                    {item.includes("Tip") || item.includes("Added") ? (
                      <input
                    className="tip-box"
                    type="text"
                    defaultValue="₹00.00"
                    style={{
                      borderRadius: "20px",
                      border: "1px solid #797979",
                      padding: "3px 8px"
                    }}
                   />
                    ) : (
                      "₹00.00"
                    )}
                  </span>
                </div>
              ))}
              <div className="total-row">
                <strong>Total Payable</strong>
                <strong>₹ 00.00</strong>
              </div>
            </div>
          </div>

          <div className="vertical-divider"></div>
          
          <div className="payment-container" >
          <div className="payment">
            <h3 className="payment-title">Payment Method</h3>

            <div
              className="payment-option selected"
              style={{
                borderRadius: "10px",
                border: "2px solid #3658BF",
                padding: "10px",
              }}
            >
              <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="payment-left">
                  <input type="radio" name="payment" defaultChecked />
                  <strong style={{ color: "#3658BF", marginLeft: "6px" }}>UPI</strong>
                </div>
                <span>₹ 00.00</span>
              </label>
              <p>Scan the QR Code to pay</p>
            
              <div className="qr-code">
                <QrCode />
              </div>
            </div>


           <div
  className="payment-option"
  style={{
    borderRadius: "10px",
    border: "2px solid #3658BF",
    padding: "10px",
  }}
>
  <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div className="payment-left" style={{ display: "flex", alignItems: "center" }}>
      <input type="radio" name="payment" />
      <strong style={{ color: "#3658BF", marginLeft: "8px" }}>Card</strong>
      <div
      style={{
        width: "20px",
        height: "20px",
        marginLeft: "8px",
        background: "url('PopUps/card.png')",
        borderRadius: "4px",
      }}
    ></div>
    </div>
    <span>₹ 00.00</span>
  </label>

  <p style={{ marginTop: "5px", marginBottom: "10px" }}>Swipe and Pay</p>

  <div className="card-info" style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "5px", textAlign: "centre"}}>
    <div>
      <div style={{color: "#797979", fontWeight: "500"}}>Card last 4 digits</div>
      <div style={{ fontWeight: "400", fontSize: "12px" }}>XXXX-XXXX-XXXX-1234</div>
    </div>
    <div>
      <div style={{color: "#797979", fontWeight: "500"}}>Transaction ID</div>
      <div style={{ fontWeight: "400", fontSize: "12px" }}>t266372XXXX</div>
    </div>
  </div>

  <div className="card-status" style={{ marginTop: "10px",  marginLeft: "40px", fontSize: "12px", colo: "#797979" }}>
    <div>Status</div>
    <span
      style={{
        backgroundColor: "#F7DFB8",
        color: "#E38417",
        padding: "2px 8px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
        display: "inline-block",
        marginTop: "4px"
      }}
    >
      pending
    </span>
  </div>
</div>


            <div
              className="payment-option selected"
              style={{
                borderRadius: "10px",
                border: "2px solid #3658BF",
                padding: "10px",
              }}
            >
              <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div lassName="payment-left">
                  <input type="radio" name="payment" />
                  <strong style={{ color: "#3658BF", marginLeft: "8px" }}>Cash</strong>
                </div>
                <span>₹ 00.00</span>
              </label>
              <p>Pay in cash</p>
            
              <div className="cash-inputs">
                <div className="cash-row">
                  <span>Cash Received</span>
                  <input type="text"
                   defaultValue="₹ 00.00"
                  className="cash-input"
                  style={{
                    border: "1px solid #797979"
                  }} />
                </div>
                <div className="cash-row">
                  <span>Return Amount</span>
                  <span>₹ 00.00</span>
                </div>
              </div>
            </div>


        <div
            className="payment-option selected"
            style={{
              borderRadius: "10px",
              border: "2px solid #3658BF",
              padding: "10px",
            }}
          >
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div lassName="payment-left">
                <input type="radio" name="payment" />
                <strong style={{ color: "#3658BF", marginLeft: "8px" }}>Split</strong>
                </div> 
                 <span>₹ 00.00</span>
            </label>
            <p>Pay in multiple methods</p>
          
            <div className="split-grid">
              <div className="split-row">
                <span>Cash :</span>
                <input type="text" defaultValue="₹ 00.00" className="split-input" />
              </div>
              <div className="split-row">
                <span>UPI    :</span>
                <input type="text" defaultValue="₹ 00.00"  className="split-input" />
              </div>
              <div className="split-row">
                <span>Card   :</span>
                <input type="text" defaultValue="₹ 00.00" className="split-input" />
              </div>
              <div className="split-row">
                <span>Return :</span>
                <span>₹ 00.00</span>
              </div>
          </div>
       </div>

          </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
          <button className="save-print-btn">Save & Print</button>
          <button className="save-ebill-btn">Save & eBill</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
