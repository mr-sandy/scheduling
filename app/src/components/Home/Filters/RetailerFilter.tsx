import { Autocomplete, TextField } from "@mui/material";
import { useRetailers } from "../../providers/RetailerListProvider";
import { Retailer } from "../../../services/retailersService";

export default function RetailerFilter({
  value,
  onChange,
}: {
  value: string[];
  onChange: (age: string[]) => void;
}) {
  const retailers: Retailer[] = useRetailers();
  function findOperationTypes(values: string[]) {
    return retailers.filter((option) => values.includes(option.retailerId));
  }

  return (
    <Autocomplete
      multiple
      options={retailers}
      getOptionLabel={(option) => option.retailerId}
      value={findOperationTypes(value)}
      onChange={(event, newValue) =>
        onChange(newValue.map((v) => v.retailerId))
      }
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Retailers" />}
    />
  );
}
