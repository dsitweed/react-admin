import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery"; // very useful

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import GitHubIcon from "@mui/icons-material/GitHub";

import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import { lineData } from "../../scenes/chart/line";
import { barData } from "../../scenes/chart/bar";
import { pieData } from "../../scenes/chart/pie";
import { mockTransactions } from "../../data/mockData";

const Dashboard = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)"); // return true if > 600

  const transactions = mockTransactions;

  const listStatBox = [
    {
      title: 12361,
      subTitle: "Emails Sent",
      progress: 75,
      increase: "+14%",
      icon: <MarkEmailUnreadIcon sx={{ fontSize: "26px" }} />,
    },
    {
      title: 431225,
      subTitle: "Sales Obtained",
      progress: 50,
      increase: "+21%",
      icon: <MonetizationOnIcon sx={{ fontSize: "26px" }} />,
    },
    {
      title: 32441,
      subTitle: "New Clients",
      progress: 30,
      increase: "+5%",
      icon: <PersonAddAlt1Icon sx={{ fontSize: "26px" }} />,
    },
    {
      title: 1325134,
      subTitle: "Traffic received",
      progress: 80,
      increase: "+43%",
      icon: <AirportShuttleIcon sx={{ fontSize: "26px" }} />,
    },
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="flex-end">
        {/* HEADER */}
        <Header title="Dash board" subTitle="Welcome to your dashboard" />
        <Box>
          <Button variant="outlined" sx={{ p: "10px 20px" }}>
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRID AND CHART */}
      <Box mt="20px">
        {/* ROW 1 */}
        <Grid container columnSpacing="20px">
          {listStatBox.map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <StatBox
                progress={item.progress}
                title={item.title}
                subTitle={item.subTitle}
                icon={item.icon}
                increase={item.increase}
              />
            </Grid>
          ))}
        </Grid>
        {/* ROW 2 */}
        <Grid container>
          {/* LEFT */}
          <Grid item md={12} lg={8}>
            <Box
              backgroundColor="#eeeee4"
              borderRadius="8px"
              height="360px"
              p="20px"
              m="10px"
            >
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h5">Revenue Generated</Typography>
                  <Typography variant="h4" fontWeight={600}>
                    $59,342.32
                  </Typography>
                </Box>
                <IconButton>
                  <FileDownloadIcon sx={{ fontSize: "34px", color: "black" }} />
                </IconButton>
              </Box>
              <Box height="250px" ml="-20px">
                <LineChart data={lineData} isDashboard={true} />
              </Box>
            </Box>
          </Grid>
          {/* RIGHT */}
          <Grid item md={12} lg={4}>
            <Box
              m="10px 10px 10px 10px"
              overflow="auto"
              height="400px"
              borderRadius={2}
            >
              <Box backgroundColor="#eeeee4" p="20px">
                <Typography variant="h5" fontWeight={600}>
                  Recent transaction
                </Typography>
              </Box>

              {transactions.map((transaction, index) => (
                <Box
                  key={index}
                  display="grid"
                  gridTemplateColumns="2.5fr 1.5fr 1fr"
                  alignItems="center"
                  backgroundColor="#eeeee4"
                  m="5px 0"
                  p="15px"
                >
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h7">ID: {transaction.txId}</Typography>
                    <Typography variant="h7" color="#063970" fontWeight={600}>
                      Name: {transaction.user}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h7">{transaction.date}</Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#063970" }}
                    >
                      <Typography variant="h7" fontWeight={600}>
                        {transaction.cost}
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* ROW 3 */}
        <Grid container columnSpacing="20px" p="10px">
          <Grid item lg={4} md={12}>
            <Box
              p="10px"
              backgroundColor="#eeeee4"
              borderRadius={2}
              height="420px"
            >
              <Typography ml="10px" variant="h5" fontWeight={600}>
                Sales quantity
              </Typography>
              <Box height="360px">
                <BarChart data={barData} isDashboard={true} />
              </Box>
              <Typography variant="h6" textAlign="center">
                $48,352 revenue generated
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={12}>
            <Box
              p="10px"
              backgroundColor="#eeeee4"
              borderRadius={2}
              height="420px"
            >
              <Typography ml="10px" variant="h5" fontWeight={600}>
                Campaign
              </Typography>
              <Box height="360px">
                <PieChart data={pieData} isDashboard={true} />
              </Box>
              <Typography variant="h6" textAlign="center">
                $56,000 revenue generated
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={12}>
            <Box
              p="10px"
              backgroundColor="#eeeee4"
              borderRadius={2}
              height="420px"
            >
              <Typography ml="10px" variant="h5" fontWeight={600}>
                Sales quantity
              </Typography>
              <Box height="360px">
                <BarChart data={barData} isDashboard={true} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* FOOTER */}
      <Box
        m="40px 10px 0 10px"
        p="20px"
        borderTop="1px solid #063970"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" fontWeight={600}>
          Copyright © {new Date().getFullYear()} Nguyen Van Ky
        </Typography>
        <Box>
          <Button
            sx={{ color: "black" }}
            href="https://github.com/dsitweed"
            target="_blank"
          >
            <GitHubIcon sx={{ fontSize: "30px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
