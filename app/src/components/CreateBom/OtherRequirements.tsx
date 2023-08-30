import {
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Stack,
} from "@mui/material";
import { useBom, useBomDispatch } from "../BomProvider";
import { setProperty } from "../../state/bom/bomActions";

export function OtherRequirements() {
  const bom = useBom();
  const dispatch = useBomDispatch();

  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Other Requirements
      </Typography>
      <Stack gap={3}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={bom?.pimIntegration || false}
                onChange={(e) =>
                  dispatch(setProperty({ pimIntegration: e.target.checked }))
                }
              />
            }
            label="PIM integration"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bom?.bigQueryAccess || false}
                onChange={(e) =>
                  dispatch(setProperty({ bigQueryAccess: e.target.checked }))
                }
              />
            }
            label="BigQuery access"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bom?.dataQualityDashboard || false}
                onChange={(e) =>
                  dispatch(
                    setProperty({ dataQualityDashboard: e.target.checked })
                  )
                }
              />
            }
            label="Data quality dashboard"
          />
        </FormGroup>
        <TextField
          fullWidth
          id="outlined-required"
          label="Non-standard product requirements"
          placeholder="Description and requested timings"
          multiline
          rows={4}
          value={bom?.nonStandardProductRequirements || ""}
          onChange={(e) =>
            dispatch(
              setProperty({ nonStandardProductRequirements: e.target.value })
            )
          }
        />
      </Stack>
    </Box>
  );
}
