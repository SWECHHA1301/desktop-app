import React from "react";
import { useState } from "react";
import "./StaffManagement.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import ItemCancellation from "../PopUps/ItemCancellation";
import NativeDateRangePicker from "../Common/NativeDateRangePicker";

const staffList = [
  { id: '1', name: "karam", email: "karam@gmail.com", role: "Staff",},
  { id: '2', name: "Aram", email: "aram@gmail.com", role: "Staff",},
  { id: '3', name: "Aram", email: "aram@gmail.com", role: "Staff",},
  { id: '4', name: "Riya", email: "riya@gmail.com", role: "Staff",},
  { id: '5', name: "Aram", email: "aram@gmail.com", role: "Staff",},
  { id: '6', name: "Aman", email: "aman@gmail.com", role: "Staff",},
  { id: '7', name: "Vivek", email: "vivek@gmail.com", role: "Staff",},
  { id: '8', name: "Muskan", email: "muskan@gmail.com", role: "Staff",},
  { id: '9', name: "Aram", email: "aram@gmail.com", role: "Staff",},
]
export default function StaffManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterStaffList=staffList.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="staff-container">

      <div className="staff-box">
        <div className="staff-header">Staff Management</div>
        
        <div style={{display:'flex',alignItems:'center',gap:'24px'}}>
        <div className="staff-search">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <NativeDateRangePicker/>
         </div>
        </div>
        <table className="staff-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Staff Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterStaffList.map((staff, index) => (
              <tr key={index}>
                <td>{staff.id}</td>
                <td className="staff-name">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="avatar"
                  />
                  {staff.name}
                </td>
                <td>{staff.email}</td>
                <td>
                  <span className="staff-role">{staff.role}</span>
                </td>
                <td className="staff-actions">
                  <FaEdit className="edit-icon" />
                  <FaTrash className="delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  );
}
