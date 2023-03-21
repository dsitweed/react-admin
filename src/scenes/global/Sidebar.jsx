import React, { useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import profileImage from "../../assets/profile1.png";
import { Link, useNavigate } from "react-router-dom";

import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapIcon from "@mui/icons-material/Map";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const navigate = useNavigate();
  function handleClick() {
    setSelected(title);
    navigate(to); 
  }

  return (
    <MenuItem
      active={selected === title}
      icon={icon}
      onClick={() => handleClick()}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SectionTitle = ({ children }) => {
  return (
    <Typography color="gray" fontWeight="bold" sx={{ marginTop: "10px" }}>
      {children}
    </Typography>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      padding="5px 35px 5px 20px"
      sx={{
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menu-button.ps-active": {
          backgroundColor: "#6870fa !important",
          color: "#FFFF !important",
        },
      }}
    >
      <ProSidebar defaultCollapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed && <MenuIcon />}
            style={{
              margin: "10px 0 10px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
                  ADMIN
                </Typography>
                <IconButton>
                  <MenuIcon sx={{ fontSize: "26px" }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box
              display="flex"
              flexDirection="column"
              height="auto"
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={profileImage}
                alt="image"
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Box textAlign="center">
                <Typography variant="h4" sx={{ margin: "10px 4px 0 0" }}>
                  Nguyễn Văn Kỳ
                </Typography>
                <Typography variant="h5" color="#094357" fontWeight="600">
                  Admin chính
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Data section */}
            <SectionTitle>Data</SectionTitle>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts information"
              to="/contacts"
              icon={<ContactsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Pages section */}
            <SectionTitle>Pages</SectionTitle>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonPinIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarMonthIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Charts section */}
            <SectionTitle>Charts</SectionTitle>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie chart"
              to="/pie"
              icon={<PieChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
