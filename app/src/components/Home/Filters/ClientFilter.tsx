import { Autocomplete, TextField } from "@mui/material";
import { useClients } from "../../providers/ClientListProvider";

export default function ClientFilter({
  value,
  onChange,
}: {
  value: string[];
  onChange: (age: string[]) => void;
}) {
  const clients = useClients();

  function findOperationTypes(values: string[]) {
    return clients.filter((option) => values.includes(option.clientId));
  }

  return (
    <Autocomplete
      multiple
      options={clients}
      getOptionLabel={(option) => option.clientId}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue.map((v) => v.clientId))}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Clients" />}
    />
  );
}
