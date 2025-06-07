import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
// import UserAvatarIcon from "../Common/Icons";
import NativeDateRangePicker from "../../Common/NativeDateRangePicker";
import UserAvatarIcon from "../../Common/Icons";

// style
const staffContainer = {
  width: '100%',
  maxWidth: '1288px',
  fontFamily:'Arial, sans-serif',
  maxHeight: 'calc(92vh - 48px)',
  margin: '0 auto',
  padding: '0 16px',
}

const staffBox = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBottom: '26px',
  justifyContent:'space-between',
  gap: '16px',
}

const staffSearchInput ={
  width: '100%',
  height: '40px',
  padding: '8px 12px 8px 36px',
  borderRadius: '10px',
  border: '1px solid #616161',
  fontSize: '1rem',
  fontWeight: '700',
  lineHeight: '100%',
  boxSizing: 'border-box',
}

const staffHead ={
  backgroundColor: 'white',
  border: '1px solid black',
   borderRadius: '10px',
   height: '70px',
  display: 'flex',
   justifyContent: 'space-between',
    alignItems: 'center',
   padding: '0 24px',
   marginBottom: '16px',
 }


 const staffInfo ={
  backgroundColor: 'white',
  border: '1px solid black',
   borderRadius: '10px',
   height: '70px',
    display: 'flex', 
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '0 24px',
   marginBottom: '8px',
}

const staffBtn ={
  maxWidth: '168px',
 height: '31px',
 border: '3px solid #3658BF',
 fontSize: '24px',
  fontWeight: '700',
  lineHeight: '100%',
  color:' #3658BF',
  borderRadius:'10px',
  padding: '1px 55px',
 display: 'flex',
 alignItems: 'center'
}


const staffList = [
  { id: "1", name: "karam", email: "karam@gmail.com", role: "Staff" },
  { id: "2", name: "Aram", email: "aram@gmail.com", role: "Staff" },
  { id: "3", name: "Aram", email: "aram@gmail.com", role: "Staff" },
  { id: "4", name: "Riya", email: "riya@gmail.com", role: "Staff" },
  { id: "5", name: "Aram", email: "aram@gmail.com", role: "Staff" },
  { id: "6", name: "Aman", email: "aman@gmail.com", role: "Staff" },
  { id: "7", name: "Vivek", email: "vivek@gmail.com", role: "Staff" },
  { id: "8", name: "Muskan", email: "muskan@gmail.com", role: "Staff" },
  { id: "9", name: "Aram", email: "aram@gmail.com", role: "Staff" },
];
export default function StaffManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterStaffList = staffList.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
    <div style={staffContainer}>
      

        <div style={staffBox}>
          <div style={{
            fontSize: '2rem',
  fontWeight: 'bold',
  color:' #3658BF',
          }}>Staff Management</div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{
                maxWidth: '369px',
  width:' 100%',
  height: '40px',
  position: 'relative'
            }}>
              <i className="fa fa-search" aria-hidden="true" style={{
                 position: 'absolute',
  top: '50%',
  left: '12px',
  transform: 'translateY(-50%)',
  color: '#999',
  fontSize: '16px',
              }}></i>

              <input
              style={staffSearchInput}
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <NativeDateRangePicker />
          </div>
        </div>
        
         <div style={{
            width:'100%',
          
         }}>
        
           <div  style={staffHead}>
          <p  >#</p>
          <div > </div>
          <p style={{width:'100px',textAlign:'right',paddingRight:'10px'}}>Staff Name</p>
          <p style={{width:'140px', paddingRight:'50px' ,textAlign:'left'}}>Email</p>
          <p style={{width:'100px',padding:'0 15px'}}>Role</p>
          <p > Actions</p>
        </div>


             <div
        style={{
          height: "550px",
          overflowY: "scroll",
        }}
      >
        {filterStaffList.map((item, index) => (
          <div style={staffInfo} key={index}>
            <p >{item.id}</p>
            <p style={{textAlign:'center'}}>
             <UserAvatarIcon/>
            </p>
            <p style={{textAlign:'center'}}>{item.name}</p>
            <p >{item.email}</p>
           <p > <button style={staffBtn} >{item.role}</button></p>
            <p style={{
               display: 'flex',
  gap: '18px',
  alignItems: 'center',
  color:' #797979',
  cursor: 'pointer',
  
            }}>
              <FaEdit />
              <FaTrash />
            </p>
          </div>
        ))}
      </div>
        </div>
         
        
    
        
      


    </div>  </>
  );
}


