
// import React from 'react';
// import Navbar from './Common/Navbar';
// import Sidebar from './Common/Sidebar';

// import TableDashboard from './Table Management/TableDashboard';
// import ProductCard from './Product/ProductCard';
import OrderDashboard from './OrderStatus/OrderDashboard';
// import Dashboard from './Product-Info/Dashboard/Dashboard';
// import OrderTypeSwitch from './Common/OrderTypeSwitch';
// import PurchaseReceipt from './Common/PurchaseReciept';
// import OrderHistory from './OrderHistory/OrderHistory';
// import AccManagment from './OrderHistory/AccManagment/AccManagment';
// import CustomerDetail from './CustomerDetail/CustomerDetail'

import React from "react";
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
import ProductCard from "./Product/ProductCard";
import TableDashboard from "./Table Management/TableDashboard";
import OrderHistory from "./OrderHistory/OrderHistory";
import WorkingCalendar from './Common/Calendar/Calendar';
import AccManagement from './HistoryMgmt/AccManagement';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <TableDashboard />

      {/* <PurchaseReceipt/> */}
      {/* <OrderDashboard /> */}
      {/* <Dashboard/> */}
      {/* <OrderTypeSwitch/> */}
      {/* <OrderHistory/> */}
      {/* <CustomerDetail/> */}
      {/* <AccManagement/> */}
    </div>
  );
}

export default App;
