import { useState } from 'react'
import "./App.css";
import React from 'react';
import Dashboard from './Compo/Dashboard/Dashboard'
import Login from './Compo/Login/Login'
import Register from './Compo/Register/Register'
import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='min-h-screen'><Login/></div>
  },  {
    path: "/register",
    element: <div className='min-h-screen'><Register/></div>
  },  {
    path: "/dashboard",
    element: <div className='min-h-screen'><Dashboard/></div>
  },
])

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App
