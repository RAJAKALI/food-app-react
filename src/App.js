import React, { lazy, Suspense, useEffect, useState, } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import ResturntInfo from "./components/RetruntInfo";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Contacts = lazy(() => import('./components/Contacts'));

const AppLayout = () => {
  return(
  <Provider store={appStore}>
  <>
    <Navbar />
    <Outlet/>
  </>
  </Provider>
  );
};

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
        element:<Suspense fallback={<h1>Loading..</h1>}>
        <Contacts/>
        </Suspense>
      },
      {
        path:'restrunts/:ResId',
        element:<ResturntInfo/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ],
    errorElement:<Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerroot}/>);
