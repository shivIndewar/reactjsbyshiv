import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
const AppComponent = ()=>(
    <div className="app">
        <HeaderComponent />
        <Outlet />
    </div>
);

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppComponent />,
        children :[
            {
                path:"/",
                element:<BodyComponent />
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading..!!!!</h1>}><About /></Suspense> 
            },
            {
                path:"/contactus",
                element:<ContactUs />
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/grocery",
                element: (
                            <Suspense fallback={<h1>Loading....!!!</h1>}>
                                 <Grocery /> 
                            </Suspense>
                         ), 
            }
        ],
        errorElement:<Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppComponent />); // Here rendering the app component directly instead of Routerprovider

root.render(<RouterProvider router={appRouter} />);