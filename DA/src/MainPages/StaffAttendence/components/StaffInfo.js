import React from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
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
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "16px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Staff Name Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: "120px",
            }}
          >
            <label
              style={{
                color: "#939191",
                fontSize: 16,
                fontWeight: 700,
                marginRight: "8px",
                whiteSpace: "nowrap",
              }}
            >
              Staff Name:
            </label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #000",
              borderRadius: "8px",
              padding: "6px 10px",
              flex: 1,
              minWidth: "240px",
               maxWidth: "900px",
            }}
          >
            <Search size={16} style={{ marginRight: "6px" }} />
            <input
              type="text"
              value={staffName}
              onChange={(e) => setStaffName(e.target.value)}
              placeholder="Enter staff name"
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                fontSize: "14px",
                width: "100%",
                maxWidth: "480px"
              }}
            />
          </div>
        </div>

        {/* Date Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: "120px",
            }}
          >
            <label
              style={{
                color: "#939191",
                fontSize: 16,
                fontWeight: 700,
                marginRight: "8px",
                whiteSpace: "nowrap",
              }}
            >
              Date:
            </label>
          </div>
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
              maxWidth: "200px",
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
