import { Box } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import LineChart from "../../../components/LineChart";
import { mockLineData } from "../../../data/mockData";

export const lineData = {
  data: mockLineData,
  legendX: "Transportation",
  legendY: "Count",
};

const Line = () => {
  
  return (
    <Box m="20px">
      <Header title="Line chart" subTitle="Simple line chart" />
      <Box height="75vh">
        <LineChart data={lineData} />
      </Box>
    </Box>
  );
};

export default Line;
