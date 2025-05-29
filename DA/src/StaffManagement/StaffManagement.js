import React from "react";
import { useState } from "react";
import "./StaffManagement.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import ItemCancellation from "../PopUps/ItemCancellation";
import NativeDateRangePicker from "../Common/NativeDateRangePicker";

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
    <div className="staff-container">
      <div>
        <div className="staff-box">
          <div className="staff-header">Staff Management</div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div className="staff-search">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <NativeDateRangePicker />
          </div>
        </div>

        <div className="staff-head">
          <p>#</p>
          <div> </div>
          <p>Staff Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Actions</p>
        </div>
      </div>

      <div
        style={{
          height: "550px",
          overflowY: "scroll",
        }}
      >
        {filterStaffList.map((item, index) => (
          <div className="staff-info" key={index}>
            <p>{item.id}</p>
            <p className="staff-profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="avatar"
              />
            </p>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <button>{item.role}</button>
            <p className="staff-actions">
              <FaEdit className="edit-icon" />
              <FaTrash className="delete-icon" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
