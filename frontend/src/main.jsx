import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import store from './store';
import { HelmetProvider } from 'react-helmet-async';

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import HomeScreen from './Pages/HomeScreen.jsx';
import CartPage from './Pages/CartPage.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import ShippingPage from './Pages/ShippingPage.jsx';
import PaymentPage from './Pages/PaymentPage.jsx';
import PlaceOrderPage from './Pages/PlaceOrderPage.jsx';
import OrderPage from './Pages/OrderPage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';
import OrderListPage from './Pages/admin/OrderListPage.jsx';
import ProductListPage from './Pages/admin/ProductListPage.jsx';
import ProductEdit from './Pages/admin/ProductEdit.jsx';
import UserListPage from './Pages/admin/UserListPage.jsx';
import UserEditPage from './Pages/admin/UserEditPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<HomeScreen />}
      />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/placeorder' element={<PlaceOrderPage />} />
        <Route path='/order/:id' element={<OrderPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListPage />} />
        <Route path='/admin/productlist' element={<ProductListPage />} />
        <Route
          path='/admin/productlist/:pageNumber'
          element={<ProductListPage />}
        />
        <Route path='/admin/product/:id/edit' element={<ProductEdit />} />
        <Route path='/admin/userlist' element={<UserListPage />} />
        <Route path='/admin/user/:id/edit' element={<UserEditPage />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={false}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
