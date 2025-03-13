import React from 'react'
import './DashboardLayout.css'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";


export const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  
  return (
    <div>
        <div className="menu"> MENU</div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}
