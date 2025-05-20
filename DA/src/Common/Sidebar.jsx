import React from 'react';
import { Home, Layers, Clock, Settings } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-icon"><Home size={20} /><span>Home</span></div>
      <div className="nav-icon active"><Layers size={20} /><span>Home</span></div>
      <div className="nav-icon"><Clock size={20} /><span>Home</span></div>
      <div className="nav-icon"><Settings size={20} /><span>Home</span></div>
    </div>
  );
};

export default Sidebar;

