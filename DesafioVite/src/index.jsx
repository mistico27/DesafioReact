import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home/home';
import Login from './pages/login/login';
import Form from './pages/form/form';
import Edit from './pages/Edit/Edit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement:<p>Bad request of the user</p>
   
  },
  {
    path: "/home",
    element:<Home />,
    errorElement:<p>Bad request of the user</p>
  },
  {
    path: "/form",
    element:<Form />,
    errorElement:<p>Bad request of the user</p>
  },
  {
    path: "/edit",
    element:<Edit />,
    errorElement:<p>Bad request of the user</p>
  },

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <RouterProvider router={router}/>
 
)