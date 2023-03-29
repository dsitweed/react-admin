import { Box } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import PieChart from "../../../components/PieChart";
import { mockPieData } from "../../../data/mockData";

export const pieData = {
  data: mockPieData,
  fillDot: ['python'],
  fillLine: ['elixir'],
};

const Pie = () => {
 
  return (
    <Box m="20px">
      <Header title="pie chart" subTitle="Simple pie Chart" />
      <Box mt="10px" height="75vh">
        <PieChart data={pieData} />
      </Box>
    </Box>
  );
};

export default Pie;
