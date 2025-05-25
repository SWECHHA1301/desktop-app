import React from "react";
import {ChevronLeft, X} from "lucide-react";
import {QrCode} from "./Common/Icons"
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
                    value="₹00.00"
                    readOnly
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


            <div className="payment-option no-border">
             <label >
              <div className="payment-left">
               <input type="radio" name="payment" />
               <strong style={{ color: "#3658BF", marginLeft: "6px" }}>Card</strong>
               </div>
             </label>
             <p>Text</p>
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
                  <strong style={{ color: "#3658BF", marginLeft: "6px" }}>Cash</strong>
                </div>
                <span>₹ 00.00</span>
              </label>
              <p>Pay in cash</p>
            
              <div className="cash-inputs">
                <div className="cash-row">
                  <span>Cash Received</span>
                  <input type="text" value="₹ 00.00" readOnly className="cash-input"
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
                <strong style={{ color: "#3658BF", marginLeft: "6px" }}>Split</strong>
                </div> 
                 <span>₹ 00.00</span>
            </label>
            <p>Pay in multiple methods</p>
          
            <div className="split-grid">
              <div className="split-row">
                <span>Cash :</span>
                <input type="text" value="₹ 00.00" readOnly className="split-input" />
              </div>
              <div className="split-row">
                <span>UPI    :</span>
                <input type="text" value="₹ 00.00" readOnly className="split-input" />
              </div>
              <div className="split-row">
                <span>Card   :</span>
                <input type="text" value="₹ 00.00" readOnly className="split-input" />
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
