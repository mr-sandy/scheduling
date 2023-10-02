import { Autocomplete, TextField } from "@mui/material";

const options = [
  { label: "Category", value: "category" },
  { label: "Search", value: "search" },
  { label: "Detail", value: "detail" },
  { label: "Review", value: "review" },
];

function findOptions(values: string[]) {
  return options.filter((option) => values.includes(option.value));
}

export default function OperationTypeFilter({
  operationTypes,
  onChange,
}: {
  operationTypes: string[];
  onChange: (age: string[]) => void;
}) {
  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.label}
      value={findOptions(operationTypes)}
      onChange={(event, newValue) => onChange(newValue.map((v) => v.value))}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} label="Operation types" />
      )}
    />
  );
}
