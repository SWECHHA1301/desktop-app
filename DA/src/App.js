import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';

import TableDashboard from './Table Management/TableDashboard';
import ProductCard from './Product/ProductCard';
import OrderDashboard from './OrderStatus/OrderDashboard';
import Dashboard from './Product-Info/Dashboard/Dashboard';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      {/* <PurchaseReceipt /> */}
      {/* <OrderDashboard /> */}
      <Dashboard/>
    </div>
  );
}

export default App;

