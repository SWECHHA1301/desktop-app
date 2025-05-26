import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DaysPicker() {
  return (
    <div style={{
      backgroundColor: 'white',
      maxWidth: '101px',
      maxHeight: '27px',
      borderRadius: '10px',
      overflow: 'hidden',
      padding: 0,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
    }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['day']}
          slotProps={{
            textField: {
              variant: 'standard',
              margin: 'none', // <- Remove extra margin
              sx: {
                maxWidth: '100px',
                '& .MuiInputBase-root': {
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '0px',
                  height: '27px', // control input height
                },
                '& .MuiInputBase-input': {
                  padding: '0px 5px',
                  fontSize: '12px',
                  textAlign: 'center',
                },
              },
            }
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
