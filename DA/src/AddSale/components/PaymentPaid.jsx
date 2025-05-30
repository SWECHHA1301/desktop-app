import React from "react";
import { ChevronDown ,Bell} from "lucide-react";

export default function PaymentPaid({ setIsDrawerOpen }) {
  return (
    <div className="paymentpaid-section">
      <div className="section-header">
        <p>Payment Paid</p>
        <ChevronDown color="#939191" />
      </div>

      <div className="payment-grid">
        <div className="payment-row">
          <div>
            <label style={{ color: '#797979', fontSize: "14px", fontWeight: '400' }}>Payment</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
              <input placeholder="Cash" defaultValue='Cash' />
              <input placeholder="Card" defaultValue='Card' />
            </div>
          </div>

          <div>
            <label style={{ color: '#797979', fontSize: "14px", fontWeight: '400' }}>Amount</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
              <input placeholder="Amount" />
              <input placeholder="Amount" />
            </div>
          </div>
        </div>
        
        <div className="add-payment-btn">
        <button  onClick={() => setIsDrawerOpen(true)}>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'16.5px'}}>
            <div className="add-payment-icon"><p>+</p></div>
          <p> Add Payment Type</p></div>
        </button></div>
        
      </div>
    </div>
  );
}
