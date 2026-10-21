import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout; 