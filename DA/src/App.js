import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';

import TableDashboard from './Table Management/TableDashboard';
import ProductCard from './Product/ProductCard';
import OrderDashboard from './OrderStatus/OrderDashboard';
import Dashboard from './Product-Info/Dashboard/Dashboard';
import OrderTypeSwitch from './Common/OrderTypeSwitch';
import PurchaseReceipt from './Common/PurchaseReciept';
import OrderHistory from './OrderHistory/OrderHistory';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      {/* <PurchaseReceipt/> */}
      {/* <OrderDashboard /> */}
      {/* <Dashboard/> */}
      {/* <OrderTypeSwitch/> */}
      <OrderHistory/>
    </div>
  );
}

export default App;

