import React, { useState } from "react";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";

export default function NativeDateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const toggleCalendar = () => setShowCalendar((prev) => !prev);

  const handleDateClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day.isBefore(startDate, "day")) {
      setStartDate(day);
      setEndDate(null);
    } else {
      setEndDate(day);
      setHoverDate(null);
      setShowCalendar(false);
    }
  };

  const isInRange = (day) => {
    if (startDate && endDate) {
      return day.isAfter(startDate, "day") && day.isBefore(endDate, "day");
    } else if (startDate && hoverDate) {
      const [from, to] = startDate.isBefore(hoverDate)
        ? [startDate, hoverDate]
        : [hoverDate, startDate];
      return day.isAfter(from, "day") && day.isBefore(to, "day");
    }
    return false;
  };

  const isSelected = (day) => {
    return (
      (startDate && day.isSame(startDate, "day")) ||
      (endDate && day.isSame(endDate, "day"))
    );
  };

  const daysInMonth = () => {
    const startOfMonth = currentMonth.startOf("month");
    const days = [];
    const startDay = startOfMonth.day();

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let d = 1; d <= currentMonth.daysInMonth(); d++) {
      days.push(dayjs(currentMonth).date(d));
    }

    return days;
  };

  const formatDisplayDate = (date) => {
    return date ? dayjs(date).format("MMM DD, YYYY") : "Select Date";
  };

  return (
    <div className="relative w-full max-w-xs text-sm font-medium">
      <div
        onClick={toggleCalendar}
        className="flex items-center justify-between gap-2 px-3 py-2 border border-gray-400 rounded-lg cursor-pointer bg-white"
      >
        <div className="flex items-center gap-2 text-gray-700">
          <Calendar size={16} className="text-gray-600" />
          <span>
            {formatDisplayDate(startDate)} - {formatDisplayDate(endDate)}
          </span>
        </div>
        <ChevronDown size={16} className="text-gray-600" />
      </div>

      {showCalendar && (
        <div className="absolute z-50 mt-2 p-4 w-[300px] bg-white border border-gray-300 rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
              className="p-1 hover:bg-gray-200 rounded"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="text-sm font-semibold">
              {currentMonth.format("MMMM YYYY")}
            </div>
            <button
              onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
              className="p-1 hover:bg-gray-200 rounded"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Weekday labels */}
          <div className="grid grid-cols-7 text-center text-xs text-gray-600 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Day buttons */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {daysInMonth().map((day, index) => {
              if (!day) return <div key={index}></div>;

              const selected = isSelected(day);
              const inRange = isInRange(day);

              return (
                <div key={index} className="h-8">
                  <button
                    onClick={() => handleDateClick(day)}
                    onMouseEnter={() => setHoverDate(day)}
                    onMouseLeave={() => setHoverDate(null)}
                    className={`w-full h-full rounded-full 
                      ${
                        selected
                          ? "bg-blue-600 text-white"
                          : inRange
                          ? "bg-blue-100 text-blue-800"
                          : "hover:bg-gray-200"
                      }`}
                  >
                    {day.date()}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
