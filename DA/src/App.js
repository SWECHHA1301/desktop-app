import React from "react";
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
import ProductCard from "./Product/ProductCard";
import TableDashboard from "./Table Management/TableDashboard";
import OrderHistory from "./OrderHistory/OrderHistory";
import PurchaseReceipt from "./Product/PurchaseReciept";



function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <TableDashboard />
    </div>
  );
}

export default App;
