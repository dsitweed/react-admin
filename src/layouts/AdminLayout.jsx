import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Box } from "@mui/material";

const AdminLayout = () => {
  return (
    <Box className="app" height="100vh">
      <ProSidebarProvider>
        <Box height="100vh">
          <Sidebar />
        </Box>
      </ProSidebarProvider>
      <main className="content">
        <Topbar />
        <Box maxHeight="100%">
          <Outlet />
        </Box>
      </main>
    </Box>
  );
};

export default AdminLayout;
