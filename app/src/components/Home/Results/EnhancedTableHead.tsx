import * as React from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import { Operation } from "../../../../../common/types";
import { Order } from "./Results";

interface HeadCell {
  id: keyof Operation | "parameters";
  label: string;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "id",
    label: "ID",
  },
  {
    id: "client",
    label: "Client",
  },
  {
    id: "retailer",
    label: "Retailer",
  },
  {
    id: "operationType",
    label: "Operation Type",
  },
  {
    id: "parameters",
    label: "Parameters",
  },
  {
    id: "schedule",
    label: "Schedule",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Operation
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Operation) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={index === 0 ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={
                headCell.id !== "parameters"
                  ? createSortHandler(headCell.id)
                  : () => {}
              }
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
