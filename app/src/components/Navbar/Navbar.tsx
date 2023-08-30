import { AppBar, Button, Toolbar, Typography, styled } from "@mui/material";
import { Profile } from "./Profile";
import { Controls } from "./Controls";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Button variant="text" component={Link} to="/boms">
          <Typography color="#fff" variant="h6">
            BOMs
          </Typography>
        </Button>
        <Controls />
        <Profile />
      </StyledToolbar>
    </AppBar>
  );
}
