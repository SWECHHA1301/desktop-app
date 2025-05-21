import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import { Table } from 'lucide-react';
import TableDashboard from './Table Management/TableDashboard';


function App() {
  return (
    <div className="app">
      <Navbar />
       <Sidebar />
       <TableDashboard />
      </div>
  );
}

export default App;

