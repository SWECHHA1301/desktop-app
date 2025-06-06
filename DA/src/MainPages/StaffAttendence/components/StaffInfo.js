import React from "react";
import { Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react";
import CalendarPopup from "./CalendarPopup";

export default function StaffInfo({
  staffName,
  setStaffName,
  selectedDate,
  setSelectedDate,
  showCalendar,
  setShowCalendar,
  currentMonth,
  setCurrentMonth,
}) {
  const formatDate = (date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return (
    <div
      style={{
        borderRadius: "10px",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "16px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Staff Name Section */}
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <label
            style={{
              marginRight: "16px",
              whiteSpace: "nowrap",
              color: "#939191",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Staff Name 
          </label>
          <label
            style={{
              marginRight: "95px",
              marginLeft: "20px",
              whiteSpace: "nowrap",
              color: "#939191",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            :
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #000",
              borderRadius: "8px",
              padding: "6px 10px",
              width: "100%",
              maxWidth: "712px",
            }}
          >
            <Search size={16} style={{ marginRight: "6px" }} />
            <input
              type="text"
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

        {/* Date Section */}
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <label
            style={{
              marginRight: "16px",
              whiteSpace: "nowrap",
              color: "#939191",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Date 
          </label>
          <label
            style={{
              marginRight: "70px",
              marginLeft: "80px",
              whiteSpace: "nowrap",
              color: "#939191",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
             :
          </label>
          <Calendar size={16} />
          <div
            onClick={() => setShowCalendar(!showCalendar)}
            style={{
              border: "1px solid #000",
              borderRadius: "8px",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              width: "100%",
              maxWidth: "180px",
              marginLeft: "10px",
            }}
          >
            <ChevronLeft
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() - 1,
                    1
                  )
                );
              }}
            />
            <span style={{ fontSize: "14px" }}>{formatDate(selectedDate)}</span>
            <ChevronRight
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() + 1,
                    1
                  )
                );
              }}
            />
          </div>

          {/* Calendar Popup */}
          {showCalendar && (
            <CalendarPopup
              selectedDate={selectedDate}
              setSelectedDate={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
            />
          )}
        </div>
      </div>
    </div>
  );
}
