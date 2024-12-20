import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Index";
import About from "../pages/About/Index";
import Contact from "../pages/Contact/Index";
import { Properties } from "../pages/Properties/Index";
import Services from "../pages/Services/Index";
import Layout from "./Layout/Index";

export const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
