import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

import profile from "../../assets/profile1.png";

const Topbar = () => {
  return (
    <Box display={"flex"} justifyContent="space-between" p={2}>
      <Box display={"flex"} backgroundColor="#dee3e3" borderRadius="3px">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
        />
        <IconButton type="button">
          <SearchIcon sx={{ color: "black" }} />
        </IconButton>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton type="button">
          <NotificationsIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton type="button">
          <SettingsIcon sx={{ color: "black" }} />
        </IconButton>
        <Box display={"flex"} alignItems="center">
          <img
            src={profile}
            alt="profile"
            width={40}
            height={40}
            style={{ borderRadius: "50%", marginRight: "6px" }}
          />
          <span>Nguyễn Văn Kỳ</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
