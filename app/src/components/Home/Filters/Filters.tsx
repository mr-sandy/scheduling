import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import OperationTypeFilter from "./OperationTypeFilter";
import RetailerFilter from "./RetailerFilter";
import { useSearchParams } from "react-router-dom";

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [operationTypes, setOperationTypes] = React.useState(
    searchParams.getAll("operationType") || ([] as string[])
  );

  const [retailers, setRetailers] = React.useState(
    searchParams.getAll("retailer") || ([] as string[])
  );

  function handleFilterClick() {
    setSearchParams({
      operationType: operationTypes,
      retailer: retailers,
    });
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
          value={operationTypes}
          onChange={(value) => setOperationTypes(value)}
        />{" "}
        <RetailerFilter
          value={retailers}
          onChange={(value) => setRetailers(value)}
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
