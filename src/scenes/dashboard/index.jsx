import { Box, Button } from "@mui/material";
import Header from "../../components/Header";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Dashboard = () => {
  return (
    <Box m={2} display="flex" justifyContent="space-between" alignItems="flex-end">
      {/* HEADER */}
      <Header title="Dash board" subTitle="Welcome to your dashboard" />
      <Box>
        <Button>
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
