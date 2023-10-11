import {
  DialogContentText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Operation } from "../../../../../../common/types";
import { OperationTypeChip } from "../../../common/OperationTypeChip";
import { ScheduleChip } from "../../../common/ScheduleChip";

function createHash(operation: Operation): string {
  return (
    operation.client +
    operation.retailer +
    operation.operationType +
    operation.schedule +
    operation.searchTerm +
    operation.category +
    operation.productId
  );
}

export function ConfirmStage({ operations }: { operations: Operation[] }) {
  return (
    <Stack spacing={3} paddingTop={3}>
      <DialogContentText>
        You are about to create {operations.length} new operations. Click `Save`
        to proceed.
      </DialogContentText>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Retailer</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Parameters</TableCell>
              <TableCell>Schedule</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {operations.map((operation) => (
              <TableRow
                key={createHash(operation)}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {operation.client}
                </TableCell>
                <TableCell>{operation.retailer}</TableCell>
                <TableCell>
                  <OperationTypeChip operationType={operation.operationType} />
                </TableCell>
                <TableCell>
                  {operation.searchTerm ||
                    operation.category ||
                    operation.productId}
                </TableCell>
                <TableCell>
                  <ScheduleChip schedule={operation.schedule} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
