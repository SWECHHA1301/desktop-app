import React from 'react';
import { Plus } from 'lucide-react';

const AddIcon = () => {
  return (
    <div style={{
      border: '2px solid #3658BF',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3658BF',
      cursor: 'pointer'
    }}>
      <Plus size={18} />
    </div>
  );
};

export default AddIcon;
