import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/admin/pages/Dashboard/Dashboard";
import List from "../Pages/admin/pages/list/List";
import Single from "../Pages/admin/pages/single/Single";
import New from "../Pages/admin/pages/new/New";
import { 
  // productInputs,
   userInputs } from "../Pages/admin/formSource";
import "../Pages/admin/style/dark.scss";
// import { DarkModeContext } from "../Pages/admin/context/darkModeContext";
import { AuthContext } from "../Pages/admin/context/AuthContext";
import ProductsList from '../Pages/admin/pages/products/ProductsList';
import OrdersList from '../Pages/admin/pages/orders/AllOrders';
import OrderDetails from '../Pages/admin/pages/orders/OrderDetails';
import BannerPage from '../Pages/admin/pages/banner/BannerPage';
import AddProduct from '../Pages/admin/pages/products/AddProduct';

function AdminRoutes() {

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/admin/login" />;
  };

  const {currentUser} = useContext(AuthContext)
  
  // const { darkMode } = useContext(DarkModeContext);
  return (
    <Routes>
    <Route path="/">
      {/* <Route path="login" element={<Login />} /> */}
      <Route
        index
        element={
          // <RequireAuth>
            <Dashboard />
          // </RequireAuth>
        }
      />
      <Route path="users">
        <Route
          index
          element={
            // <RequireAuth>
              <List />
            // </RequireAuth>
          }
        />
        <Route
          path=":userId"
          element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <New inputs={userInputs} title="Add New Vendor" />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="products">
        <Route
          index
          element={
            // <RequireAuth>
              <ProductsList />
            // </RequireAuth>
          }
        />
        <Route
          path=":productId"
          element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          }
        />
        <Route
          path="new"
          element={
            // <RequireAuth>
              <AddProduct />
            // </RequireAuth>
          }
        />
      </Route>
      <Route path="orders">
        <Route
          index
          element={
            // <RequireAuth>
              <OrdersList />
            // </RequireAuth>
          }
        />
        <Route
          path=":Id"
          element={
            // <RequireAuth>
              <OrderDetails />
            // </RequireAuth>
          }
        />
      </Route>
      <Route path="banners" element={<BannerPage />}/>
    </Route>
  </Routes>
  );
}

export default AdminRoutes