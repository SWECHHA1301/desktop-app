import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import SaveButton from '../../Common/SaveButton';
import OtherCharges from './components/OtherCharges';
import PaymentPaid from './components/PaymentPaid';

export default function AddExpense() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const styles = {
  addExpenseLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    gap: '24px',
  },
  addExpenseFormBox: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '700px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  addExpensePaymentDrawer: {
    width: '320px',
    height: '787px',
    backgroundColor: 'white',
    boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  addExpenseDrawerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addExpenseDrawerClose: {
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  addExpenseDrawerBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    padding: '0 10px',
    backgroundColor: '#E3E6EE',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    maxWidth: '390px',
    height: '27px',
  },
 
};

  

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
      <div style={styles.addExpenseLayout}>
        {/* Main Form Card */}
        <div style={styles.addExpenseFormBox}>
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
          <div style={styles.addExpensePaymentDrawer}>
            <div style={styles.addExpenseDrawerHeader}>
              <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Add Payment Type</h3>
              <span style={styles.addExpenseDrawerClose} onClick={() => setIsDrawerOpen(false)}>X</span>
            </div>
            <div style={styles.addExpenseDrawerBody}>

              <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
              <label>Payment Type</label>
             <select style={styles.input}>
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="UPI">UPI</option>
                  </select>
              </div>

              <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
              <label>Amount</label>
              <input type="number" placeholder="e.g. ₹500"  style={styles.input}/>
              </div>

              <SaveButton/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
