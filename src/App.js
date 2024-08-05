import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard'; // Default import
import Analytics from './components/Analytics';
import Customers from './components/Customers';
import Orders from './components/Orders';
import Settings from './components/Settings';
import './App.css'
import Wallets from './components/Wallets';
import Message from './components/Message';
import Notification from './components/Notification';
import Profile from './components/Profile';

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-black">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wallet" element={<Wallets />} />
            <Route path='/settings' element={<Settings />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
