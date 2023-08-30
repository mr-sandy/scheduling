import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useBoms } from "./BomListProvider";

export function BomList() {
  const boms = useBoms();

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Box flex={1} p={2}>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>JIRA</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last Modified</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boms.map((bom) => (
                <TableRow
                  key={bom.id}
                  hover
                  onClick={(event) => console.log(event)}
                >
                  <TableCell>
                    <Button
                      href={`https://efundamentals.atlassian.net/browse/${bom.id}`}
                      target="blank"
                    >
                      {bom.id}
                    </Button>
                  </TableCell>
                  <TableCell>{bom.name}</TableCell>
                  <TableCell>Column 3</TableCell>
                  <TableCell>Column 3</TableCell>
                  <TableCell>Column 3</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
}
