import React from 'react';
import { Home, Layers, Clock, Settings, ShoppingCart } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-icon"><Home size={20} /><span>Home</span></div>
      <div className="nav-icon"><Layers size={20} /><span>Table</span></div> 
      <div className="nav-icon"><Clock size={20} /><span>History</span></div>
      <div className="nav-icon"><ShoppingCart size={20} /><span>Cart</span></div>
      <div className="nav-icon"><Settings size={20} /><span>Setting</span></div>
    </div>
  );
};

export default Sidebar;

