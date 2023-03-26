import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/chart/bar";
import Line from "./scenes/chart/line";
import Pie from "./scenes/chart/pie";

import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import ErrorPage from "./ErrorPage";
import Calendar from "./scenes/calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/calendar",
        element: <Calendar />
      },
      {
        path: "/bar",
        element: <Bar />,
      },
      {
        path: "/pie",
        element: <Pie />,
      },{
        path: "/line",
        element: <Line />,
      },
      
      {
        path: "/geography",
        element: <Geography />,
      },
    ]
  },
]);

export default router;
