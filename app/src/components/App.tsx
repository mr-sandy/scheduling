import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, Box, CssBaseline } from "@mui/material";
import { MyAppBar } from "./MyAppBar";
import { DrawerHeader, MyDrawer } from "./MyDrawer";
import { myTheme } from "./myTheme";
import { Home } from "./Home/Home";
import { RetailerListProvider } from "./RetailerListProvider";
import { ClientListProvider } from "./ClientListProvider";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={myTheme}>
      <RetailerListProvider>
        <ClientListProvider>
          <Router>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <MyAppBar open={open} handleDrawerOpen={() => setOpen(true)} />
              <MyDrawer open={open} handleDrawerClose={() => setOpen(false)} />
              <Box component="main" sx={{ flexGrow: 1 }}>
                <DrawerHeader />
                <Routes>
                  <Route index element={<Navigate to="/scheduling" />} />
                  <Route path="scheduling" element={<Home />} />
                </Routes>
              </Box>
            </Box>
          </Router>
        </ClientListProvider>
      </RetailerListProvider>
    </ThemeProvider>
  );
}
