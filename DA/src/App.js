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


import StaffManagement from "./StaffManagement/StaffManagement";
import OrderHistory from "./OrderHistory/OrderHistory";
import AccManagement from "./HistoryMgmt/AccManagement";
import AddProduct from "./AddProduct/AddProduct";
import ManageProduct from "./ManageProduct/ManageProduct";
import OrderCancellation from "./PopUps/OrderCancellation";
import ApplyDiscount from "./PopUps/ApplyDiscount";
import AddNoteModal from "./PopUps/AddNoteModal";
import FoodVariationModal from "./PopUps/FoodVariationModal";

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
<<<<<<< HEAD
      {/* <MainContainer children={<Dashboard />}/> */}
=======
      <MainContainer children={<Dashboard />}/>
>>>>>>> b890aa60ebc84973e4c6451016fd16dd17b5699d
      {/* <MainContainer children={<StaffManagement />}/> */}
      {/* <MainContainer children={<AccManagement/>}/> */}
     
      {/* <MainContainer children={<ItemCancellation />}/> */}
    
   {/* <MainContainer children={<OrderHistory/>}/> */}

      {/* <MainContainer children={<PaymentModal/>}/> */}
   

        {/* <MainContainer children={<ItemCancellation/>}/> */}
 {/* <MainContainer children={<ManageProduct/>}/> */}
 {/* <MainContainer children={<OrderDashboard/>}/> */}
  {/* <MainContainer children={<OrderCancellation />} /> */}
    <MainContainer children={<FoodVariationModal />} />
       
       {/* <MainContainer children={<ManageProduct/>}/> */}



    </div>
  );
}

// Customer A
// KOT 1 A,B,C
// KOT 2 C D
// KOT 3 E, F

export default App;
