import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/LayOut/Home';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import LogIn from './Components/LogIn/LogIn';
import cartProductsLoader from './Loaders/CartProductLoader';
import CheckOut from './Components/CheckOut/CheckOut';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router= createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>,
      children:[
        {
          path:'/',
          element:<Shop></Shop>,
        },
        {
          path:'orders',
          element:<Orders></Orders>,
          loader:cartProductsLoader,
        },
        {
          path:'inventory',
          element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path:'checkout',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
          path:'LogIn',
          element:<LogIn></LogIn>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },

      ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
