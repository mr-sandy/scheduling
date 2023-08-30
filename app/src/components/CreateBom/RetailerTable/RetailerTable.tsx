import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RetailerSelector from "./RetailerSelector";
import { useBom } from "../../BomProvider";
import { Button, Checkbox, IconButton } from "@mui/material";
import { useState } from "react";
import { CheckCircleRounded, CancelRounded } from "@mui/icons-material";

export function RetailerTable() {
  const bom = useBom();
  const [showAddDialogue, setShowAddDialogue] = useState(false);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Retailer</TableCell>
              <TableCell align="center">Single Store</TableCell>
              <TableCell align="center">Multistore</TableCell>
              <TableCell align="center">Banners</TableCell>
              <TableCell align="center" width="100px"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bom?.retailers?.map((retailerOptions) => (
              <TableRow
                key={retailerOptions.retailerId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{retailerOptions.retailerId}</TableCell>
                <TableCell align="center" padding="checkbox">
                  <Checkbox checked={retailerOptions.singleStore} disabled />
                </TableCell>
                <TableCell align="center" padding="checkbox">
                  <Checkbox checked={retailerOptions.multiStore} disabled />
                </TableCell>
                <TableCell align="center" padding="checkbox">
                  <Checkbox checked={retailerOptions.banners} disabled />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
            {!showAddDialogue && (
              <TableRow>
                <TableCell align="center" padding="none" colSpan={5}>
                  <Button
                    variant="text"
                    fullWidth
                    sx={{ padding: "16px" }}
                    onClick={() => setShowAddDialogue(true)}
                  >
                    Add Retailer
                  </Button>
                </TableCell>
              </TableRow>
            )}
            {showAddDialogue && (
              <>
                <TableRow>
                  <TableCell padding="normal">
                    <RetailerSelector />
                  </TableCell>
                  <TableCell align="center" padding="checkbox">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell align="center" padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell align="center" padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell
                    align="left"
                    padding="none"
                    sx={{ marginBottom: "-1px" }}
                  >
                    <IconButton
                      aria-label="save"
                      onClick={() => setShowAddDialogue(false)}
                    >
                      <CheckCircleRounded color="success" fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      aria-label="cancel"
                      onClick={() => setShowAddDialogue(false)}
                    >
                      <CancelRounded color="error" fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
///                  <RetailerSelector />
{
  /* <FormControlLabel
control={<Checkbox defaultChecked />}
label="Single Store"
/>
<FormControlLabel control={<Checkbox />} label="Multistore" />
<FormControlLabel control={<Checkbox />} label="Banners" />
<Box mt={2}>
<Button variant="outlined">Add</Button>
</Box> */
}
