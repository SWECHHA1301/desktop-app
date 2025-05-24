import React from "react";
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
import ProductCard from "./Product/ProductCard";
import TableDashboard from "./Table Management/TableDashboard";
import PurchaseReceipt from "./Product/PurchaseReciept";
import CustomerList from "./CustomerDetails/CustomerList";
import OrderDashboard from "./OrderStatus/OrderDashboard";
import Dashboard from "./Dashboard/Dashboard";
import OrderTypeSwitch from "./Common/OrderTypeSwitch";
import OrderHistory from "./OrderHistory/OrderHistory";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div className="app">
      {/* <TableDashboard /> */}
      {/* <CustomerList /> */}

      {/* <PurchaseReceipt /> */}
      {/* <OrderDashboard /> */}
      {/* <Dashboard /> */}
      {/* <OrderTypeSwitch /> */}
      {/* <CustomerDetail/> */}
      {/* <AccManagement/> */}
      {/* <PurchaseReceipt /> */}
      <MainContainer children={<CustomerList />} />
    </div>
  );
}

export default App;
