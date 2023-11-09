import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../Components/Home/Home";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot></MainRoot>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);