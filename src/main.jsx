import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import AuthProvider from './Contexts/UserContext.jsx';

import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/Signup/SignUp.jsx';
// import Cart from './Components/Cart/Cart.jsx';
import About from './Components/About/About.jsx';
import Support from './Components/Support/Support.jsx';
import Product from './Components/Product/Product.jsx';
import ProductDetail from './Components/Product/ProductDetail.jsx';

import AdminDashboard from './Components/AdminDashboard/AdminDashboard.jsx';
import Dashboard from './Components/AdminDashboard/Dashboard.jsx';
import Products from './Components/AdminDashboard/Products.jsx';
import Category from './Components/AdminDashboard/Category.jsx';
import Orders from './Components/AdminDashboard/Orders.jsx';
import Coupons from './Components/AdminDashboard/Coupons.jsx';
import AddProduct from './Components/AdminDashboard/AddProduct.jsx';
import EditProduct from './Components/AdminDashboard/EditProducts.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import CategoryProvider from './Contexts/CategoryContext.jsx';
import Settings from './Components/Home/Settings.jsx';
import OurTeam from './Components/About/OurTeam.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetail/>} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
        {/* <Route path="cart" element={<Cart />} /> */}
        <Route path="Settings" element={<Settings />} />
        <Route path="/ourteam" element={<OurTeam />} />
        
      </Route>
      <Route path="/admin" element={<AdminDashboard />}>
          <Route path="" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="category" element={<Category />} />
          <Route path="orders" element={<Orders />} />
          <Route path="coupons" element={<Coupons />} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </CategoryProvider>
  </StrictMode>
);