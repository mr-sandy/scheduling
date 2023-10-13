import {
  Autocomplete,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

function getKey(value: boolean): string {
  return value ? "true" : "false";
}

function getValue(key: string): boolean {
  return key === "true";
}

export default function MultistoreSelector({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <ToggleButtonGroup
      value={getKey(value)}
      exclusive
      onChange={(e, key) => onChange(getValue(key))}
      size="small"
      fullWidth={true}
    >
      <ToggleButton key={"false"} value={"false"}>
        Single Store
      </ToggleButton>
      <ToggleButton key={"true"} value={"true"}>
        Multistore
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
