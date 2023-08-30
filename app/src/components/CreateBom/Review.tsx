import { Typography, TextField, Box, Stack } from "@mui/material";

export function Review() {
  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Review
      </Typography>
      <Stack gap={3}>
        <TextField fullWidth id="outlined-required" label="Client" />
      </Stack>
    </Box>
  );
}
