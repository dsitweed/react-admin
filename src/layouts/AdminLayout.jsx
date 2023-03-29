import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Box } from "@mui/material";

const AdminLayout = () => {
  return (
    <Box className="app" height="100vh" flexDirection="row" display="flex">
      <ProSidebarProvider>
        <Sidebar />
      </ProSidebarProvider>
      <main className="content" style={{ overflow: "auto" }}>
        <Topbar />
        <Outlet />
      </main>
    </Box>
  );
};

export default AdminLayout;
