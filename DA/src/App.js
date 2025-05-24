
import React from "react";
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";


import OrderDashboard from './OrderStatus/OrderDashboard';
import OrderHistory from "./OrderHistory/OrderHistory";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      {/* <TableDashboard /> */}
      {/* <CustomerList /> */}

      {/* <PurchaseReceipt/> */}
      <OrderHistory />
      
      
    </div>
  );
}

export default App;




