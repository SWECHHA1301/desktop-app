import React from 'react';
import { Plus } from 'lucide-react';

const AddIcon = () => {
  return (
    <div style={{
      border: '2px solid #2563eb',  // Blue border
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#2563eb',
      cursor: 'pointer'
    }}>
      <Plus size={14} />
    </div>
  );
};

export default AddIcon;
