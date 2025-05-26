import React from "react";
// import Navbar from "./Common/Navbar";
// import Sidebar from "./Common/Sidebar";
// import ProductCard from "./Product/ProductCard";
import TableDashboard from "./Table Management/TableDashboard";
import PurchaseReceipt from "./Receipt/PurchaseReciept";
import CustomerList from "./CustomerDetails/CustomerList";
import OrderDashboard from "./OrderStatus/OrderDashboard";
import Dashboard from "./Dashboard/Dashboard";
import OrderTypeSwitch from "./Common/OrderTypeSwitch";
import OrderHistory from "./OrderHistory/OrderHistory";
import MainContainer from "./MainContainer";
import PaymentModal from "./PopUps/PaymentModal";
import ItemCancellation from "./PopUps/ItemCancellation";

function App() {
  return (
    <div className="app">
      {/* <TableDashboard /> */}
      {/* <CustomerList /> */}

      {/* <PurchaseReceipt /> */}
      {/* <OrderDashboard /> */}
      {/* <Dashboard /> */}
      {/* <OrderTypeSwitch /> */}

      {/* <AccManagement/> */}
      {/* <PurchaseReceipt /> */}
      <MainContainer children={<OrderDashboard />} />
    </div>
  );
}

export default App;


