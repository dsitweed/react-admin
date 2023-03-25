import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({title, subTitle}) => {
    return(
        <Box>
            <Typography variant="h3" fontWeight="bold">
                {title.toUpperCase()}
            </Typography>
            <Typography variant="h5" color="#048ebe">
                {subTitle}
            </Typography>
        </Box>
    );
}

export default Header;