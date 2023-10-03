import { Autocomplete, TextField } from "@mui/material";

const schedules: { label: string; value: string }[] = [
  { label: "Daily", value: "daily" },
  { label: "6x per day", value: "6xperday" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

function findOperationTypes(value: string) {
  return schedules.find((schedules) => value === schedules.value);
}

export default function ScheduleSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (age: string) => void;
}) {
  return (
    <Autocomplete
      id="schedule-selector"
      options={schedules}
      getOptionLabel={(option) => option.label}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue?.value || "")}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Schedule" />}
    />
  );
}
