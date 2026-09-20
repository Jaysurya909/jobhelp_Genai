import {createBrowserRouter} from "react-router";
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import InterView from "./features/interview/pages/InterView";

export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"register",
        element:<Register/>
    },{
        path:"/",
        element:<Protected><Home/></Protected>
    },{
        path:"/interview/:interviewId",
        element: <Protected><InterView/></Protected>
    }
])