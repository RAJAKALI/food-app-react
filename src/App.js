import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import ResturntInfo from "./components/RetruntInfo";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet/>
    <Footer />
  </>
);

const routerroot=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contacts',
        element:<Contacts/>
      },
      {
        path:'restrunts/:ResId',
        element:<ResturntInfo/>
      }
    ],
    errorElement:<Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerroot}/>);
