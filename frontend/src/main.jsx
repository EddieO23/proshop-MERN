import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'
import { Provider } from 'react-redux';
import store from './store';

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App.jsx';

import PrivateRoute from './components/PrivateRoute.jsx';
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/placeorder' element={<PlaceOrderPage />} />
        <Route path='/order/:id' element={<OrderPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={false}>
      <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </StrictMode>
);
