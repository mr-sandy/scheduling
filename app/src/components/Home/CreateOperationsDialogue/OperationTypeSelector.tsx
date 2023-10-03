import { Autocomplete, TextField } from "@mui/material";
import { operationTypes } from "../Filters/OperationTypeFilter";

function findOperationTypes(value: string) {
  return operationTypes.find((option) => value === option.value);
}

export default function OperationTypeSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (age: string) => void;
}) {
  return (
    <Autocomplete
      id="operation-type-selector"
      options={operationTypes}
      getOptionLabel={(option) => option.label}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue?.value || "")}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Operation Type" />}
    />
  );
}
