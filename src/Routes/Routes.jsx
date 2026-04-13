import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter ([
    {
        path:'/',
        Component:Layout,
        children:[
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            }
        ]
    }
])
export default router;