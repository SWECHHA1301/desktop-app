import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
// import Dashboard from './Product-Info/Dashboard/Dashboard';
import TableDashboard from './Table Management/TableDashboard';
import PurchaseReceipt from './Common/Receipt';
// import TotalItem from './Product-Info/Dashboard/Components/TotalBlock/TotalItem';
// import SellingItem from './Product-Info/Dashboard/Components/SellingItem/SellingItem';

function App() {
  return (
    <div className="app">
      {/* <Navbar />
      
        <Sidebar />
        
       <TableDashboard/> */}
       <PurchaseReceipt/>
      
    </div>
  );
}

export default App;

