import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import AdminDashboard from '../pages/AdminDashboard';


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      {/* Add more admin-specific routes here */}
    </Routes>
  );
};

export default AdminRoutes;
