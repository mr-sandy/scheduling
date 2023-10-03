import { Autocomplete, TextField } from "@mui/material";
import { useRetailers } from "../../RetailerListProvider";
import { Retailer } from "../../../services/retailersService";

export default function RetailerSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (age: string) => void;
}) {
  const retailers: Retailer[] = useRetailers();

  function findOperationTypes(value: string) {
    return retailers.find((retailers) => value === retailers.retailerId);
  }

  return (
    <Autocomplete
      id="retailer-selector"
      options={retailers}
      getOptionLabel={(option) => option.retailerId}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue?.retailerId || "")}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Retailer" />}
    />
  );
}
