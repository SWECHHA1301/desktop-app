import React from 'react';
import { Plus } from 'lucide-react';

const AddIcon = () => {
  return (
    <div style={{
      border: '2px solid rgb(54, 88, 191)',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgb(54, 88, 191)',
      cursor: 'pointer'
    }}>
      <Plus size={20} />
    </div>
  );
};

export default AddIcon;
