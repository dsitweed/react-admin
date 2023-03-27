import { Box } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import LineChart from "../../../components/LineChart";
import { mockLineData } from "../../../data/mockData";

const Line = () => {
  const data = {
    data: mockLineData,
    legendX: "Transportation",
    legendY: "Count",
  };
  return (
    <Box m="20px">
      <Header title="Line chart" subTitle="Simple line chart" />
      <Box height="75vh">
        <LineChart data={data} />
      </Box>
    </Box>
  );
};

export default Line;
