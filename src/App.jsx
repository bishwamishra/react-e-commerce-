import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./ui/layout/Navbar";
import Footer from "./ui/layout/Footer";
import Offers from "./ui/components/offers/Offers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === "/admin/dashboard";
  const isAdminSection = location.pathname.startsWith("/admin");

  return (
    <div className="app bg-light">
      <Navbar />
      <div className="main">
        <Outlet />
        {!isDashboard && !isAdminSection && <Offers />}
        {!isDashboard && !isAdminSection && <Footer />}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
