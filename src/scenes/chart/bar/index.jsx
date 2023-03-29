import { Box } from "@mui/material";
import React from "react";
import BarChart from "../../../components/BarChart";
import Header from "../../../components/Header";

import { mockBarData } from "../../../data/mockData";

export const barData = {
  data: mockBarData,
  keys: ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"],
  indexBy: "country",
  fillDot: ['fries'], // add dot to display
  fillLine: ['sandwich'], // add line to display
  legendX: 'Country',
  legendY: 'Food'
};

const Bar = () => {

  return (
    <Box m="20px">
      <Header title="bar chart" subTitle="Simple Bar Chart" />
      <Box height="75vh" mt="10px">
        <BarChart data={barData} />
      </Box>
    </Box>
  );
};

export default Bar;
