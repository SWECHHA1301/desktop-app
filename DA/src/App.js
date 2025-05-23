import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import ProductCard from './Product/ProductCard';
import OrderDashboard from './OrderStatus/OrderDashboard';
import OrderHistory from './OrderHistory/OrderHistory';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <OrderHistory />
    
      </div>

  );
}

export default App;

