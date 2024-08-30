import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';


const AppRoutes = () => {
  return (
    <Routes>
      {/* Include user and admin routes */}
      <Route path="/user/*" element={<UserRoutes />} />
      {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
      
      <Route path="*" element={<>No Match</>} />
    </Routes>
  );
};

export default AppRoutes;
