import { Typography, TextField, Box, Stack } from "@mui/material";
import { RetailerTable } from "./RetailerTable";

export function Apps() {
  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Apps
      </Typography>
      <Stack gap={3}>
        <RetailerTable />
      </Stack>
    </Box>
  );
}
