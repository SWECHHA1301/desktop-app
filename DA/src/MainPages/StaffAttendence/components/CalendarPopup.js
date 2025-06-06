import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarPopup({ selectedDate, setSelectedDate, currentMonth, setCurrentMonth }) {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const selectDate = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay();

  const dates = [];
  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "130px",
        backgroundColor: "#fff",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        zIndex: 1000,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        width: "250px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <ChevronLeft style={{ cursor: "pointer" }} onClick={handlePrevMonth} />
        <span style={{ fontWeight: "bold" }}>
          {currentMonth.toLocaleString("default", { month: "long" })} {year}
        </span>
        <ChevronRight style={{ cursor: "pointer" }} onClick={handleNextMonth} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "6px", textAlign: "center" }}>
        {daysOfWeek.map((day) => (
          <div key={day} style={{ fontWeight: "bold", fontSize: "13px" }}>{day}</div>
        ))}
        {dates.map((day, index) => {
          const isSelected =
            day &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === month &&
            selectedDate.getFullYear() === year;

          return (
            <div
              key={index}
              onClick={() => day && selectDate(day)}
              style={{
                padding: "8px 0",
                borderRadius: "50%",
                cursor: day ? "pointer" : "default",
                backgroundColor: isSelected ? "#3f51b5" : "transparent",
                color: isSelected ? "#fff" : "#000"
              }}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
