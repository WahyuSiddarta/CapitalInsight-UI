import React, { useEffect, lazy } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";

import "./app.css";

// Import pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const LoginPage = lazy(() => import("./pages/Login"));
const DashboardLayout = lazy(() => import("./partials/DashboardLayout"));
const Fundamental = lazy(() => import("./pages/Fundamental"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

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

        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
