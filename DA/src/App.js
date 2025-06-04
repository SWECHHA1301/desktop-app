




import React from "react";
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
import ProductCard from "./Product/ProductCard";
import TableDashboard from "./TableManagement/TableDashboard";
import PurchaseReceipt from "./Receipt/PurchaseReciept";
import CustomerList from "./CustomerDetails/CustomerList";
import OrderDashboard from "./OrderStatus/OrderDashboard";
import Dashboard from "./Dashboard/Dashboard";
import OrderTypeSwitch from "./Common/OrderTypeSwitch";

import PaymentModal from "./PopUps/PaymentModal";
import ItemCancellation from "./PopUps/ItemCancellation";

import StaffManagement from "./StaffManagement/StaffManagement";
import OrderHistory from "./OrderHistory/OrderHistory";
import AccManagement from "./HistoryMgmt/AccManagement";
import AddProduct from "./AddProduct/AddProduct";
import ManageProduct from "./ManageProduct/ManageProduct";

import OrderCancellation from "./PopUps/OrderCancellation";

import AddNoteModal from "./PopUps/AddNoteModal";
import FoodVariationModal from "./PopUps/FoodVariationModal";
import AddExpense from "./AddExpenses/AddExpense";
import PaymentPage from "./PaymentPage/PaymentPage";
import AddSale from "./AddSale/AddSale";
import AddStaffForm from "./AddNewStaff/AddStaffForm";
import ImageSelector from "./Common/ImageSelector";
import CreatePayment from "./CreatePayment/CreatePayment";
import CustomTable from "./Receipt/components/CustomTable";
import PaymentSummary from "./Receipt/components/PaymentSummary";
import PurchaseInfo from "./Receipt/components/PurchaseInfo";
// import OrderCancellation from "./PopUps/OrderCancellation";
import ApplyDiscount from "./PopUps/ApplyDiscount";

// import FoodVariationModal from "./PopUps/FoodVariationModal";
// import AddExpense from "./AddExpenses/AddExpense";
// import PaymentPage from "./PaymentPage/PaymentPage";


function App() {
  return (
    <div className="app">
      {/* <MainContainer children={<CustomerList />} /> */}
       {/* <MainContainer children={<Dashboard />}/>  */}

      {/* <MainContainer children={<StaffManagement />}/> */}
      {/* <MainContainer children={<AccManagement/>}/> */}

      {/* <MainContainer children={<StaffManagement />}/> */}
      {/* <MainContainer children={<AccManagement/>}/> */}


      {/* <MainContainer children={<ItemCancellation />}/> */}

      {/* <MainContainer children={<OrderHistory/>}/> */}

      {/* <MainContainer children={<PaymentModal />} /> */}

      {/* <MainContainer children={<ManageProduct/>}/> */}
      {/* <MainContainer children={<OrderDashboard/>}/> */}
      {/* <MainContainer children={<OrderCancellation />} /> */}
      {/* <MainContainer children={<FoodVariationModal />} /> */}

      <ItemCancellation />

      {/* <MainContainer children={<PaymentPage />} /> */}
      {/* <MainContainer children={<AddNoteModal />} /> */}

      {/* <MainContainer children={<AddStaffForm/>}/> */}

      {/* <MainContainer children={<ApplyDiscount />} /> */}
      {/* <MainContainer children={<ProductCard/>}/> */}

      {/* <MainContainer children={<TableDashboard/>}/> */}
      {/* <MainContainer children={<CustomTable/>}/> */}
      {/* <MainContainer children={<PaymentSummary/>}/> */}

     
        {/* <MainContainer children={<PurchaseInfo/>}/> */}
      {/* <PurchaseReceipt/> */}

    </div>
  );
}


export default App;
