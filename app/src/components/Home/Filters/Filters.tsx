import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import OperationTypeFilter from "./OperationTypeFilter";
import RetailerFilter from "./RetailerFilter";
import ClientFilter from "./ClientFilter";
import { MultistoreFilter } from "./MultistoreFilter";

export function Filters({
  selectedOperationTypes,
  selectedRetailers,
  selectedClients,
  selectedMultistore,
  onFilter,
}: {
  selectedOperationTypes: string[];
  selectedRetailers: string[];
  selectedClients: string[];
  selectedMultistore: boolean | null;
  onFilter: (
    clients: string[],
    retailers: string[],
    operationTypes: string[],
    multistore: boolean | null
  ) => void;
}) {
  const [operationTypes, setOperationTypes] = React.useState<string[]>(selectedOperationTypes);
  const [retailers, setRetailers] = React.useState<string[]>(selectedRetailers);
  const [clients, setClients] = React.useState<string[]>(selectedClients);
  const [multistore, setMultistore] = React.useState<boolean | null>(selectedMultistore);

  return (
    <Box>
      <Typography sx={{ paddingTop: 2, paddingBottom: 3 }} variant="h6" component="div">
        Filters
      </Typography>
      <Stack spacing={3}>
        <ClientFilter value={clients} onChange={(value) => setClients(value)} />
        <RetailerFilter value={retailers} onChange={(value) => setRetailers(value)} />
        <OperationTypeFilter
          value={operationTypes}
          onChange={(value) => setOperationTypes(value)}
        />
        <MultistoreFilter value={multistore} onChange={(value) => setMultistore(value)} />
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          onClick={() => onFilter(clients, retailers, operationTypes, multistore)}
        >
          Apply
        </Button>
      </Stack>
    </Box>
  );
}
