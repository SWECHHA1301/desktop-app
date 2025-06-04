import React, { useState } from 'react';

export default function FoodVarientModal() {
  
  const [selectedVariation, setSelectedVariation] = useState('Medium');
  const [variationCount, setVariationCount] = useState(1);   // NEW


  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const variations = [
    { label: 'Small',  price: 200 },
    { label: 'Medium', price: 250 },
    { label: 'Large',  price: 300 },
  ];

  const addOns = [
    { label: 'Curd',    price: 20 },
    { label: 'Chutney', price: 20 },
    { label: 'Onion',   price: 20 },
    { label: 'Chutney', price: 20 },
    { label: 'Chutney', price: 20 },
    { label: 'Chutney', price: 20 },
  ];

  
  const toggleAddOn = (label) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [label]: prev[label] ? prev[label] + 1 : 1,
    }));
  };

  const removeAddOn = (label) => {
    setSelectedAddOns((prev) => {
      const updated = { ...prev };
      if (updated[label] > 1) {
        updated[label] -= 1;
      } else {
        delete updated[label];
      }
      return updated;
    });
  };

  const isAddOnSelected = (label) => selectedAddOns[label] > 0;
  const filteredAddOns = addOns.filter(({ label }) =>
    label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <div>
      
      <style>{`
        @media (max-width: 600px) {
          .food-modal {
            width: 100% !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      <div
        className="food-modal"
        style={{
          width: 480,
          background: '#fff',
          borderRadius: 10,
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
          margin: 'auto',
        }}
      >
   
        <div
          style={{
            backgroundColor: '#3658BF',
            padding: '16px 24px',
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Food Name
        </div>

      
        <div style={{ padding: 24 }}>
   
          <p
            style={{
              fontWeight: 700,
              marginBottom: 8,
              color: '#939393',
              fontSize: 18,
            }}
          >
            Variation
          </p>

          <div style={{ marginLeft: 16 }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              {variations.map(({ label, price }) => {
                const isActive = selectedVariation === label;

                return (
                  <div
                    key={label}
                    onClick={() => {
                      if (isActive) {
                        setVariationCount((c) => c + 1);      
                      } else {
                        setSelectedVariation(label);         
                        setVariationCount(1);
                      }
                    }}
                    style={{
                      border: `2px solid ${isActive ? '#3658BF' : '#797979'}`,
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
                      backgroundColor: isActive ? '#D4DAED' : '#fff',
                      color: isActive ? '#3D5AFE' : '#000',
                      fontWeight: 500,
                      userSelect: 'none',
                    }}
                  >
                    {isActive && (
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
                        {variationCount}
                      </div>
                    )}

                    <div style={{ fontSize: 14, color: '#3658BF' }}>{label}</div>
                    <div style={{ fontSize: 14, color: '#000' }}>₹{price}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr style={{ margin: '16px 0' }} />

      
          <input
            type="text"
            placeholder="Search added items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 16px',
              borderRadius: 20,
              border: '1px solid #ccc',
              marginBottom: 16,
              height: 36,
              fontSize: 14,
            }}
          />

    
          <p
            style={{
              fontWeight: 600,
              marginBottom: 12,
              color: '#939393',
              fontSize: 18,
            }}
          >
            Add Ons
          </p>

          <div style={{ marginLeft: 16 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {filteredAddOns.map(({ label, price }) => {
                const active = isAddOnSelected(label);
                return (
                  <div
                    key={label}
                    onClick={() =>
                      active ? removeAddOn(label) : toggleAddOn(label)
                    }
                    style={{
                      border: `2px solid ${active ? '#3658BF' : '#797979'}`,
                      backgroundColor: active ? '#D4DAED' : 'transparent',
                      width: 115,
                      borderRadius: 10,
                      padding: '6px 12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      position: 'relative',
                      fontSize: 14,
                      fontWeight: 500,
                      color: active ? '#3D5AFE' : '#000',
                      userSelect: 'none',
                    }}
                  >
                    {active && (
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
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: '#3D5AFE',
                        }}
                      >
                        {selectedAddOns[label]}
                      </div>
                    )}
                    <span style={{ color: '#3658BF', fontWeight: 500 }}>
                      {label}
                    </span>
                    <span style={{ color: '#000' }}>₹{price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

 
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '16px 24px',
            backgroundColor: '#F2F2F2',
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
    </div>
  );
}
