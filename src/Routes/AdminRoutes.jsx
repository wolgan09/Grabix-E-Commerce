import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/admin/pages/Dashboard';
import PrivateRoute from '../Pages/client/components/PrivateRoute';
import Home from '../Pages/client/pages/Home';



function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default AdminRoutes