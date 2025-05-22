import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
<<<<<<< HEAD
import OrderDashboard from './OrderStatus/OrderDashboard';
=======
// import Dashboard from './Product-Info/Dashboard/Dashboard';
import TableDashboard from './Table Management/TableDashboard';
import ProductCard from './Product/ProductCard';
// import TotalItem from './Product-Info/Dashboard/Components/TotalBlock/TotalItem';
// import SellingItem from './Product-Info/Dashboard/Components/SellingItem/SellingItem';
>>>>>>> 1cb6594a1345e5b728e8778999bae4e9c5e096a0

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

