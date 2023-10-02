import * as React from "react";
import { MyAppBar } from "./MyAppBar";
import { DrawerHeader, MyDrawer } from "./MyDrawer";
import { ThemeProvider, Box, CssBaseline, Typography } from "@mui/material";
import { myTheme } from "./myTheme";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MyAppBar open={open} handleDrawerOpen={() => setOpen(true)} />
        <MyDrawer open={open} handleDrawerClose={() => setOpen(false)} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
