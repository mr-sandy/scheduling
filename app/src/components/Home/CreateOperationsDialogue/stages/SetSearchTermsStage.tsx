import {
  Autocomplete,
  Checkbox,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";

export function SetSearchTermsStage({
  searchTerms,
  setSearchTerms,
}: {
  searchTerms: string[];
  setSearchTerms: (value: string[]) => void;
}) {
  return (
    <Stack spacing={3} paddingTop={1}>
      <Autocomplete
        multiple
        id="tags-filled"
        freeSolo
        options={[]}
        value={searchTerms}
        onChange={(event, newValue) => {setSearchTerms(newValue)}}
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Search Terms"
            placeholder="Enter search terms"
          />
        )}
      />
    </Stack>
  );
}
