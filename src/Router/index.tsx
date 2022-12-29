import { Dashboard } from "../Pages/Dashboard";
import { Home } from "../Pages/Home";
import { Register } from "../Pages/Register";
import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },{
        path: "/register",
        element: <Register />,
    },{
        path: "/dashboard",
        element: <Dashboard />,
    }

]);

export {routes};
