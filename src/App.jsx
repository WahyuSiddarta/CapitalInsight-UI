import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";

import "./app.css";

// Import pages
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import DashboardLayout from "./partials/DashboardLayout";
import Fundamental from "./pages/Fundamental";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const location = useLocation();

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
          <Route path="portfolio">
            <Route path="main-fund" element={<ComingSoon />} />
            <Route path="other" element={<ComingSoon />} />
          </Route>
          <Route path="analysis">
            <Route path="fundamental-analysis" element={<Fundamental />} />
            <Route path="technical-analysis" element={<ComingSoon />} />
            <Route path="bandarmology" element={<ComingSoon />} />
          </Route>
          <Route path="assets/custom-asset" element={<ComingSoon />} />

          <Route path="*" element={<ComingSoon />} />
        </Route>

        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
