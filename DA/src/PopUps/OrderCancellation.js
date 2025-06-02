import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

export default function OrderCancellation({ onClose }) {
  const [refundType, setRefundType] = useState('partial');

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContainer: {
      width: '100%',
      maxWidth: '556px',
      height: '544px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      cursor: 'pointer',
      color: 'white',
    },
    header: {
      backgroundColor: '#3658BF',
      height: '49px',
      borderRadius: '10px 10px 0 0',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
    },
    headerText: {
      fontWeight: 700,
      fontSize: '20px',
      color: 'white',
    },
    main: {
      padding: '24px 40px 0 30px',
      flex: 1,
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      marginBottom: '16px',
    },
    label: {
      fontWeight: 700,
      color: '#000',
      fontSize: '16px',
    },
    value: {
      color: '#000',
      fontWeight: '500',
    },
    selectWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    select: {
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      width: '100%',
      height: '30px',
      padding: '4px 28px 4px 10px',
      border: '1px solid #797979',
      borderRadius: '5px',
      color: '#797979',
      fontSize: '14px',
      background: 'white',
    },
    chevron: {
      position: 'absolute',
      right: '8px',
      pointerEvents: 'none',
    },
    divider: {
      borderTop: '1px solid #ccc',
      margin: '16px 0',
    },
    refundSection: {
      marginTop: '16px',
    },
    radioRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginTop: '8px',
    },
    amountInput: {
      width: '100px',
      height: '26px',
      paddingLeft: '20px',
      border: '1px solid #797979',
      borderRadius: '5px',
    },
    rupeePrefix: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    rupeeSymbol: {
      position: 'absolute',
      left: '8px',
      color: '#797979',
      fontSize: '14px',
      pointerEvents: 'none',
    },
    footer: {
      backgroundColor: '#E2E6F3',
      borderRadius: '0 0 10px 10px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '16px 24px',
      gap: '16px',
    },
    cancelBtn: {
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '10px',
      color: '#3658BF',
      fontWeight: 700,
      fontSize: '12px',
      padding: '8px 16px',
      cursor: 'pointer',
    },
    confirmBtn: {
      backgroundColor: '#3658BF',
      border: 'none',
      borderRadius: '10px',
      color: 'white',
      fontWeight: 700,
      fontSize: '12px',
      padding: '8px 16px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modalContainer}>
        {/* Close Icon (optional) */}
        <div onClick={onClose} style={styles.closeButton}>
          <X size={20} />
        </div>

        <div style={styles.header}>
          <h2 style={styles.headerText}>Order Cancellation</h2>
        </div>

        <div style={styles.main}>
          {/* Table Number Section */}
          <div style={styles.row}>
            <span style={styles.label}>Table Number :</span>
            <div style={styles.selectWrapper}>
              <select style={styles.select}>
                <option>Non AC</option>
                <option>AC</option>
              </select>
              <ChevronDown size={16} style={styles.chevron} />
            </div>
            <div style={styles.selectWrapper}>
              <select style={styles.select}>
                <option>T 1</option>
                <option>T 2</option>
                <option>T 3</option>
              </select>
              <ChevronDown size={16} style={styles.chevron} />
            </div>
          </div>

          {/* Customer Details */}
          <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '10px' }}>Customer Details</h4>
          <div style={styles.row}>
            <span style={{ ...styles.label, paddingLeft: '10px', color: '#797979' }}>Name :</span>
            <span style={{ ...styles.value, marginRight: '24px' }}>Airy</span>
            <span style={{ ...styles.label, color: '#797979' }}>Phone No. :</span>
            <span style={styles.value}>8263200401</span>
          </div>
          <div style={styles.row}>
            <span style={{ ...styles.label, paddingLeft: '10px', color: '#797979' }}>No. of items :</span>
            <span style={styles.value}>6</span>
          </div>

          <div style={styles.divider}></div>

          {/* Reasons */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{ ...styles.label, display: 'block', marginBottom: '8px' }}>Reasons</span>
            <div style={{ ...styles.selectWrapper, maxWidth: '363px', marginLeft: '55px' }}>
              <select style={{ ...styles.select, width: '100%', height: '26px', borderRadius: 10 }}>
                <option>Select a reason</option>
              </select>
              <ChevronDown size={16} style={styles.chevron} />
            </div>
          </div>

          {/* Refund Section */}
          <div style={styles.refundSection}>
            <div style={{ display: 'flex', fontWeight: 700 }}>
              <h3 style={styles.label}>Refund Amount </h3>
              <h3 style={{ marginLeft: '20px' }}>₹ 480</h3>
            </div>

            <div style={styles.radioRow}>
              <input
                type="radio"
                id="complete"
                name="refund"
                value="complete"
                checked={refundType === 'complete'}
                onChange={() => setRefundType('complete')}
              />
              <label htmlFor="complete">Complete Refund</label>
              <span style={{ marginLeft: '20px' }}>₹ 480</span>
            </div>

            <div style={styles.radioRow}>
              <input
                type="radio"
                id="partial"
                name="refund"
                value="partial"
                checked={refundType === 'partial'}
                onChange={() => setRefundType('partial')}
              />
              <label htmlFor="partial">Partial Refund</label>
            </div>

            {refundType === 'partial' && (
              <div style={styles.radioRow}>
                <span>Amount :</span>
                <div style={styles.rupeePrefix}>
                  <span style={styles.rupeeSymbol}>₹</span>
                  <input type="number" defaultValue={100} style={styles.amountInput} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={styles.footer}>
          <button style={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button style={styles.confirmBtn}>Confirm Cancellation</button>
        </div>
      </div>
    </div>
  );
}

