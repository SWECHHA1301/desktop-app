import React, { useState } from 'react';

export default function ProductVariants() {
  const [selectedVariation1, setSelectedVariation1] = useState('Medium');
  const [selectedVariation2, setSelectedVariation2] = useState('Medium');
  const [selectedVariation3, setSelectedVariation3] = useState('Medium');

  const variations = [
    { label: 'Small', price: 200 },
    { label: 'Medium', price: 250 },
    { label: 'Large', price: 300 },
  ];

  const VariationRow = ({ title, selectedVariation, setSelectedVariation }) => (
    <div style={{ marginBottom: '24px' }}>
      <p style={{
        fontWeight: '700',
        marginBottom: '10px',
        color: '#939393',
        fontSize: '18px',
        marginLeft: '6px',
      }}>{title}</p>

      <div style={{ display: 'flex', gap: '12px', marginLeft: '24px' }}>
        {variations.map(({ label, price }) => {
          const isSelected = selectedVariation === label;
          return (
            <div
              key={label}
              onClick={() => setSelectedVariation(label)}
              style={{
                border: isSelected ? '2px solid #3658BF' : '2px solid #797979',
                borderRadius: '10px',
                padding: '9px 12px',
                cursor: 'pointer',
                position: 'relative',
                fontWeight: '500',
                width: '77px',
                height: '46px',
                backgroundColor: isSelected ? '#D4DAED' : 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: isSelected ? '#3D5AFE' : 'black',
              }}
            >
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  top: '-9px',
                  right: 'calc(50% - 8px)',
                  backgroundColor: 'white',
                  color: '#000',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  border: '2px solid #3658BF',
                }}>
                  1
                </div>
              )}
              <div style={{ fontSize: '14px', color: '#3658BF' }}>{label}</div>
              <div style={{ fontSize: '14px', color: '#000000' }}>₹{price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{
      width: '534px',
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#3658BF',
        padding: '16px 24px',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        position: 'relative',
      }}>
        Product
      </div>

      {/* Body */}
      <div style={{ padding: '24px' }}>
        <VariationRow
          title="Variation"
          selectedVariation={selectedVariation1}
          setSelectedVariation={setSelectedVariation1}
        />
        <hr style={{ margin: '16px 0', color:'#939191' }} />
        <VariationRow
          title="Variation 1"
          selectedVariation={selectedVariation2}
          setSelectedVariation={setSelectedVariation2}
        />
        <hr style={{ margin: '16px 0', color:'#939191' }} />
        <VariationRow
          title="Variation 2"
          selectedVariation={selectedVariation3}
          setSelectedVariation={setSelectedVariation3}
        />
      </div>
    

      {/* Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px 24px',
        backgroundColor: '#F3F4F6',
        borderTop: '1px solid #e0e0e0',
        gap: '12px'
      }}>

        <button style={{
          padding: '8px 16px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          backgroundColor: 'white',
          cursor: 'pointer',
          color: '#3658BF',
          fontWeight: '700'
        }}>Cancel</button>

        <button style={{
          padding: '8px 16px',
          borderRadius: '10px',
          backgroundColor: '#3658BF',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '700'
        }}>Save</button>
      </div>

    </div>
  );
}
