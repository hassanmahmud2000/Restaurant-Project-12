import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../Components/Home/Home";
import OurMenu from "../Components/OurMenuSection/OurMenu/OurMenu";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Order from "../Components/Order/Order";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRoute from "../Components/SheardItem/PrivateRoute/PrivateRoute";
import Desboard from "../Components/Desboard/Desboard";
import Cart from "../Components/Desboard/Cart/Cart";
import AllUsers from './../Components/Desboard/AllUsers/AllUsers';
import AddItems from "../Components/Desboard/DeshboardNavbar/AddItems/AddItems";
import AdminRoutes from "../Components/SheardItem/AdminSite/AdminRoutes";
import ManageItems from "../Components/Desboard/DeshboardNavbar/ManageItems/ManageItems";
import UpdateItem from "../Components/Desboard/UpdateItem/UpdateItem";
import Payment from "../Components/Desboard/DeshboardNavbar/Payment/Payment";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot></MainRoot>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'/ourshop',
          element:<Order></Order>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Desboard></Desboard></PrivateRoute>,
      children:[
        // For Normal Users
        {
          path:'/dashboard/cart',
          element:<Cart></Cart>
        },
        {
          path:'/dashboard/payment',
          element:<Payment></Payment>
        },
        // For Admin
        {
          path:'/dashboard/allusers',
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'/dashboard/items',
          element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
        {
          path:'/dashboard/additems',
          element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path:'/dashboard/update/:id',
          element:<AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);