import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import OperationTypeFilter from "./OperationTypeFilter";
import RetailerFilter from "./RetailerFilter";
import { useSearchParams } from "react-router-dom";
import ClientFilter from "./ClientFilter";
import { MultistoreFilter } from "./MultistoreFilter";

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [operationTypes, setOperationTypes] = React.useState<string[]>(
    searchParams.getAll("operationType") || ([] as string[])
  );

  const [retailers, setRetailers] = React.useState<string[]>(
    searchParams.getAll("retailer") || ([] as string[])
  );

  const [clients, setClients] = React.useState<string[]>(
    searchParams.getAll("client") || ([] as string[])
  );

  const [multistore, setMultistore] = React.useState<boolean | null>(null);

  function handleFilterClick() {
    if (multistore === null) {
      setSearchParams({
        operationType: operationTypes,
        retailer: retailers,
        client: clients,
      });
    } else {
      setSearchParams({
        operationType: operationTypes,
        retailer: retailers,
        client: clients,
        multistore: multistore.toString(),
      });
    }
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
        />
        <MultistoreFilter
          value={multistore}
          onChange={(value) => setMultistore(value)}
        />
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
