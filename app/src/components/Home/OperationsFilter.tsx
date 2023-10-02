import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import OperationTypeSelector from "./OperationTypeSelector";

export function OperationsFilter() {
  const [operationType, setOperationType] = React.useState("");

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
      <Stack spacing={2}>
        <OperationTypeSelector
          operationType={operationType}
          onChange={(value) => setOperationType(value)}
        />
        <OperationTypeSelector
          operationType={operationType}
          onChange={(value) => setOperationType(value)}
        />
        <OperationTypeSelector
          operationType={operationType}
          onChange={(value) => setOperationType(value)}
        />
      </Stack>
    </Box>
  );
}
