import React from 'react'
import './StaffManagement.css'
import NativeDateRangePicker from "../Common/NativeDateRangePicker";
import { FaEdit, FaTrash } from 'react-icons/fa';

const staffList = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: 'Aram',
  email: 'aram@gmail.com',
  role: 'Staff',
}));
export default function StaffManagement() {
  return (
  <div className="staff-container">
      <div className="staff-box">
        <div className="staff-header">Staff Management</div>
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
            {staffList.map((staff, index) => (
              <tr key={staff.id}>
                <td>{index + 1}</td>
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
    </div>
  );
};