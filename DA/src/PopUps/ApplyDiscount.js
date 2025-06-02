import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
              <span style={{ fontWeight: 600, fontSize: 18 }}>Custom Discount</span>
              <button style={styles.addMoreBtn}>Add More</button>
            </div>

            {/* Discount Type */}
            <div style={styles.formRow}>
              <label style={{ ...styles.label, color: '#797979', marginLeft: '30px' }}>Discount Type :</label>
              <div style={{ ...styles.inputWrapper, marginLeft: 'auto' }}>
                <select
                  style={styles.selectBox}
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                >
                  <option value="Percentage">Percentage %</option>
                  <option value="Flat">Flat ₹</option>
                </select>
                <ChevronDown size={16} style={styles.iconInside} />
              </div>
            </div>

            {/* Discount Value */}
            <div style={styles.formRow}>
              <label style={{ ...styles.label, color: '#797979', marginLeft: '30px' }}>Discount Value :</label>
              <input
                type="number"
                style={{ ...styles.textBox, marginLeft: 'auto' }}
                value={discountValue}
                onChange={(e) => setDiscountValue(e.target.value)}
              />
            </div>

            {/* Quick % Buttons */}
            <div style={{ ...styles.quickButtons, justifyContent: 'flex-end' }}>
              {quickValues.map((val) => (
                <button
                  key={val}
                  style={{
                    ...styles.quickButton,
                    backgroundColor: val === +discountValue ? '#D0F0D3' : '#f2f2f2',
                    color: val === +discountValue ? 'green' : '#333',
                    border: val === +discountValue ? '1px solid green' : '1px solid #ccc',
                  }}
                  onClick={() => setDiscountValue(val)}
                >
                  {val}%
                </button>
              ))}
            </div>

            {/* Reason */}
            <div style={styles.formRow}>
              <label style={{ ...styles.label, color: '#797979', marginLeft: '30px' }}>Reason :</label>
              <div style={{ ...styles.inputWrapper, marginLeft: 'auto' }}>
                <input
                  type="text"
                  style={styles.selectBox}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
            </div>
          </div>

          <hr style={{ borderColor: '#ddd' }} />

          {/* Coupon Code */}
          <div style={styles.section}>
            <label style={{ ...styles.label, fontSize: 18 }}>Coupon Code</label>
            <div style={styles.couponRow}>
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={{
                  ...styles.textBox,
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

        {/* Footer */}
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
    zIndex: 1000,
  },
  modalDiscount: {
    width: '90%',
    maxWidth: 556,
    background: '#fff',
    fontFamily: 'sans-serif',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    overflowY: 'auto',
  },
  section: {
    padding: '16px 40px',
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 14,
  },
  addMoreBtn: {
    background: 'none',
    border: 'none',
    color: '#3658BF',
    fontSize: 14,
    cursor: 'pointer',
    fontWeight: 500,
    marginLeft: '16px',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    width: 130,
    fontWeight: 700,
    fontSize: 16,
  },
  textBox: {
    width: 285,
    height: 35,
    padding: '8px 12px',
    fontSize: 14,
    borderRadius: 10,
    border: '1.5px solid #ccc',
    outline: 'none',
  },
  selectBox: {
    width: 285,
    height: 38,
    padding: '8px 36px 8px 12px',
    borderRadius: 10,
    border: '1.5px solid #ccc',
    fontSize: 14,
    outline: 'none',
    appearance: 'none',
    backgroundColor: 'white',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  iconInside: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#888',
  },
  quickButtons: {
    display: 'flex',
    gap: 8,
    marginBottom: 14,
  },
  quickButton: {
    padding: '6px 12px',
    borderRadius: 20,
    fontSize: 13,
    cursor: 'pointer',
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    transition: '0.2s',
  },
  couponRow: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '40px',
    marginTop: '10px',
  },
  clear: {
    fontSize: 13,
    color: '#3662C8',
    marginRight: 10,
    cursor: 'pointer',
  },
  applyBtn: {
    background: '#28a745',
    color: '#fff',
    padding: '6px 16px',
    fontSize: 14,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10,
    padding: '12px 20px',
    background: '#f5f5f5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cancelBtn: {
    background: '#fff',
    border: '1px solid #ccc',
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 14,
    cursor: 'pointer',
  },
  saveBtn: {
    background: '#3662C8',
    color: '#fff',
    padding: '8px 16px',
    fontSize: 14,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  },
};

export default ApplyDiscount;
