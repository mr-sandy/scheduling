import { Autocomplete, TextField } from "@mui/material";
import { useClients } from "../../providers/ClientListProvider";

export default function ClientSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (age: string) => void;
}) {
  const clients = useClients();

  function findOperationTypes(value: string) {
    return clients.find((option) => value === option.clientId);
  }
  return (
    <Autocomplete
      id="client-selector"
      options={clients}
      getOptionLabel={(option) => option.clientId}
      value={findOperationTypes(value)}
      onChange={(event, newValue) => onChange(newValue?.clientId || "")}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Client" />}
    />
  );
}
