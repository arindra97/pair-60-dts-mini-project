import React from "react";
import { Typography } from "@mui/material";

import BoxAvatar from "../components/Avatar/BoxAvatar";

const AccountUser = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <BoxAvatar />
      <Typography variant="h6" sx={{ color: "#fff" }}>
        Account User
      </Typography>
    </div>
  );
};

export default AccountUser;
