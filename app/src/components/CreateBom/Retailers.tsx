import { Typography, TextField, Box, Stack } from "@mui/material";
import { useRetailers } from "../RetailerListProvider";
import RetailerSelector from "./RetailerTable/RetailerSelector";

export function Retailers() {
  const retailers = useRetailers();

  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Retailers
      </Typography>
      <Stack gap={3}>
        <RetailerSelector />
      </Stack>
    </Box>
  );
}
