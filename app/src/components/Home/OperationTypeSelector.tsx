import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function OperationTypeSelector({
  operationType,
  onChange,
}: {
  operationType: string;
  onChange: (age: string) => void;
}) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Operation Type</InputLabel>
      <Select
        value={operationType}
        label="Operation Type"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value={"category"}>Category</MenuItem>
        <MenuItem value={"search"}>Search</MenuItem>
        <MenuItem value={"detail"}>Detail</MenuItem>
      </Select>
    </FormControl>
  );
}
