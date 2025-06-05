import React from 'react'
import  { useState } from 'react';
import { ChevronRight, ChevronDown  } from "lucide-react";

export default function SalaryDetails() {

const [isOpen, setIsOpen] = useState(true);

 const [formData, setFormData] = useState({
   
    hoursPerDay: 0,
    hourlyRate: 50,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

       const styles={
    inputs:{
  height: '27px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#E3E6EE',
    color: 'black',
    fontSize: '12px',
    fontWeight: '400',
    maxWidth: '390px',
    padding:'0 10px',

    },

    labels:{
 color: '#797979',
  fontSize: "14px", 
  fontWeight: '400' ,
  lineHeight:'100%',

    },
  };
  return (
    <>
      {/* Salary Details*/}
            <div style={{padding:'16px 24px'}}>
       <div onClick={() => setIsOpen(!isOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '16px', fontWeight: '500', lineHeight: '100%' }}>Salary Details</p>
          <div style={{ cursor: 'pointer' }}>
            {isOpen ? (
              <ChevronDown style={{ color: "#939191" }} size={20} />
            ) : (
              <ChevronRight style={{ color: "#939191" }} size={20} />
            )}
          </div>
        </div>

{isOpen &&(
        <div style={{marginTop:'24px',width:'100%'}}>
         
        <div style={{ display: 'flex', flexDirection:'column',gap:'6px'}}>
          <label style={styles.labels}>Working Hours Per Day (In Hours)</label>
          <input
            type="number"
            name="hoursPerDay"
            placeholder="Working Hours Per Day"
            value={formData.hoursPerDay}
            onChange={handleChange}
            style={styles.inputs}

          /></div>
          
          <div style={{ display: 'flex', flexDirection:'column',gap:'6px' }}>
            {/* <span style={{ marginRight: '5px' }}>₹</span> */}
            <label  style={styles.labels}>Hourly Rate</label>
            <input
              type="number"
              name="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleChange}
             style={styles.inputs}
            />
        
          </div>

        </div>

        // <div style={{ textAlign: 'center', marginTop: '20px' }}>
        //   <button
        //     type="submit"
        //     style={{
        //       padding: '10px 20px',
        //       backgroundColor: '#007bff',
        //       color: '#fff',
        //       border: 'none',
        //       borderRadius: '5px',
        //       cursor: 'pointer',
        //     }}
        //   >
        //     Add Staff
        //   </button>
        // </div>
        
      )}
        
        </div>
    </>
  )
}
