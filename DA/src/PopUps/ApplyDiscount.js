import React, { useState } from 'react';

const ApplyDiscount = ({ onClose, onSave }) => {
  const [discountType, setDiscountType] = useState('Percentage');
  const [discountValue, setDiscountValue] = useState(5);
  const [reason, setReason] = useState('Customer Loyalty');
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState(false);

  const quickValues = [5, 10, 15, 20, 25];

  const handleApplyCoupon = () => {
    if (couponCode.trim() === '' || couponCode !== 'VALID2025') {
      setCouponError(true);
    } else {
      setCouponError(false);
      // apply valid logic here
    }
  };

  const handleClearCoupon = () => {
    setCouponCode('');
    setCouponError(false);
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modalDiscount}>
        <div style={styles.header}>
          <span>Apply Discount</span>
          <span style={styles.helpIcon}>?</span>
        </div>

        <div style={styles.content}>
          <div style={styles.section}>
            <div style={styles.subHeader}>
              <span style={{ fontWeight: 600 }}>Custom Discount</span>
              <button style={styles.addMoreBtn}>Add More</button>
            </div>

            <div style={styles.formRow}>
              <label style={styles.label}>Discount Type :</label>
              <select
                style={styles.input}
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
              >
                <option value="Percentage">Percentage %</option>
                <option value="Flat">Flat ₹</option>
              </select>
            </div>

            <div style={styles.formRow}>
              <label style={styles.label}>Discount Value :</label>
              <input
                type="number"
                style={styles.input}
                value={discountValue}
                onChange={(e) => setDiscountValue(e.target.value)}
              />
            </div>

            <div style={{ ...styles.quickButtons, justifyContent: 'flex-end' }}>
              {quickValues.map((val) => (
                <button
                  key={val}
                  style={{
                    ...styles.quickButton,
                    backgroundColor: val === +discountValue ? '#D0F0D3' : '#f2f2f2',
                    color: val === +discountValue ? 'green' : '#333',
                    border: val === +discountValue ? '1px solid green' : '1px solid #ccc'
                  }}
                  onClick={() => setDiscountValue(val)}
                >
                  {val}%
                </button>
              ))}
            </div>

            <div style={styles.formRow}>
              <label style={styles.label}>Reason :</label>
              <input
                type="text"
                style={styles.input}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
          </div>

          <hr style={{ borderColor: '#ddd' }} />

          <div style={styles.section}>
            <label style={{ ...styles.label, marginBottom: 6 }}>Coupon Code</label>
            <div style={styles.couponRow}>
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={{
                  ...styles.input,
                  borderColor: couponError ? 'red' : '#ccc',
                  marginRight: 10,
                }}
              />
              <span style={styles.clear} onClick={handleClearCoupon}>Clear</span>
              <button style={styles.applyBtn} onClick={handleApplyCoupon}>Apply</button>
            </div>
            {couponError && (
              <span style={{ color: 'red', fontSize: 12, marginTop: 4 }}>
                not a valid code*
              </span>
            )}
          </div>
        </div>

        <div style={styles.footer}>
          <button onClick={onClose} style={styles.cancelBtn}>Cancel</button>
          <button onClick={onSave} style={styles.saveBtn}>Save</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalDiscount: {
    width: '90%',
    maxWidth: 556,
    maxHeight: '90vh',
    background: '#fff',
    fontFamily: 'sans-serif',
    borderRadius:10,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    background: '#3662C8',
    color: 'white',
    padding: '14px 20px',
    fontSize: 18,
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helpIcon: {
    background: '#fff',
    color: 'black',
    borderRadius: '50%',
    width: 20.25,
    height: 20.25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 700,
    cursor: 'pointer'
  },
  content: {
    flex: 1,
    overflowY: 'auto'
  },
  section: {
    padding: '16px 20px'
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 14
  },
  addMoreBtn: {
    background: 'none',
    border: 'none',
    color: '#3658BF',
    fontSize: 14,
    cursor: 'pointer',
    fontWeight: 500,
    marginLeft: '16px'
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12
  },
  label: {
    width: 130,
    fontWeight: 600,
    fontSize: 14
  },
  input: {
    flex: 1,
    height: 36,
    padding: '6px 10px',
    fontSize: 14,
    borderRadius: 8,
    border: '1px solid #ccc'
  },
  quickButtons: {
    display: 'flex',
    gap: 8,
    marginBottom: 14
  },
  quickButton: {
    padding: '6px 12px',
    borderRadius: 20,
    fontSize: 13,
    cursor: 'pointer',
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    transition: '0.2s'
  },
  couponRow: {
    display: 'flex',
    alignItems: 'center'
  },
  clear: {
    fontSize: 13,
    color: '#3662C8',
    marginRight: 10,
    cursor: 'pointer'
  },
  applyBtn: {
    background: '#28a745',
    color: '#fff',
    padding: '6px 16px',
    fontSize: 14,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer'
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10,
    padding: '12px 20px',
    background: '#f5f5f5'
  },
  cancelBtn: {
    background: '#fff',
    border: '1px solid #ccc',
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 14,
    cursor: 'pointer'
  },
  saveBtn: {
    background: '#3662C8',
    color: '#fff',
    padding: '8px 16px',
    fontSize: 14,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer'
  }
};

export default ApplyDiscount;

