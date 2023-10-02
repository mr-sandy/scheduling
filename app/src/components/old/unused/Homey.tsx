import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BomList from "./OldBomList";
import { BomListProvider } from "../../BomListProvider";
import { Home } from "@mui/icons-material";

function Homey() {
  return <h2>Home</h2>;
}
function Boms() {
  return <h2>Boms</h2>;
}
function App2() {
  return (
    <>
      <Router>
        <Box>
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/">
                  <ListItemIcon>
                    <AccountBalanceIcon />
                  </ListItemIcon>
                  <ListItemText primary="Homey" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/boms">
                  <ListItemIcon>
                    <StorefrontIcon />
                  </ListItemIcon>
                  <ListItemText primary="Boms" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          <BomListProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/boms" element={<BomList />} />
            </Routes>
          </BomListProvider>
        </Box>
      </Router>
    </>
  );
}
