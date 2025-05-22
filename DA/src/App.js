import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import OrderDashboard from './OrderStatus/OrderDashboard';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      {/* <PurchaseReceipt /> */}
      <OrderDashboard />

    </div>
  );
}

export default App;

