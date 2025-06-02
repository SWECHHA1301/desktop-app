import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function OrderCancellation() {
  const [refundType, setRefundType] = useState('partial');

  const styles = {
    container: {
      width: '100%',
      maxWidth: '556px',
      height: 'auto',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '8px 8px 4px 0 #3658BF40',
      display: 'flex',
      flexDirection: 'column',
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
      padding: '24px 40px 0 40px',
      flex: 1,
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px',
    },
    label: {
      fontWeight: 600,
      color: '#000',
    },
    value: {
      color: '#000',
    },
    selectBtn: {
      display: 'flex',
      padding: '6px 12px',
      border: '1px solid #797979',
      borderRadius: '5px',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: '#797979',
      background: 'none',
      cursor: 'pointer',
    },
    divider: {
      borderTop: '1px solid #ccc',
      margin: '16px 0',
    },
    select: {
      width: '100%',
      height: '32px',
      border: '1px solid #797979',
      borderRadius: '5px',
      padding: '0 8px',
      color: '#797979',
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
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.headerText}>Order Cancellation</h2>
      </div>

      <div style={styles.main}>
        <div style={styles.row}>
          <span style={styles.label}>Table Number :</span>
          <button style={styles.selectBtn}>Non AC <ChevronDown size={16} /></button>
          <button style={styles.selectBtn}>T 2 <ChevronDown size={16} /></button>
        </div>

        <div style={styles.row}><span style={styles.label}>Name :</span><span style={styles.value}>Airy</span></div>
        <div style={styles.row}><span style={styles.label}>Phone No. :</span><span style={styles.value}>8263200401</span></div>
        <div style={styles.row}><span style={styles.label}>No. of items :</span><span style={styles.value}>6</span></div>

        <div style={styles.divider}></div>

        <div style={styles.row}>
          <select style={styles.select}>
            <option>Reasons</option>
          </select>
        </div>

        <div style={styles.refundSection}>
          <h3 style={styles.label}>Refund Amount ₹ 480</h3>

          <div style={styles.radioRow}>
            <input type="radio" id="complete" name="refund" value="complete" checked={refundType === 'complete'} onChange={() => setRefundType('complete')} />
            <label htmlFor="complete">Complete Refund</label>
            <span>₹ 480</span>
          </div>

          <div style={styles.radioRow}>
            <input type="radio" id="partial" name="refund" value="partial" checked={refundType === 'partial'} onChange={() => setRefundType('partial')} />
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
        <button style={styles.cancelBtn}>Cancel</button>
        <button style={styles.confirmBtn}>Confirm Cancellation</button>
      </div>
    </div>
  );
}
