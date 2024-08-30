import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from '../pages/UserDashboard';


const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<UserDashboard />} />
      {/* Add more user-specific routes here */}
    </Routes>
  );
};

export default UserRoutes;
