import React from "react";
import {ChevronLeft, X} from "lucide-react";
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
              <h3>Charges</h3>
              <a href="#" style={{
                color: "#3658BF"
              }}>
                Additional Charges</a>
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
                      borderRadius: "10px",
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

          <div className="payment">
            <h3 className="payment-title">Payment Method</h3>

            <div
              className="payment-option selected"
              style={{
                borderRadius: "10px",
                border: "2px solid #3658BF",
                height: "202px"
              }}
            >
              <label>
                <input type="radio" name="payment" defaultChecked />
                <strong>UPI</strong> <span>₹ 00.00</span>
              </label>
              <p>Scan the QR Code to pay</p>
              <div className="qr-code">[QR Code]</div>
            </div>

            <div className="payment-option no-border">
             <label>
               <input type="radio" name="payment" />
               <strong>Card</strong> <span>Text</span>
             </label>
           </div>

            <div className="payment-option selected"
             style={{
                borderRadius: "10px",
                border: "2px solid #3658BF",
                height: "134px"
              }}>
              <label>
                <input type="radio" name="payment" />
                <strong>Cash</strong> <span>₹ 00.00</span>
              </label>
              <p>Pay in cash</p>
              <div className="cash-inputs">
                <div>
                  Cash Received <input type="text" value="₹ 00.00" readOnly />
                </div>
                <div>
                  Return Amount <input type="text" value="₹ 00.00" readOnly />
                </div>
              </div>
            </div>

            <div className="payment-option"
            style={{
                borderRadius: "10px",
                border: "2px solid #3658BF",
                height: "134px"
              }}>
              <label>
                <input type="radio" name="payment" />
                <strong>Split</strong> <span>₹ 00.00</span>
              </label>
              <p>Pay in multiple methods</p>
              <div style={{ border: 0 }}>
                Cash:{" "}
                 <input type="text" value="₹ 00.00" readOnly 
               />
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
