import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import ProductCard from './Product/ProductCard';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <ProductCard />
      </div>

  );
}

export default App;

