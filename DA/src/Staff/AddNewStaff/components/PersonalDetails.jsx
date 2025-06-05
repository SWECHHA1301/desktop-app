import  { useState } from 'react';
import { ChevronRight, ChevronDown  } from "lucide-react";
import ImageSelector from '../../../Common/ImageSelector';
export default function PersonalDetails() {


    const [isOpen, setIsOpen] = useState(true);
     const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
   
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
    padding:'0 10px'
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
     {/* personal details */}
      <div style={{padding:'16px 24px',borderBottom: '1px solid #D4DAED'}}>

       <div onClick={() => setIsOpen(!isOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '16px', fontWeight: '500', lineHeight: '100%' }}>Payment Paid</p>
          <div style={{ cursor: 'pointer' }}>
            {isOpen ? (
              <ChevronDown style={{ color: "#939191" }} size={20} />
            ) : (
              <ChevronRight style={{ color: "#939191" }} size={20} />
            )}
          </div>
        </div>

         {isOpen &&(
        <div style={{marginTop:'20px', display:'flex',flexDirection:'row',gap:'10px'}}>


         <div style={{ display:'flex',flexDirection:'column', gap:'16px'}}>
          <div style={{display:'flex',flexDirection:'row',gap:'16px'}}>
        <div style={{ display:'flex',flexDirection:'column', gap:'6px'}}>
          <label style={styles.labels}>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          style={styles.inputs}
          /> </div>

          <div style={{ display:'flex',flexDirection:'column', gap:'6px'}}>
            <label style={styles.labels}>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
           style={styles.inputs}
          />
       </div>
       </div>
        
        <div style={{ display:'flex',flexDirection:'column', gap:'6px'}}>
            <label style={styles.labels}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        style={styles.inputs}
        />

        </div>
         
         <div style={{ display:'flex',flexDirection:'column', gap:'6px'}}>
            <label style={styles.labels}>Phone Number</label>
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
         style={styles.inputs}
        />
        </div>
        
        <div style={{ display:'flex',flexDirection:'column', gap:'6px'}}>
          <label style={styles.labels}>Role</label>
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          style={styles.inputs}
        />
        </div>
        </div>

        <ImageSelector/>

</div> )}   

</div>
    </>
  )
}
