import { Box, TextField, Typography } from "@mui/material";
import { useBom } from "../BomProvider";

export function Preview() {
  const bom = useBom();
  return (
    <Box>
      <Typography>Preview</Typography>
      <TextField variant="standard" fullWidth multiline value={JSON.stringify(bom, null, "  ")} />
    </Box>
  );
}
