import styled from "@emotion/styled";
import {
  Typography,
  TextField,
  Box,
  Stack,
  InputAdornment,
  Autocomplete,
  Chip,
} from "@mui/material";
import countries from "./countries";
import { useBom, useBomDispatch } from "../BomProvider";
import { setProperty } from "../../state/bom/bomActions";
import { Country } from "../../../../common/types";

const ShortTextField = styled(TextField)({
  width: "50%",
  minWidth: "300px",
});

export function Summary() {
  const bom = useBom();
  const dispatch = useBomDispatch();

  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Summary
      </Typography>
      <Stack gap={3}>
        <TextField
          fullWidth
          id="outlined-required"
          label="Client"
          value={bom?.client || ""}
          onChange={(e) => dispatch(setProperty({ client: e.target.value }))}
        />

        <TextField
          fullWidth
          id="outlined-required"
          label="Sales Lead"
          value={bom?.salesLead || ""}
          onChange={(e) => dispatch(setProperty({ salesLead: e.target.value }))}
        />

        <ShortTextField
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          fullWidth
          type="number"
          label="ARR"
          value={bom?.arr || ""}
          onChange={(e) =>
            dispatch(setProperty({ arr: parseInt(e.target.value) }))
          }
        />

        <Autocomplete
          multiple
          id="tags-filled"
          options={countries}
          getOptionLabel={(country) => country.name}
          onChange={(event, newValue) =>
            dispatch(setProperty({ countries: newValue }))
          }
          value={bom?.countries || []}
          isOptionEqualToValue={(option, value) => option.code === value.code}
          renderTags={(value: Country[], getTagProps) =>
            value.map((country: Country, index) => (
              <Chip
                variant="outlined"
                label={country.name}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Countries" />
          )}
        />
        <ShortTextField
          fullWidth
          id="outlined-required"
          label="Requested Live Date"
          placeholder="dd/mm/yy"
          value={bom?.requestedLiveDate || ""}
          onChange={(e) =>
            dispatch(setProperty({ requestedLiveDate: e.target.value }))
          }
        />

        <ShortTextField
          id="outlined-required"
          label="Expected Contract Start Date"
          placeholder="dd/mm/yy"
          value={bom?.expectedContractStartDate || ""}
          onChange={(e) =>
            dispatch(setProperty({ expectedContractStartDate: e.target.value }))
          }
        />
      </Stack>
    </Box>
  );
}
