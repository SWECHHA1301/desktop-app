import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './Product/ProductCard';
import Dashboard from './Dashboard/Dashboard';
import TableDashboard from './TableManagement/TableDashboard';
import OrderHistory from './OrderHistory/OrderHistory';
import OrderDashboard from './OrderStatus/OrderDashboard';
import AccManagement from './HistoryMgmt/AccManagement';
import CustomerList from './CustomerDetails/CustomerList';
import MainContainer from './MainContainer';

function App() {
  return (
    <Router>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<ProductCard />} />
          <Route path="/table" element={<TableDashboard />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/order" element={<OrderDashboard />} />
          <Route path="/account" element={<AccManagement />} />
          <Route path="/customerlist" element={<CustomerList />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;



// import React from "react";
// // import Navbar from "./Common/Navbar";
// // import Sidebar from "./Common/Sidebar";
// import ProductCard from "./Product/ProductCard";
// import TableDashboard from "./Table Management/TableDashboard";
// // import PurchaseReceipt from "./Receipt/PurchaseReciept";
// // import CustomerList from "./CustomerDetails/CustomerList";
// import OrderDashboard from "./OrderStatus/OrderDashboard";
// // import Dashboard from "./Dashboard/Dashboard";
// // import OrderTypeSwitch from "./Common/OrderTypeSwitch";
// import MainContainer from "./MainContainer";
// import PaymentModal from "./PopUps/PaymentModal";
// import ItemCancellation from "./PopUps/ItemCancellation";

// import StaffManagement from "./StaffManagement/StaffManagement";
// import OrderHistory from "./OrderHistory/OrderHistory";
// import AccManagement from "./HistoryMgmt/AccManagement";
// import AddProduct from "./AddProduct/AddProduct";
// import ManageProduct from "./ManageProduct/ManageProduct";

// import OrderCancellation from "./PopUps/OrderCancellation";
// import ApplyDiscount from "./PopUps/ApplyDiscount";
// import AddNoteModal from "./PopUps/AddNoteModal";
// import FoodVariationModal from "./PopUps/FoodVariationModal";
// import AddExpense from "./AddExpenses/AddExpense";
// import PaymentPage from "./PaymentPage/PaymentPage";
// import AddSale from "./AddSale/AddSale";
// import AddStaffForm from "./AddNewStaff/AddStaffForm";
// import ImageSelector from "./Common/ImageSelector";
// import CreatePayment from "./CreatePayment/CreatePayment";
// import PurchaseReceipt from "./Receipt/PurchaseReciept";
// import CustomTable from "./Receipt/components/CustomTable";
// import PaymentSummary from "./Receipt/components/PaymentSummary";
// import PurchaseInfo from "./Receipt/components/PurchaseInfo";
// // import OrderCancellation from "./PopUps/OrderCancellation";
// // import ApplyDiscount from "./PopUps/ApplyDiscount";
// // import AddNoteModal from "./PopUps/AddNoteModal";
// // import FoodVariationModal from "./PopUps/FoodVariationModal";
// // import AddExpense from "./AddExpenses/AddExpense";
// // import PaymentPage from "./PaymentPage/PaymentPage";
// import Dashboard from "./Dashboard/Dashboard"

// function App() {
//   return (
//     <div className="app">
//       {/* <MainContainer children={<CustomerList />} /> */}
//        {/* <MainContainer children={<Dashboard />}/>  */}

      // {/* <MainContainer children={<StaffManagement />}/> */}
      // <MainContainer children={<AccManagement/>}/>

//       {/* <MainContainer children={<StaffManagement />}/> */}
//       {/* <MainContainer children={<AccManagement/>}/> */}


//       {/* <MainContainer children={<ItemCancellation />}/> */}


//       {/* <MainContainer children={<OrderHistory/>}/> */}

    


//       {/* <MainContainer children={<PaymentModal />} /> */}

//       {/* <MainContainer children={<ManageProduct/>}/> */}
//       {/* <MainContainer children={<OrderDashboard/>}/> */}
//       {/* <MainContainer children={<OrderCancellation />} /> */}
//       {/* <MainContainer children={<FoodVariationModal />} /> */}


      

//       <MainContainer children={<AddExpense />} />
      // <MainContainer children={<AddExpense />} />


//       {/* <MainContainer children={<PaymentPage />} /> */}
//       {/* <MainContainer children={<AddNoteModal />} /> */}

//       {/* <MainContainer children={<AddStaffForm/>}/> */}

//       {/* <MainContainer children={<ApplyDiscount />} /> */}
//       {/* <MainContainer children={<ProductCard/>}/> */}

//       {/* <MainContainer children={<TableDashboard/>}/> */}
//       {/* <MainContainer children={<CustomTable/>}/> */}
//       {/* <MainContainer children={<PaymentSummary/>}/> */}

     
//         {/* <MainContainer children={<PurchaseInfo/>}/> */}
//       {/* <PurchaseReceipt/> */}
        


//     </div>
//   );
// }

// // Customer A
// // KOT 1 A,B,C
// // KOT 2 C D
// // KOT 3 E, F

// export default App;
