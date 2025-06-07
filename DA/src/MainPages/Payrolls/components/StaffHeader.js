import React from 'react';
import { Search } from 'lucide-react';

const StaffHeader = ({ staffName, setStaffName }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px",
      padding: "12px 16px",
      backgroundColor: "#fff",
      borderRadius: "10px",
    }}
  >
    <label
      style={{
        marginRight: "30px",
        whiteSpace: "nowrap",
        color: "#939191",
        fontSize: "18px",
        fontWeight: 700,
        marginLeft: "32px",
      }}
    >
      Staff Name :
    </label>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #000",
        borderRadius: "8px",
        padding: "6px 10px",
        width: "100%",
        maxWidth: "897px",
        marginLeft: "60px",
      }}
    >
      <Search size={16} style={{ marginRight: "6px" }} />
      <input
        type="text"
        placeholder="Search staff..."
        value={staffName}
        onChange={(e) => setStaffName(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          fontSize: "14px",
        }}
      />
    </div>
  </div>
);

export default StaffHeader;
