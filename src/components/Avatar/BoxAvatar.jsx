import React from "react";
import { Box } from "@mui/material";

const BoxAvatar = () => {
  return (
    <>
      <Box
        sx={{
          width: 200,
          height: 200,
          backgroundColor: "#B9090B",
          "&:hover": {
            backgroundColor: "#B90909",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      ></Box>
    </>
  );
};

export default BoxAvatar;
