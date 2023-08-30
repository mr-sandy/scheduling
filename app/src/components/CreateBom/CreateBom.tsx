import { Box, Paper, Stack } from "@mui/material";
import { Steps } from "./Steps";
import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { StepsProvider } from "./StepsProvider";
import { Preview } from "./Preview";

export function CreateBom() {
  return (
    <StepsProvider>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box flex={2} p={2}>
          <Steps />
        </Box>
        <Box flex={7} p={2}>
          <Box component={Paper} p={2} elevation={4} maxWidth="700px">
            <Outlet />
            <Navigation />
          </Box>
        </Box>
        <Box flex={3} p={2}>
          <Preview />
        </Box>
      </Stack>
    </StepsProvider>
  );
}
