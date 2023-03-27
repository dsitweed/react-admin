import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography chart" subTitle="Simple Geography Chart" />
      <Box mt="10px" height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
