import React, { useState } from 'react';

const AddNoteModal = ({ onClose, onSave }) => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [applyToAll, setApplyToAll] = useState(false);

  const notes = ['no sugar', 'Extra hot', 'no sugar', 'no sugar'];

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <span>Add Note to :</span>
        </div>

        <div style={styles.content}>
          <div style={styles.formRow}>
            <label style={styles.label}>Item Name :</label>
            <select
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              style={styles.select}
            >
              <option value="">eg. capacinno</option>
              <option value="capacino">Capacino</option>
              <option value="latte">Latte</option>
            </select>
          </div>

          <div style={{...styles.noteTags, gap: '24px', alignItems: 'centre', justifyContent: 'center'}}>
            {notes.map((note, idx) => (
              <div key={idx} style={styles.noteTag}>{note}</div>
            ))}
          </div>

          <div style={{ marginTop: 20 }}>
            <label style={styles.label}>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
              rows={3}
            />
          </div>

          <div style={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={applyToAll}
              onChange={() => setApplyToAll(!applyToAll)}
            />
            <label style={{ marginLeft: 8 }}>Apply same to all the items</label>
          </div>
        </div>

        <div style={styles.footer}>
          <button style={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button style={styles.saveBtn} onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    width: 556,
    background: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    fontFamily: 'sans-serif',
    boxShadow: '0 10px 24px rgba(0,0,0,0.2)'
  },
  header: {
    background: '#3662C8',
    color: 'white',
    padding: '14px 20px',
    fontSize: 18,
    fontWeight: 700
  },
  content: {
    padding: '20px'
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16
  },
  label: {
    width: 110,
    fontWeight: 600,
    fontSize: 14
  },
  select: {
    flex: 1,
    height: 36,
    padding: '6px 10px',
    fontSize: 14,
    borderRadius: 10,
    border: '1px solid #ccc'
  },
  noteTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8
  },
  noteTag: {
    border: '1px solid #3662C8',
    color: '#3662C8',
    padding: '6px 12px',
    borderRadius: 20,
    fontSize: 13,
    cursor: 'pointer'
  },
  textarea: {
    width: 455,
    height: 104,
    borderRadius: 10,
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: 14,
    
  },
  checkboxRow: {
    marginTop: 14,
    display: 'flex',
    alignItems: 'center'
  },
  footer: {
    background: '#f5f5f5',
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10
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

export default AddNoteModal;
