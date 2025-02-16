import React, { useEffect, lazy, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";

import "./app.css";
import { refreshToken } from "./utils/Api"; // Import isUserLoggedIn
import ErrorModal from "./components/ErrorModal"; // Import ErrorModal
import { isUserLoggedIn } from "./utils/auth";

// Import pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const LoginPage = lazy(() => import("./pages/Login"));
const DashboardLayout = lazy(() => import("./partials/DashboardLayout"));
const Fundamental = lazy(() => import("./pages/Fundamental"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const RegisterForm = lazy(() => import("./pages/Register"));

const PrivateRoute = ({ element }) => {
  const isLoggedIn = isUserLoggedIn(); // Ensure isUserLoggedIn is called correctly
  // if (process.env.NODE_ENV === "development") {
  //   return element;
  // }
  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

function App() {
  const location = useLocation();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    console.log("VER:1.0.0");
    if (isUserLoggedIn()) {
      refreshToken().catch((error) => {
        setErrorMessage(error.message);
        setShowErrorModal(true);
      });
    }
  }, []);

  const handleCloseErrorModal = () => setShowErrorModal(false);

  return (
    <>
      <ErrorModal
        show={showErrorModal}
        handleClose={handleCloseErrorModal}
        errorMessage={errorMessage}
      />
      <Routes>
        <Route
          path="dashboard"
          element={<PrivateRoute element={<DashboardLayout />} />}
        >
          <Route index element={<ComingSoon />} />
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
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
