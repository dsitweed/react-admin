import { Box } from "@mui/material";
import React from "react";

const ProgressCircle = ({ progress = 0.75, size = "60" }) => {
  let angle = ((0 < progress) && (progress < 1)) ? progress * 360 : progress * 3.6;
  return (
    <Box
      sx={{
        background: `radial-gradient(white 55%, transparent 56%),
                      conic-gradient(#063970 ${angle}deg, #c6d6e7 0deg)`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
/**
 * Note cho việc tạo progess
 * 1. radial-gradient dùng để tạo dải màu từ 1 điểm theo vòng tròn hoặc elip -> dùng để tạo màu ở lõi
 * 2. conic-gradient dùng để tạo màu chuyển tiếp -> dùng để tạo % của vòng tròn
 * 3. radial-gradient(white 55%, transparent 56%) -> số sau lớn hơn 1 đơn vị để tạo độ mượt
 */