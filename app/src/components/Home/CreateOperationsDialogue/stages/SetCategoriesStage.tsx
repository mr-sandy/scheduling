import {
  Autocomplete,
  Chip,
  DialogContentText,
  Stack,
  TextField,
} from "@mui/material";

export function SetCategoriesStage({
  categories,
  setCategories,
}: {
  categories: string[];
  setCategories: (value: string[]) => void;
}) {
  return (
    <Stack spacing={3} paddingTop={1}>
      <DialogContentText>
        Select one or more categories for the new operations.
      </DialogContentText>
      <Autocomplete
        multiple
        id="tags-filled"
        freeSolo
        options={[]}
        value={categories}
        onChange={(event, newValue) => {setCategories(newValue)}}
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
            label="Categories"
            placeholder="Enter categories"
          />
        )}
      />
    </Stack>
  );
}
