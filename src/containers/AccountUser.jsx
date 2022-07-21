import React from "react";
import { Typography } from "@mui/material";

import BoxAvatar from "../components/Avatar/BoxAvatar";

const AccountUser = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <BoxAvatar />
      <Typography variant="h6" sx={{ color: "#fff" }}>
        {props.children}
      </Typography>
    </div>
  );
};

export default AccountUser;
