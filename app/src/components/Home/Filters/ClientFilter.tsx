import { Autocomplete, TextField } from "@mui/material";

const clients: { label: string; value: string }[] = [
  { label: "Mars UK", value: "Mars UK" },
  { label: "Coke UK", value: "Coke UK" },
  { label: "Arla UK", value: "Arla UK" },
];

function findOperationTypes(values: string[]) {
  return clients.filter((option) => values.includes(option.value));
}

export default function ClientFilter({
  value,
  onChange,
}: {
  value: string[];
  onChange: (age: string[]) => void;
}) {
  return (
    <Autocomplete
      multiple
      options={clients}
      getOptionLabel={(option) => option.label}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue.map((v) => v.value))}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Clients" />}
    />
  );
}
