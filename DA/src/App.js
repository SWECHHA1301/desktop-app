
import React from "react";
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
// import ProductCard from "./Product/ProductCard";
// import TableDashboard from "./Table Management/TableDashboard";
// import OrderHistory from "./OrderHistory/OrderHistory";
// import WorkingCalendar from './Common/Calendar/Calendar';
// import AccManagement from './HistoryMgmt/AccManagement';
// import PurchaseReceipt from './Product/PurchaseReciept';
import CustomerList from './xx/CustomerList';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      {/* <TableDashboard /> */}
      <CustomerList />

      {/* <PurchaseReceipt/> */}
      {/* <OrderDashboard /> */}
      {/* <Dashboard/> */}
      {/* <OrderTypeSwitch/> */}
      {/* <OrderHistory/> */}
      {/* <CustomerDetail/> */}
      {/* <AccManagement/> */}
      {/* <PurchaseReceipt /> */}
    </div>
  );
}

export default App;




