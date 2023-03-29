import { Box, Typography } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ProgressCircle from "./ProgressCircle";
import { isNumber } from "@mui/x-data-grid/internals";

const StatBox = ({
  title = "12,361",
  subTitle = "Emails sent",
  icon = <AccessAlarmIcon />,
  progress = 0.3,
  increase = 10,
}) => {
  // if number add dot
  if (isNumber(title)) title = title.toLocaleString();

  return (
    <Box
      m="10px"
      p="20px"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      backgroundColor="#eeeee4"
      borderRadius="8px"
      height='100px'
    >
      <Box>
        <Box>{icon}</Box>
        <Box>
          <Typography fontWeight={600} variant="h5">
            {title}
          </Typography>
          <Typography variant="h7">{subTitle}</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <ProgressCircle progress={progress} />
        <Typography textAlign="center" fontWeight={600} variant="h6">
          {/* {(0 < progress && progress < 1) ? progress * 100 : progress}% */}
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
