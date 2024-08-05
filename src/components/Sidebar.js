import React, { useState } from "react";
import { FaHome, FaRegStickyNote, FaClipboardList, FaWallet, FaBars } from 'react-icons/fa';
import { VscGraph } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-900 text-white min-h-screen p-4 ${isOpen ? 'w-40' : 'w-20'} transition-width duration-300`}>
      <div className="flex items-center justify-between h-16 mb-8">
        <h1 className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Logo</h1>
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
          <FaBars />
        </button>
      </div>
      <nav className="sidebar">
        <ul>
          <li className="mb-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
              <FaHome className="mr-3" />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
            </NavLink>
          </li>
          <li className="mb-6">
            <NavLink to="/analytics" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
              <VscGraph className="mr-3" />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Analytics</span>
            </NavLink>
          </li>
          <li className="mb-6">
            <NavLink to="/customers" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
              <FaRegStickyNote className="mr-3" />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Customers</span>
            </NavLink>
          </li>
          <li className="mb-6">
            <NavLink to="/wallet" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
              <FaWallet className="mr-3" />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Wallet</span>
            </NavLink>
          </li>
          <li className="mb-6">
            <NavLink to="/orders" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
              <FaClipboardList className="mr-3" />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Orders</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
