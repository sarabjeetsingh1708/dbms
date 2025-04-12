import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage } from './routes/homepage/Homepage';
import { DashboardPage } from './routes/dashboard/DashboardPage';
import { Chatpage } from './routes/chatPage/Chatpage';
import { SignUppage } from './routes/signUppage/SignUppage';
import { SignInPage } from './routes/SignInPage/SignInPage';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';  
import  { RootLayout } from './layouts/rootLayout/RootLayout';
import { DashboardLayout } from './layouts/dashboardLayout/DashboardLayout';
import React from 'react';



const Router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/sign-in/*",
          element: <SignInPage />,
        },
        {
          path: "/sign-up/*",
          element: <SignUppage />,
        },
        {
          element: <DashboardLayout />,
          children: [
            {
              path: "/dashboard",
              element: <DashboardPage />,
            },
            {
              path: "/dashboard/chats/:id",
              element: <Chatpage />,
            },
          ],
        },
      ],
    },
  ]);
  

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App