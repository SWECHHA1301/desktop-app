import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from "lucide-react";

export default function PaymentPaid({ setIsDrawerOpen }) {
  const [isOpen, setIsOpen] = useState(true);

  const inputs = {
    height: '27px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#E3E6EE',
    color: 'black',
    fontSize: '12px',
    fontWeight: '400',
    maxWidth: '390px',
  };

  const addPaymentButton = {
    color: '#3658BF',
    border: '1px solid #3658BF',
    height: '30px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '16px',
    padding: '3px 1px',
    maxWidth: '394px',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: '700',
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ color: '#797979', fontSize: "14px", fontWeight: '400' }}>Payment</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                  <input style={inputs} type='text' placeholder="Cash" defaultValue='Cash' />
                  <input style={inputs} type='text' placeholder="Card" defaultValue='Card' />
                </div>
              </div>
              <div>
                <label style={{ color: '#797979', fontSize: "14px", fontWeight: '400' }}>Amount</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                  <input style={inputs} type='number' placeholder="Amount" />
                  <input style={inputs} type='number' placeholder="Amount" />
                </div>
              </div>
            </div>

            <button style={addPaymentButton} onClick={() => setIsDrawerOpen(true)}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16.5px' }}>
                <div><p>+</p></div>
                <p>Add Payment Type</p>
              </div>
            </button>
          </div>
        )}
      </div>

      <div style={{ padding: '16px 24px' }}>
        <button
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "16px",
            width: "100%",
            height: "42px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          <p>Total Amount:</p> <p>₹18000.00</p>
        </button>
      </div>
    </>
  );
}