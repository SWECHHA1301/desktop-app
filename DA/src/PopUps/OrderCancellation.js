import React, { useState } from 'react';

const OrderCancellation = ({ onClose, onConfirm }) => {
  const [refundType, setRefundType] = useState('partial');
  const [partialAmount, setPartialAmount] = useState(100);
  const refundAmount = 480;

  return (
    <div style={styles.backdrop}>
      <div style={styles.popup}>
        <div style={styles.header}>Order Cancellation</div>

        <div style={styles.section}>
          <div style={styles.row}>
            <span>Table Number :</span>
            <select style={styles.selectBox}>
              <option>Non AC</option>
            </select>
            <select style={styles.selectBox}>
              <option>T 2</option>
            </select>
          </div>

          <div style={{ marginTop: 10 }}>
            <div style={styles.label}>Customer Details</div>
            <div style={styles.row}>
              <span style={{color: '#797979', fontSize: '16px', fontWeight: 700}}>Name :</span>
              <strong style={styles.infoText}>Airy</strong>
              <span style={{ marginLeft: 83,color: '#797979', fontSize: '16px', fontWeight: 700 }}>Phone No. :</span>
              <strong style={styles.infoText}>8263200401</strong>
            </div>
            <div style={styles.row}>
              <span style={{color: '#797979', fontSize: '16px', fontWeight: 700}}>No. of items :</span>
              <strong style={styles.infoText}>6</strong>
            </div>
          </div>
        </div>

        <hr />

        <div style={styles.section}>
          <label style={styles.label}>Reasons</label>
          <select style={styles.dropdown}>
            <option>Reasons</option>
          </select>
        </div>

        <div style={styles.section}>
          <div style={styles.row}>
            <span style={styles.labelBold}>Refund Amount</span>
            <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>₹ {refundAmount}</span>
          </div>

          <div style={styles.radioRow}>
            <input
              type="radio"
              checked={refundType === 'complete'}
              onChange={() => setRefundType('complete')}
            />
            <label style={{ marginLeft: 8 }}>Complete Refund</label>
            <span style={{ marginLeft: 'auto' }}>₹ {refundAmount}</span>
          </div>

          <div style={styles.radioRow}>
            <input
              type="radio"
              checked={refundType === 'partial'}
              onChange={() => setRefundType('partial')}
            />
            <label style={{ marginLeft: 8 }}>Partial Refund</label>
          </div>

          {refundType === 'partial' && (
            <div style={styles.partialRow}>
              <span>Amount</span>
              <div style={styles.amountInput}>
                <span style={{ padding: '4px 8px' }}>₹</span>
                <input
                  type="number"
                  value={partialAmount}
                  onChange={(e) => setPartialAmount(e.target.value)}
                  style={styles.inputBox}
                />
              </div>
            </div>
          )}
        </div>

        <div style={styles.footer}>
          <button onClick={onClose} style={styles.cancelButton}>Cancel</button>
          <button
            onClick={() => onConfirm({ refundType, partialAmount })}
            style={styles.confirmButton}
          >
            Confirm Cancellation
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    
  },
  popup: {
    width: 556,
    height: 544,
    background: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    fontFamily: 'sans-serif',
  },
  header: {
    background: '#3658BF',
    color: '#fff',
    padding: '14px 24px',
    fontSize: 20,
    fontWeight: 700,
  },
  section: {
    padding: '16px 20px'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 14
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 6
  },
  labelBold: {
    fontSize: 14,
    fontWeight: 700
  },
  infoText: {
    marginLeft: 6,
    fontWeight: 500
  },
  selectBox: {
    height: 36,
    width: 110,
    marginLeft: 8,
    padding: '6px 12px',
    borderRadius: 10,
    border: '1px solid #ccc',
    fontSize: 14
  },
  dropdown: {
    width: '100%',
    height: 36,
    padding: '6px 12px',
    borderRadius: 10,
    border: '1px solid #ccc',
    fontSize: 14,
    marginRight: 12
  },
  radioRow: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    fontSize: 14
  },
  partialRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 10
  },
  amountInput: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: 10,
    overflow: 'hidden',
    height: 36
  },
  inputBox: {
    border: 'none',
    padding: '6px 10px',
    outline: 'none',
    width: 100,
    background: 'white',
    fontSize: 14
  },
  footer: {
    background: '#f3f3f3',
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10
  },
  cancelButton: {
    padding: '8px 16px',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: 10,
    cursor: 'pointer',
    fontWeight: 500
  },
  confirmButton: {
    padding: '8px 16px',
    background: '#3658BF',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    cursor: 'pointer',
    fontWeight: 700
  }
};

export default OrderCancellation;

