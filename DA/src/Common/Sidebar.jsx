import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, Clock, Settings, ShoppingCart, User,  UserSquare } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}>
        <Home size={30} /><span>Home</span>
      </NavLink>

      <NavLink to="/table" className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}>
        <Layers size={30} /><span>Table</span>
      </NavLink>

      <NavLink to="/history" className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}>
        <Clock size={30} /><span>History</span>
      </NavLink>

      <NavLink to="/order" className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}>
        <ShoppingCart size={30} /><span>Order</span>
      </NavLink>

      <NavLink to="/account" className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}>
        <User /><span>Account</span>
      </NavLink>

      <NavLink to="/customerlist" className={({ isActive }) => isActive ? 'nav-icon active' : 'nav-icon'}>
      <UserSquare /><span>Customer</span>
      </NavLink>

      <div className="nav-icon">
        <Settings size={30} /><span>Setting</span>
      </div>
    </div>
  );
};

export default Sidebar;



<div className="nav-icon"><User size={20} /><span>Account</span></div>