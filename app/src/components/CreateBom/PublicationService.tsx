import {
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useBom, useBomDispatch } from "../BomProvider";
import { setProperty } from "../../state/bom/bomActions";

export function PublicationService() {
  const bom = useBom();
  const dispatch = useBomDispatch();

  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Publication Service
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.publicationService?.walmart || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    publicationService: {
                      ...bom?.publicationService,
                      walmart: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Walmart"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.publicationService?.target || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    publicationService: {
                      ...bom?.publicationService,
                      target: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Target"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.publicationService?.kroger || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    publicationService: {
                      ...bom?.publicationService,
                      kroger: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Kroger"
        />
        <Box pt={1} mt={2} borderTop={1} borderColor={"#ccc"}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bom?.publicationService?.traitedData || false}
                onChange={(e) => {
                  dispatch(
                    setProperty({
                      publicationService: {
                        ...bom?.publicationService,
                        traitedData: e.target.checked,
                      },
                    })
                  );
                }}
              />
            }
            label="Traited data"
          />
        </Box>
      </FormGroup>
    </Box>
  );
}
