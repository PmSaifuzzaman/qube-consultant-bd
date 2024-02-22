import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Services from "../components/Services/Services";
import Building from "../pages/Building/Building";
import Interior from "../pages/Interior/Interior";



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
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/building",
                element: <Building></Building>
            },
            {
                path: "/interior",
                element: <Interior></Interior>
            }
            
        ],
    },
]);

export default router