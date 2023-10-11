import {
  Autocomplete,
  Chip,
  DialogContentText,
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
    <Stack spacing={3} paddingTop={3}>
      <DialogContentText>
        Enter one or more search terms for the new operations.
      </DialogContentText>
      <Autocomplete
        multiple
        id="tags-filled"
        freeSolo
        options={[]}
        value={searchTerms}
        autoSelect={true}
        onChange={(event, newValue) => {
          setSearchTerms(newValue);
        }}
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
