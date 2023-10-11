import {
  DialogContentText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Operation } from "../../../../../../common/types";
import { OperationTypeChip } from "../../../common/OperationTypeChip";
import { ScheduleChip } from "../../../common/ScheduleChip";
import { useState } from "react";

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
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [page, setPage] = useState(0);

  const visibleOperations = operations.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

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
            {visibleOperations.map((operation) => (
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
      <TablePagination
        rowsPerPageOptions={[7, 10, 20]}
        component="div"
        count={operations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event: unknown, newPage: number) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value));
          setPage(0);
        }}
      />
    </Stack>
  );
}
