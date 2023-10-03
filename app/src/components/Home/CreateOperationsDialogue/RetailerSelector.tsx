import { Autocomplete, TextField } from "@mui/material";

const retailers: { label: string; value: string }[] = [
  { label: "Tesco", value: "Tesco" },
  { label: "Sainsburys", value: "Sainsburys" },
  { label: "Asda", value: "Asda" },
  { label: "Morrisons", value: "Morrisons" },
  { label: "Waitrose", value: "Waitrose" },
  { label: "Ocado", value: "Ocado" },
];

function findOperationTypes(value: string) {
  return retailers.find((retailers) => value === retailers.value);
}

export default function RetailerSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (age: string) => void;
}) {
  return (
    <Autocomplete
      id="retailer-selector"
      
      options={retailers}
      getOptionLabel={(option) => option.label}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue?.value || "")}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Retailer" />}
    />
  );
}
