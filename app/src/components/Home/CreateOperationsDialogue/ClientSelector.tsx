import { Autocomplete, TextField } from "@mui/material";

const clients: { label: string; value: string }[] = [
  { label: "Mars UK", value: "Mars UK" },
  { label: "Coke UK", value: "Coke UK" },
  { label: "Arla UK", value: "Arla UK" },
];

function findOperationTypes(value: string) {
  return clients.find((option) => value === option.value);
}

export default function ClientSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (age: string) => void;
}) {
  return (
    <Autocomplete
      options={clients}
      getOptionLabel={(option) => option.label}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue?.value || "")}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Clients" />}
    />
  );
}
