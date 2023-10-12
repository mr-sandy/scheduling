import {
  Checkbox,
  DialogContentText,
  IconButton,
  Link,
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
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Clear } from "@mui/icons-material";
import { allCategories } from "./categories";

export function SetCategoriesStage({
  categories,
  setCategories,
}: {
  categories: string[];
  setCategories: (value: string[]) => void;
}) {
  const [filter, setFilter] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [showSelected, setShowSelected] = useState(false);

  const filteredCategories = showSelected
    ? categories
    : allCategories.filter(
        (c) => c.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );

  const visibleCategories = filteredCategories.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const headerIsChecked = categories.length > 0;

  function handleHeaderCheckboxClick() {
    if (categories.length > 0) {
      setCategories([]);
      setShowSelected(false);
      setPage(0);
    } else {
      setCategories(visibleCategories);
    }
  }

  function handleFilterClearClick() {
    setFilter("");
  }

  function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
    setShowSelected(false);
    setPage(0);
  }

  function handleRowClick(isSelected: boolean, category: string) {
    if (isSelected) {
      const i = categories.indexOf(category);
      const newCategories = [
        ...categories.slice(0, i),
        ...categories.slice(i + 1),
      ];
      setCategories(newCategories);
      if (newCategories.length === 0) {
        setShowSelected(false);
      }
    } else {
      setCategories([...categories, category]);
    }
  }

  function handleShowSelectedClick() {
    setShowSelected(!showSelected);
    setFilter("");
    setPage(0);
  }

  function handleRowsPerPageChange(event: ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  }

  function handlePageChange(e: unknown, newPage: number) {
    setPage(newPage);
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
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={headerIsChecked}
                  onClick={handleHeaderCheckboxClick}
                />
              </TableCell>
              <TableCell>
                Category{" "}
                {categories.length > 0 && (
                  <Link
                    component="button"
                    variant="body2"
                    onClick={handleShowSelectedClick}
                  >
                    ({categories.length} selected)
                  </Link>
                )}
              </TableCell>
              <TableCell align="right">
                <TextField
                  label="Filter"
                  size="small"
                  variant="outlined"
                  value={filter}
                  onChange={handleFilterChange}
                  InputProps={{
                    endAdornment: (
                      <IconButton size="small" onClick={handleFilterClearClick}>
                        <Clear fontSize="small" />
                      </IconButton>
                    ),
                  }}
                ></TextField>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleCategories.map((category, index) => {
              const isSelected = categories.includes(category);
              return (
                <TableRow key={index}
                  hover
                  onClick={() => handleRowClick(isSelected, category)}
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
        rowsPerPageOptions={[5, 7, 10, 20]}
        component="div"
        count={filteredCategories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Stack>
  );
}
