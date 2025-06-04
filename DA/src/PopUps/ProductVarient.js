import React, { useState } from 'react';

export default function ProductVariants() {
  // STATE for each row -------------------------------------------------------
  const [variation1, setVariation1] = useState({ label: 'Medium', count: 1 });
  const [variation2, setVariation2] = useState({ label: 'Medium', count: 1 });
  const [variation3, setVariation3] = useState({ label: 'Medium', count: 1 });

  const variations = [
    { label: 'Small',  price: 200 },
    { label: 'Medium', price: 250 },
    { label: 'Large',  price: 300 },
  ];

  /** reusable row component */
  const VariationRow = ({ title, state, setState }) => {
    const { label: selectedLabel, count } = state;

    const handleClick = (label) => {
      setState((prev) =>
        prev.label === label
          ? { ...prev, count: prev.count + 1 } 
          : { label, count: 1 }               
      );
    };

    return (
      <div style={{ marginBottom: 24 }}>
        <p
          style={{
            fontWeight: 700,
            marginBottom: 10,
            color: '#939393',
            fontSize: 18,
            marginLeft: 6,
          }}
        >
          {title}
        </p>

        <div style={{ display: 'flex', gap: 24, marginLeft: 50 }}>
          {variations.map(({ label, price }) => {
            const isSelected = selectedLabel === label;
            return (
              <div
                key={label}
                onClick={() => handleClick(label)}
                style={{
                  border: `2px solid ${isSelected ? '#3658BF' : '#797979'}`,
                  borderRadius: 10,
                  padding: '9px 12px',
                  cursor: 'pointer',
                  position: 'relative',
                  width: 77,
                  height: 46,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: isSelected ? '#D4DAED' : '#fff',
                  color: isSelected ? '#3D5AFE' : '#000',
                  fontWeight: 500,
                  userSelect: 'none',
                }}
              >
                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -9,
                      right: 'calc(50% - 8px)',
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      border: '2px solid #3658BF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10,
                      fontWeight: 'bold',
                      color: '#000',
                    }}
                  >
                    {count}
                  </div>
                )}
                <div style={{ fontSize: 14, color: '#3658BF' }}>{label}</div>
                <div style={{ fontSize: 14, color: '#000' }}>₹{price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };


  return (
    <div
      style={{
        width: 530,
        background: '#fff',
        borderRadius: 10,
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        overflow: 'hidden',
        fontFamily: 'sans-serif',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          backgroundColor: '#3658BF',
          padding: '16px 24px',
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        Product
      </div>

      {/* BODY */}
      <div style={{ padding: 24 }}>
        <VariationRow
          title="Variation"
          state={variation1}
          setState={setVariation1}
        />
        <hr style={{ margin: '16px 0', color: '#939191' }} />
        <VariationRow
          title="Variation 1"
          state={variation2}
          setState={setVariation2}
        />
        <hr style={{ margin: '16px 0', color: '#939191' }} />
        <VariationRow
          title="Variation 2"
          state={variation3}
          setState={setVariation3}
        />
      </div>

      {/* FOOTER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '16px 24px',
          backgroundColor: '#F3F4F6',
          borderTop: '1px solid #e0e0e0',
          gap: 12,
        }}
      >
        <button
          style={{
            padding: '8px 16px',
            borderRadius: 10,
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            cursor: 'pointer',
            color: '#3658BF',
            fontWeight: 700,
          }}
        >
          Cancel
        </button>

        <button
          style={{
            padding: '8px 16px',
            borderRadius: 10,
            backgroundColor: '#3658BF',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
