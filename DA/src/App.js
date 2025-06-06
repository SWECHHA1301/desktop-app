
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './MainPages/Product/ProductCard';
import Dashboard from "./MainPages/Dashboard/Dashboard";
import TableDashboard from './MainPages/TableManagement/TableDashboard';
import OrderHistory from './MainPages/OrderHistory/OrderHistory';
import OrderDashboard from './MainPages/OrderStatus/OrderDashboard';
import AccManagement from './MainPages/HistoryMgmt/AccManagement';
import CustomerList from './MainPages/CustomerDetails/CustomerList';
import MainContainer from './MainContainer';
import AddExpense from "./Sales/AddExpenses/AddExpense";
import AddProduct from "./Products/AddProduct/AddProduct"
import CancelOrderModal from "./PopUps/CancelOrderModal";
import CancelItemsModal from "./PopUps/CancelItemsModal";
import StaffAttendance from "./MainPages/StaffAttendence/StaffAttendence";

function App() {
  return (
    <Router>
      <MainContainer children={<StaffAttendance />}/>
      {/* <MainContainer>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<ProductCard />} />
          <Route path="/table" element={<TableDashboard />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/order" element={<OrderDashboard />} />
          <Route path="/account" element={<AccManagement />} />
          <Route path="/customerlist" element={<CustomerList />} />
        </Routes>
      </MainContainer> */}
    </Router>
  );
}

export default App;

//  import React from 'react'
//  import MainContainer from "./MainContainer"
//  import AccManagement from "./HistoryMgmt/AccManagement"
//  export default function App() {
//    return (
//      <div>
//        <MainContainer children={<AccManagement/>}/>
//      </div>
//    )
//  }
 



