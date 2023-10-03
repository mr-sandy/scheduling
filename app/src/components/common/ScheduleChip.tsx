import * as React from "react";
import { Chip } from "@mui/material";

export function ScheduleChip({ schedule }: { schedule: string }) {
  return <Chip label={schedule} size="small" />;
}
