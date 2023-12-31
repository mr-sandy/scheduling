import * as React from "react";
import { Chip } from "@mui/material";

export function MultistoreChip({
  multistore,
}: {
  multistore: boolean | null | undefined;
}) {
  return multistore ? (
    <Chip
      label="multistore"
      sx={{ bgcolor: "#888", color: "white" }}
      size="small"
    />
  ) : (
    <></>
  );
}
