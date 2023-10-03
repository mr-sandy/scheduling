import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import OperationTypeFilter from "./OperationTypeFilter";
import RetailerFilter from "./RetailerFilter";
import { useSearchParams } from "react-router-dom";
import ClientFilter from "./ClientFilter";

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [operationTypes, setOperationTypes] = React.useState(
    searchParams.getAll("operationType") || ([] as string[])
  );

  const [retailers, setRetailers] = React.useState(
    searchParams.getAll("retailer") || ([] as string[])
  );

  const [clients, setClients] = React.useState(
    searchParams.getAll("client") || ([] as string[])
  );

  function handleFilterClick() {
    setSearchParams({
      operationType: operationTypes,
      retailer: retailers,
      client: clients,
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
        <ClientFilter value={clients} onChange={(value) => setClients(value)} />
        <RetailerFilter
          value={retailers}
          onChange={(value) => setRetailers(value)}
        />
        <OperationTypeFilter
          value={operationTypes}
          onChange={(value) => setOperationTypes(value)}
        />{" "}
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          onClick={() => handleFilterClick()}
        >
          Apply
        </Button>
      </Stack>
    </Box>
  );
}
