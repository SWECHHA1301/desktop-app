import React from "react";
// import Navbar from "./Common/Navbar";
// import Sidebar from "./Common/Sidebar";
import ProductCard from "./Product/ProductCard";
import TableDashboard from "./Table Management/TableDashboard";
import PurchaseReceipt from "./Receipt/PurchaseReciept";
import CustomerList from "./CustomerDetails/CustomerList";
import OrderDashboard from "./OrderStatus/OrderDashboard";
import Dashboard from "./Dashboard/Dashboard";
import OrderTypeSwitch from "./Common/OrderTypeSwitch";
import MainContainer from "./MainContainer";
import PaymentModal from "./PopUps/PaymentModal";
import ItemCancellation from "./PopUps/ItemCancellation";
import AddSale from "./AddSale/AddSale";

import StaffManagement from "./StaffManagement/StaffManagement";
import OrderHistory from "./OrderHistory/OrderHistory";
import AccManagement from "./HistoryMgmt/AccManagement";
import AddProduct from "./AddProduct/AddProduct";

function App() {
  return (
    <div className="app">
      {/* <TableDashboard /> */}
      {/* <CustomerList /> */}

      {/* <PurchaseReceipt /> */}
      {/* <OrderDashboard /> */}
      {/* <Dashboard /> */}
      {/* <OrderTypeSwitch /> */}
      {/* <OrderHistory /> */}
      {/* <AccManagement/> */}
      {/* <PurchaseReceipt /> */}
      {/* <MainContainer children={<CustomerList />} /> */}
      {/* <MainContainer children={<Dashboard />}/> */}
      <MainContainer children={<StaffManagement />}/>

      {/* <MainContainer children={<PaymentModal />}/> */}
      {/* <MainContainer children={<ItemCancellation />}/> */}

<<<<<<< HEAD
      <MainContainer children={<AddProduct />} />
=======
    {/* <MainContainer children={<AddSale/>}/> */}
   
      

         
      
  
      <MainContainer children={<OrderDashboard />
>>>>>>> 9718e795145176c10cdd3a845a5dd5c138a7f01b
    </div>
  );
}

// Customer A
// KOT 1 A,B,C
// KOT 2 C D
// KOT 3 E, F

export default App;
