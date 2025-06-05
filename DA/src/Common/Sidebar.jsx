import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, Clock, Settings, ShoppingCart, User,  UserSquare } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {

  const styles = {
  sidebar: {
    width: '80px',
    backgroundColor: '#ffffff',
    height: 'calc(100vh - 80px)',
    padding: '25px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    boxShadow: '4px 4px 6px rgba(64, 64, 64, 0.1)', // Converted 25% to ~64 out of 255
    margin: 'auto 0px',
    marginLeft: '10px',
  },
  navIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    fontWeight: 600,
    fontSize: '13px',
    cursor: 'pointer',
  },
  navIconSvg: {
    marginBottom: '4px',
  },
  navIconActive: {
    color: '#3b57d5',
  },
};

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