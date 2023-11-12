import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../Components/Home/Home";
import OurMenu from "../Components/OurMenuSection/OurMenu/OurMenu";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Order from "../Components/Order/Order";

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
        }
      ]
    },
  ]);