import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Building from "../pages/Building/Building";
import Interior from "../pages/Interior/Interior";
import Flat from "../pages/Flat/Flat";
import Civil from "../pages/Civil/Civil";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contactUs",
                element: <ContactUs/>
            },
            {
                path: "/flat",
                element: <Flat></Flat>
            },
            {
                path: "/building",
                element: <Building></Building>
            },
            {
                path: "/interior",
                element: <Interior></Interior>
            },
            
            {
                path: "/civil",
                element: <Civil></Civil>
            },
            
        ],
    },
]);

export default router