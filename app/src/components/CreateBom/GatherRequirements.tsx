import {
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Autocomplete,
  Chip,
  TextField,
} from "@mui/material";
import categories from "./categories";
import { useBom, useBomDispatch } from "../BomProvider";
import { setProperty } from "../../state/bom/bomActions";

export function GatherRequirements() {
  const bom = useBom();
  const dispatch = useBomDispatch();

  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Gather Requirements
      </Typography>
      <Stack gap={3}>
        <FormControl sx={{ width: "50%", minWidth: "300px" }}>
          <InputLabel id="demo-simple-select-label">
            Gather Frequency
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gather Frequency"
            value={bom?.gatherFrequency || "daily"}
            onChange={(e) =>
              dispatch(setProperty({ gatherFrequency: e.target.value }))
            }
          >
            <MenuItem value={"daily"}>Daily (standard)</MenuItem>
            <MenuItem value={"6xdaily"}>6x per day (search only)</MenuItem>
          </Select>
        </FormControl>
        <Autocomplete
          multiple
          id="tags-filled"
          options={categories}
          freeSolo
          onChange={(event, newValue) =>
            dispatch(setProperty({ categories: newValue }))
          }
          value={bom?.categories || []}
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
              multiline
              variant="outlined"
              label="Categories"
            />
          )}
        />
        <TextField
          id="outlined-required"
          label="Average # SKUs per category"
          type="number"
          sx={{ width: "50%", minWidth: "300px" }}
          value={bom?.averageSkusPerCategory || ""}
          onChange={(e) =>
            dispatch(
              setProperty({ averageSkusPerCategory: parseInt(e.target.value) })
            )
          }
        />
      </Stack>
    </Box>
  );
}
