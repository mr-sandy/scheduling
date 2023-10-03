import * as React from "react";
import { Chip } from "@mui/material";
import { operationTypes } from "./operationTypes";

export function OperationTypeChip({
  operationType,
}: {
  operationType: string;
}) {
  return (
    <Chip
      label={operationTypes.find((o) => o.value === operationType)?.label}
      size="small"
      variant="outlined"
    />
  );
}
