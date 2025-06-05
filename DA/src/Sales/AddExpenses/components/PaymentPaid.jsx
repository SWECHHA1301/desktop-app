import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown } from "lucide-react";

export default function PaymentPaid({ setIsDrawerOpen }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const inputStyle = {
    height: '27px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#E3E6EE',
    color: 'black',
    fontSize: '13px',
    fontWeight: '400',
    padding: '0 10px',
    width: '100%',
    maxWidth:'390',
  };

  const addPaymentButton = {
    color: '#3658BF',
    border: '1px solid #3658BF',
    height: '30px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
    padding: '5px 8px',
    width: '100%',
    alignItems: 'center',
    fontSize: '13px',
    fontWeight: '700',
    cursor:'pointer'
    // maxWidth:'396px'
  };

  return (
    <>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid #D4DAED' }}>
        <div onClick={() => setIsOpen(!isOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '16px', fontWeight: '500', lineHeight: '100%' }}>Payment Paid</p>
          <div style={{ cursor: 'pointer' }}>
            {isOpen ? (
              <ChevronDown style={{ color: "#939191" }} size={20} />
            ) : (
              <ChevronRight style={{ color: "#939191" }} size={20} />
            )}
          </div>
        </div>

        {isOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '1rem'
              }}
            >
              {/* Payment Dropdowns */}
              <div>
                <label style={{ color: '#797979', fontSize: "14px", fontWeight: '400' }}>Payment</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                  <select style={inputStyle} defaultValue="Cash">
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="UPI">UPI</option>
                  </select>
                  <select style={inputStyle} defaultValue="Card">
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="UPI">UPI</option>
                  </select>
                </div>
              </div>

              {/* Amount Fields */}
              <div>
                <label style={{ color: '#797979', fontSize: "14px", fontWeight: '400' }}>Amount</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                  <input style={inputStyle} type='number' placeholder="Amount" />
                  <input style={inputStyle} type='number' placeholder="Amount" />
                </div>
              </div>
            </div>

            <button style={addPaymentButton} onClick={() => setIsDrawerOpen(true)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <p style={{ margin: 0, fontSize: '16px' }}>+</p>
                <p style={{ margin: 0 }}>Add Payment Type</p>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Total Amount Button */}
      <div style={{ padding: '16px 24px' }}>
        <button
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "12px",
            width: "100%",
            height: "42px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: "400",
          
          }}
        >
          <p style={{ margin: 0 }}>Total Amount:</p>
          <p style={{ margin: 0 }}>₹18000.00</p>
        </button>
      </div>
    </>
  );
}

