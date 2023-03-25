import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";

const Content = () => {
  const rows = mockDataContacts;
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "age", headerName: "Age", type: "number" },
    { field: "phone", headerName: "Phone number", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City" },
    { field: "zipCode", headerName: "Zip code", type: "number", flex: 0.5 },
    {
      field: "registrarId",
      headerName: "RegistrarId",
      type: "number",
      flex: 0.6,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="contact"
        subTitle="List of Contacts for Future Reference"
      />

      <Box
        height="75vh"
        m="20px 0 0 0"
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
          //   Styles toolbar
          "& .MuiDataGrid-toolbarContainer": {
            marginBottom: "8px",
            color: "black !important",
          },
          "& .MuiButton-text": {
            color: "black",
            fontWeight: 600,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          pageSizeOptions={[10, 25, 50]}
        />
      </Box>
    </Box>
  );
};

export default Content;
