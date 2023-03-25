import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { mockDataTeam, roles } from "../../data/mockData";

const Team = () => {
  const rows = mockDataTeam;
  console.log(rows);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access level",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="5px"
            backgroundColor="#bdd4e8"
          >
            {(access === "admin" || access === roles[0]) && (
              <AdminPanelSettingsIcon />
            )}
            {(access === "manager" || access === roles[1]) && (
              <ManageAccountsIcon />
            )}
            {(access === "user" || access === roles[2]) && (
              <AccountCircleIcon />
            )}
            <Typography sx={{ ml: "5px" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Team" subTitle="Managing the Team Members" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(11,11,131,1) 41%, rgba(12,6,129,1) 100%)",
            color: "white",
            fontSize: "18px",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "20px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "800",
          },
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
