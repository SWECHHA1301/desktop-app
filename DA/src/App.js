import React from "react";
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
import ProductCard from "./Product/ProductCard";
import TableDashboard from "./Table Management/TableDashboard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      {/* <ProductCard /> */}
      <TableDashboard />
    </div>
  );
}

export default App;
