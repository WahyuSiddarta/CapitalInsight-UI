import React, { useState } from "react";
import "katex/dist/katex.min.css";
import { Outlet, useLocation } from "react-router";

import Header from "./Header";
import Sidebar from "./Sidebar";

const usePathSegments = () => {
  const location = useLocation();

  // Get path without query params
  const pathname = location.pathname;

  // Split path and remove empty strings
  const segments = pathname.split("/").filter(Boolean);

  // Get the last meaningful segment
  return segments.length > 0
    ? segments[segments.length - 1].replace("-", " ")
    : "Dashboard";
};

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let title = usePathSegments();
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        {/*  Site header */}

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow">
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            {/* Dashboard actions */}
            <div className="mb-4 sm:flex sm:justify-between sm:items-center">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-800 capitalize md:text-3xl dark:text-gray-100">
                  {title}
                </h1>
              </div>

              {/* Right: Actions */}
            </div>

            {/* Cards */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
