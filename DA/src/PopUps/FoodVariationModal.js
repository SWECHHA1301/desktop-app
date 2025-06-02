import React, { useState } from 'react';

export default function FoodVarientModal() {
  const [selectedVariation, setSelectedVariation] = useState('Medium');
  const [selectedAddOns, setSelectedAddOns] = useState({});

  const variations = [
    { label: 'Small', price: 200 },
    { label: 'Medium', price: 250 },
    { label: 'Large', price: 300 },
  ];

  const addOns = [
    { label: 'Curd', price: 20 },
    { label: 'Chutney', price: 20 },
    { label: 'Onion', price: 20 },
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

  const isSelected = (label) => selectedAddOns[label] > 0;

  return (
    <div style={{
      width: '480px',
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      overflow: 'hidden',
      fontFamily: 'sans-serif'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#3658BF',
        padding: '16px 24px',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
      }}>
        Food Name
      </div>

      {/* Body */}
      <div style={{ padding: '24px' }}>
        {/* Variation */}
        <p style={{ fontWeight: '700',
         marginBottom: '8px',
        color: '#939393',
        fontSize: '18px',
        }}>Variation</p>

        <div style={{ marginLeft: '16px' }}>
         <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
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
                      right: 'calc(50% - 8px)', // center the badge
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



        <hr style={{ margin: '16px 0' }} />

        {/* Search */}
        <input
          type="text"
          placeholder="Search added items"
          style={{
            width: '100%',
            padding: '8px 251px 8px 16px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            marginBottom: '16px',
            height: '25px'
          }}
        />

        {/* Add Ons */}
        <p style={{ fontWeight: '600',
         marginBottom: '12px',
         color: '#939393',
         fontSize: '18px',
         }}>Add Ons</p>

        <div style={{ marginLeft: '16px' }}>
        <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    }}>

               {addOns.map(({ label, price }, index) => {
                 const selected = isSelected(label);
                 return (
                   <div
                     key={index}
                     onClick={() => selected ? removeAddOn(label) : toggleAddOn(label)}
                     style={{
                       border: selected ? '2px solid #3658BF' : '2px solid #797979',
                       backgroundColor: selected ? '#D4DAED' : 'transparent',
                       width: '115px',
                       borderRadius: '10px',
                       padding: '6px 12px',
                       cursor: 'pointer',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'space-between',
                       position: 'relative',
                       fontSize: '14px',
                       fontWeight: '500',
                       color: selected ? '#3D5AFE' : 'black',
                     }}
                   >
                     {selected && (
                       <div style={{
                         position: 'absolute',
                         top: '-9px',
                         right: 'calc(50% - 8px)',
                         backgroundColor: '#fff',
                         color: '#3D5AFE',
                         borderRadius: '50%',
                         width: '16px',
                         height: '16px',
                         fontSize: '11px',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         fontWeight: 'bold',
                         border: '2px solid #3658BF',
                       }}>
                         {selectedAddOns[label]}
                       </div>
                     )}
                     <span style={{ color: '#3658BF', fontWeight: 500 }}>{label}</span>
                     <span style={{ color: '#000' }}>₹{price}</span>
                   </div>
                 );
               })}
             </div>
             </div>

      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px 24px',
        backgroundColor: '#F2F2F2',
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
