import {
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useBom, useBomDispatch } from "../BomProvider";
import { setProperty } from "../../state/bom/bomActions";

export function Scorecards() {
  const bom = useBom();
  const dispatch = useBomDispatch();

  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Scorecards
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.scorecards?.digitalShelfScorecardBranded || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    scorecards: {
                      ...bom?.scorecards,
                      digitalShelfScorecardBranded: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Digital shelf scorecard (branded)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={
                bom?.scorecards?.digitalShelfScorecardCompetitor || false
              }
              onChange={(e) => {
                dispatch(
                  setProperty({
                    scorecards: {
                      ...bom?.scorecards,
                      digitalShelfScorecardCompetitor: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Digital shelf scorecard (competitor)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.scorecards?.enterprise || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    scorecards: {
                      ...bom?.scorecards,
                      enterprise: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Enterprise"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.scorecards?.cars || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    scorecards: {
                      ...bom?.scorecards,
                      cars: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="CARS (Mars only)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.scorecards?.carsPds || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    scorecards: {
                      ...bom?.scorecards,
                      carsPds: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="CARS (PDS) (Mars Only)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.scorecards?.pdskMw || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    scorecards: {
                      ...bom?.scorecards,
                      pdskMw: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="PDSK MW (Mars only)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.scorecards?.pdskFood || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    scorecards: {
                      ...bom?.scorecards,
                      pdskFood: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="PDSK Food (Mars only)"
        />{" "}
      </FormGroup>
    </Box>
  );
}
