import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import OperationTypeFilter from "./OperationTypeFilter";
import { useSearchParams } from "react-router-dom";

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [operationTypes, setOperationTypes] = React.useState(
    searchParams.getAll("operationType") || ([] as string[])
  );

  function handleFilterClick() {
    setSearchParams({ operationType: operationTypes });
  }

  return (
    <Box>
      <Typography
        sx={{ paddingTop: 2, paddingBottom: 3 }}
        variant="h6"
        component="div"
      >
        Filters
      </Typography>
      <Stack spacing={3}>
        <OperationTypeFilter
          operationTypes={operationTypes}
          onChange={(value) => setOperationTypes(value)}
        />
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          onClick={() => handleFilterClick()}
        >
          Apply filter
        </Button>
      </Stack>
    </Box>
  );
}
