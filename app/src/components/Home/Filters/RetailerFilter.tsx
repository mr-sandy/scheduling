import { Autocomplete, TextField } from "@mui/material";

const retailers: { label: string; value: string }[] = [
  { label: "Tesco", value: "Tesco" },
  { label: "Sainsburys", value: "Sainsburys" },
  { label: "Asda", value: "Asda" },
  { label: "Morrisons", value: "Morrisons" },
  { label: "Waitrose", value: "Waitrose" },
  { label: "Ocado", value: "Ocado" },
];

function findOperationTypes(values: string[]) {
  return retailers.filter((option) => values.includes(option.value));
}

export default function RetailerFilter({
  value,
  onChange,
}: {
  value: string[];
  onChange: (age: string[]) => void;
}) {
  return (
    <Autocomplete
      multiple
      options={retailers}
      getOptionLabel={(option) => option.label}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue.map((v) => v.value))}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} label="Retailers" />
      )}
    />
  );
}
