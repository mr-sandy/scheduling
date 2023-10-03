import { DialogContentText, Stack, Typography } from "@mui/material";
import ClientSelector from "../ClientSelector";
import RetailerSelector from "../RetailerSelector";
import OperationTypeSelector from "../OperationTypeSelector";

export function StartStage({
  client,
  setClient,
  retailer,
  setRetailer,
  operationType,
  setOperationType,
}: {
  client: string;
  setClient: (value: string) => void;
  retailer: string;
  setRetailer: (value: string) => void;
  operationType: string;
  setOperationType: (value: string) => void;
}): JSX.Element {
  return (
    <Stack spacing={3} paddingTop={1}>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <ClientSelector value={client} onChange={(value) => setClient(value)} />
      <RetailerSelector
        value={retailer}
        onChange={(value) => setRetailer(value)}
      />
      <OperationTypeSelector
        value={operationType}
        onChange={(value) => setOperationType(value)}
      />
    </Stack>
  );
}
