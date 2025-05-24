import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme css file

const DateRangePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date('2024-11-05'),
      endDate: new Date('2025-01-30'),
      key: 'selection',
    },
  ]);

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  return (
    <div style={{ position: 'relative', display: 'inline-block', background: '#e7eaf5', padding: '10px', borderRadius: '10px' }}>
      <div
        onClick={toggleCalendar}
        style={{
          cursor: 'pointer',
          border: '1px solid #ccc',
          padding: '8px 12px',
          borderRadius: '8px',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span role="img" aria-label="calendar">📅</span>
        <span>
          {`${format(range[0].startDate, 'MMM dd, yyyy')} - ${format(range[0].endDate, 'MMM dd, yyyy')}`}
        </span>
        <span style={{ marginLeft: 'auto' }}>▾</span>
      </div>

      {showCalendar && (
        <div style={{ position: 'absolute', zIndex: 1000 }}>
          <DateRange
            editableDateInputs={true}
            onChange={item => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
