import { Autocomplete, TextField } from "@mui/material";

export const operationTypes: { label: string; value: string }[] = [
  { label: "Category", value: "category" },
  { label: "Search", value: "search" },
  { label: "Detail", value: "detail" },
  { label: "Review", value: "review" },
];

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
