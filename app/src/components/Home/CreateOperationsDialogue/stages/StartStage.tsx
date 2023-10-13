import { DialogContentText, Grid, Stack, Typography } from "@mui/material";
import ClientSelector from "../ClientSelector";
import RetailerSelector from "../RetailerSelector";
import OperationTypeSelector from "../OperationTypeSelector";
import ScheduleSelector from "../ScheduleSelector";
import MultistoreSelector from "../MultistoreSelector";

export function StartStage({
  client,
  setClient,
  retailer,
  setRetailer,
  operationType,
  setOperationType,
  schedule,
  setSchedule,
  multistore,
  setMultistore,
}: {
  client: string;
  setClient: (value: string) => void;
  retailer: string;
  setRetailer: (value: string) => void;
  operationType: string;
  setOperationType: (value: string) => void;
  schedule: string;
  setSchedule: (value: string) => void;
  multistore: boolean;
  setMultistore: (value: boolean) => void;
}): JSX.Element {
  return (
    <>
      <Grid container spacing={3} paddingTop={3}>
        <Grid item xs={12}>
          <DialogContentText>
            Specify the client, retailer, operation type and schedule for the
            new operations.
          </DialogContentText>
        </Grid>
        <Grid item xs={6}>
          <ClientSelector
            value={client}
            onChange={(value) => setClient(value)}
          />
        </Grid>
        <Grid item xs={6}>
          <RetailerSelector
            value={retailer}
            onChange={(value) => setRetailer(value)}
          />
        </Grid>
        <Grid item xs={6}>
          <OperationTypeSelector
            value={operationType}
            onChange={(value) => setOperationType(value)}
          />
        </Grid>
        <Grid item xs={6}>
          <ScheduleSelector
            value={schedule}
            onChange={(value) => setSchedule(value)}
          />
        </Grid>
        <Grid item xs={6}>
          <MultistoreSelector
            value={multistore}
            onChange={(value) => setMultistore(value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
