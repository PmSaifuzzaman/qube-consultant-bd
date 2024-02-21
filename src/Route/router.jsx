import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Services from "../components/Services/Services";
import Building from "../pages/Building/Building";



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
            }
            
        ],
    },
]);

export default router