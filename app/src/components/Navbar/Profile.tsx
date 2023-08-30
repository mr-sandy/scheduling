import { Avatar, Badge, Box, Menu, MenuItem, styled } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

export function Profile() {
  const [open, setOpen] = useState(false);
  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }));

  return (
    <Icons>
      {/* <Badge badgeContent={4} color="error">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Notifications />
      </Badge> */}
      <Avatar
        alt="Sandy Cormie"
        src="https://avatars.githubusercontent.com/u/2436780"
        sx={{ width: 30, height: 30 }}
        onClick={(e) => setOpen(true)}
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Icons>
  );
}
