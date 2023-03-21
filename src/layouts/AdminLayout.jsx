import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import { ProSidebarProvider } from "react-pro-sidebar";

const AdminLayout = () => {
  return (
    <div className="app">
      <ProSidebarProvider>
        <Sidebar />
      </ProSidebarProvider>
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
