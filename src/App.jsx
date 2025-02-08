import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";

import "./app.css";

// Import pages
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import DashboardLayout from "./partials/DashboardLayout";
import Fundamental from "./pages/Fundamental";

function App() {
  const location = useLocation();
  console.log("location.pathname ", location.pathname);
  console.log("1");
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analysis">
            <Route path="fundamental-analysis" element={<Fundamental />} />
          </Route>

          <Route path="*" element={<Dashboard />} />
        </Route>

        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
