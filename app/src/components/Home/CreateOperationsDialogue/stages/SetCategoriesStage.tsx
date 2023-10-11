import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  DialogContentText,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
import { Clear, Padding } from "@mui/icons-material";
import { allCategories } from "./categories";

export function SetCategoriesStage({
  categories,
  setCategories,
}: {
  categories: string[];
  setCategories: (value: string[]) => void;
}) {
  const [filter, setFilter] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [page, setPage] = useState(0);

  const filteredCategories = allCategories.filter(
    (c) => c.toLowerCase().indexOf(filter.toLowerCase()) > -1
  );

  function addCategory(category: string): void {
    setCategories([...categories, category]);
  }

  function removeCategory(category: string): void {
    const i = categories.indexOf(category);
    const newCategories = [
      ...categories.slice(0, i),
      ...categories.slice(i + 1),
    ];
    setCategories(newCategories);
  }

  return (
    <Stack spacing={3} paddingTop={3}>
      <DialogContentText>
        Enter one or more categories for the new operations.
      </DialogContentText>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell>
                Category {categories.length > 0 && <>({categories.length} selected)</>}
              </TableCell>
              <TableCell align="right">
                <TextField
                  label="Filter"
                  size="small"
                  variant="outlined"
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                    setPage(0);
                  }}
                  InputProps={{
                    endAdornment: (
                      <IconButton size="small" onClick={() => setFilter("")}>
                        <Clear fontSize="small" />
                      </IconButton>
                    ),
                  }}
                ></TextField>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCategories
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((category) => {
                const isSelected = categories.includes(category);
                return (
                  <TableRow
                    hover
                    onClick={() =>
                      isSelected
                        ? removeCategory(category)
                        : addCategory(category)
                    }
                  >
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" checked={isSelected} />
                    </TableCell>
                    <TableCell colSpan={2}>{category}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[7, 10, 20]}
        component="div"
        count={filteredCategories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event: unknown, newPage: number) => setPage(newPage)}
        onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value))}
      />
    </Stack>
  );
}
