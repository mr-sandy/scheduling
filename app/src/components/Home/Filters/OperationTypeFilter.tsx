import { Autocomplete, TextField } from "@mui/material";
import { operationTypes } from "../../common/operationTypes";

function findOperationTypes(values: string[]) {
  return operationTypes.filter((option) => values.includes(option.value));
}

export default function OperationTypeFilter({
  value,
  onChange,
}: {
  value: string[];
  onChange: (age: string[]) => void;
}) {
  return (
    <Autocomplete
      multiple
      options={operationTypes}
      getOptionLabel={(option) => option.label}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue.map((v) => v.value))}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} label="Operation types" />
      )}
    />
  );
}
