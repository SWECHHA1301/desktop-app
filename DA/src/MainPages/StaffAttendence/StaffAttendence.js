import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StaffInfo from "./components/StaffInfo";
import AttendanceSummary from "./components/AttendanceSummary";
import StaffTable from "./components/StaffTable";

export default function StaffAttendance() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [staffName, setStaffName] = useState("");

  const [staffList, setStaffList] = useState([
    { id: 1, name: "Arijit Rai", empId: 89520, status: "Not Marked" },
    { id: 2, name: "Aran", empId: 89521, status: "Not Marked" },
    { id: 3, name: "Ram", empId: 89522, status: "Not Marked" },
    { id: 4, name: "Airy", empId: 89523, status: "Not Marked" },
    { id: 5, name: "Airy", empId: 89523, status: "Not Marked" },
  ]);

  const [filteredList, setFilteredList] = useState(staffList);


  useEffect(() => {
    const lower = staffName.toLowerCase();
    const filtered = staffList.filter((emp) =>
      `${emp.name} ${emp.empId}`.toLowerCase().includes(lower)
    );
    setFilteredList(filtered);
  }, [staffName, staffList]);

  const handleMark = (index, status) => {
    const updated = [...filteredList];
    updated[index].status = status;
    setFilteredList(updated);

   
    const actualIndex = staffList.findIndex(emp => emp.empId === updated[index].empId);
    const updatedMain = [...staffList];
    updatedMain[actualIndex].status = status;
    setStaffList(updatedMain);
  };

  const countPresent = staffList.filter((s) => s.status === "Present").length;
  const countAbsent = staffList.filter((s) => s.status === "Absent").length;

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: 10,
        width:'100%',
        maxWidth: "1390px",
        height: "650px",
        backgroundColor: "#D4DAED",
        padding: "20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          color: "#3658BF",
        }}
      >
        <ChevronLeft color="white"/>
        <ChevronRight color="black"/>
        Staff Attendance
      </div>

      {/* Info + Calendar */}
      <StaffInfo
        staffName={staffName}
        setStaffName={setStaffName}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />

      {/* Attendance Summary */}
      <div style={{ marginTop: "20px" }}>
        <AttendanceSummary
          total={staffList.length}
          present={countPresent}
          absent={countAbsent}
        />
      </div>

      {/* Staff Table */}
      <div style={{ marginTop: "16px" }}>
        <StaffTable staffList={filteredList} handleMark={handleMark} />
      </div>
    </div>
  );
}
