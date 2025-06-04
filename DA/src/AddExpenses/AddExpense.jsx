import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import SaveButton from '../Common/SaveButton';
import OtherCharges from './components/OtherCharges';
import PaymentPaid from './components/PaymentPaid';
import './AddExpense.css'; // Ensure your drawer CSS is imported here

export default function AddExpense() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  

  return (
    <div style={{ width: '100%', maxWidth: '1318px', height: '885px', backgroundColor: '#D4DAED', padding: '16px 24px' ,
    
    }}>
      {/* Header */}
      <div style={{ width:'100%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '700',
          fontSize: '16px',
          color: '#3658BF',
          
        }}>
          <ChevronLeft style={{ color: "white", width: "20px" }} />
          <ChevronRight style={{ color: "black", width: "20px" }} />
          <p>Add Product</p>
        </div>
        <SaveButton />
      </div>

      {/* Layout container */}
      <div className={isDrawerOpen ? 'addexpense-layout-open' : 'addexpense-layout'}>
        {/* Main Form Card */}
        <div className="addexpense-form-box">
          <p style={{
            fontSize: '24px', fontWeight: '700', lineHeight: '100%', padding: '21px 32px',
            borderBottom: '1px solid #D4DAED'
          }}>Add Sale</p>

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 16px', borderBottom: '1px solid #D4DAED'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '100%', color: '#939191' }}>Invoice No.</p>
              <p style={{ fontSize: '16px', fontWeight: '700', lineHeight: '100%' }}>1/24-25</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginRight: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '100%', color: '#939191' }}>Date</p>
                <p style={{ fontSize: '10px', fontWeight: '400', lineHeight: '100%', color: '#939191' }}>(DD/MM/YYYY)</p>
              </div>
              <p style={{ fontSize: '16px', fontWeight: '700', lineHeight: '100%' }}>3/05/2025</p>
            </div>
          </div>

          <OtherCharges />
          <PaymentPaid setIsDrawerOpen={setIsDrawerOpen} />
        </div>

        {/* Drawer */}
        {isDrawerOpen && (
          <div className="addexpense-payment-drawer">
            <div className="addexpense-drawer-header">
              <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Add Payment Type</h3>
              <span className="addexpense-drawer-close" onClick={() => setIsDrawerOpen(false)}>X</span>
            </div>
            <div className="addexpense-drawer-body">

              <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
              <label>Payment Type</label>
             <select >
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="UPI">UPI</option>
                  </select>
              </div>

              <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
              <label>Amount</label>
              <input type="number" placeholder="e.g. ₹500" />
              </div>

              <SaveButton/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
