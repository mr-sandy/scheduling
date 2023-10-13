import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface Option {
  value: boolean | null;
  key: "all" | "multistore" | "singlestore";
  label: string;
}

const options: Option[] = [
  {
    value: null,
    key: "all",
    label: "All",
  },
  {
    value: true,
    key: "multistore",
    label: "Multi",
  },
  {
    value: false,
    key: "singlestore",
    label: "Single",
  },
];

function getKey(value: boolean | null): string {
  const option = options.find((o) => o.value === value);
  if (!option) throw new Error("Invalid value");
  return option.key;
}

function getValue(key: "all" | "multistore" | "singlestore"): boolean | null {
  const option = options.find((o) => o.key === key);
  if (!option) throw new Error("Invalid key");
  return option?.value;
}

export function MultistoreFilter({
  value,
  onChange,
}: {
  value: boolean | null;
  onChange: (value: boolean | null) => void;
}) {
  return (
    <ToggleButtonGroup
      value={getKey(value)}
      exclusive
      onChange={(e, key) => onChange(getValue(key))}
      size="small"
      fullWidth={true}
    >
      {options.map((option) => (
        <ToggleButton key={option.key} value={option.key}>
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
