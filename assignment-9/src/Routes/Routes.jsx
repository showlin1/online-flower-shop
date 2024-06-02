import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Loggin from "../Pages/Login/Loggin";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
      path:"/",
      element:<Root></Root>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path:'/login',
            element:<Loggin></Loggin>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
    
  ]);

export default router;