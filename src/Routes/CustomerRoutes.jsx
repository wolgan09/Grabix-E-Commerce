import React from 'react';
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Pages/client/components/PrivateRoute';
import AllProducts from '../Pages/client/pages/AllProducts';
import Cart from '../Pages/client/pages/Cart';
import Home from '../Pages/client/pages/Home';
import Login from '../Pages/client/pages/Login';
import SignUp from '../Pages/client/pages/SignUp';
import SingleProduct from '../Pages/client/pages/SingleProduct';
import UserAccount from '../Pages/client/pages/UserAccount';
import Payment from '../Pages/client/pages/Payment';
import Dashboard from '../Pages/admin/pages/Dashboard';


function CustomerRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts/:products" element={<AllProducts />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cart' element={
              <PrivateRoute>
                <Cart/>
              </PrivateRoute>
              } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allproducts/:products/:id" element={<SingleProduct />} />
        <Route
          path="/account/"
          element={
            <PrivateRoute>
              <UserAccount />
            </PrivateRoute>
          }
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default CustomerRoutes