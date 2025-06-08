import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import StaffHeader from './components/StaffHeader';
import SummaryHeader from './components/SummaryHeader';
import PaymentTable from './components/PaymentTable';
import NativeDateRangePicker from '../../Common/NativeDateRangePicker';

const Payroll = () => {
  const [staffName, setStaffName] = useState();

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: 10,
        width: '100%',
        // maxWidth: "1390px",
        height: "648px",
        backgroundColor: "#D4DAED",
        padding: "10px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <ChevronLeft size={20} color='white' />
          <ChevronRight size={20} />
          <span style={{ fontSize: "18px", fontWeight: "600", color: "#3658BF" }}>Payroll</span>
        </div>
        <NativeDateRangePicker />
      </div>

      
      <StaffHeader />
      <SummaryHeader />
      <PaymentTable />
    </div>
  );
};

export default Payroll;
