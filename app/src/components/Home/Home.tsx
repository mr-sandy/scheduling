import * as React from "react";
import { Box, Paper, styled } from "@mui/material";
import { OperationsTable } from "./OperationsTable";
import { OperationsFilter } from "./OperationsFilter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Home() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 4">
        <OperationsFilter />
      </Box>
      <Box gridColumn="span 8">
        <OperationsTable />
      </Box>
    </Box>
  );
}
