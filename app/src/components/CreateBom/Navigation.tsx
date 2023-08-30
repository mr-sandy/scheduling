import { Button, Stack } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useActiveStep, useSteps } from "./StepsProvider";

export function Navigation() {
  const steps = useSteps();
  const activeStep = useActiveStep();

  const nextPath =
    activeStep < steps.length - 1 ? steps[activeStep + 1].path : "";
  const previousPath = activeStep > 1 ? steps[activeStep - 1].path : "";

  return (
    <Stack
      mt={2}
      p={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
      <Button
        startIcon={<NavigateBefore />}
        variant="outlined"
        component={Link}
        to={previousPath}
        hidden={true}
      >
        Back
      </Button>
      <Button
        endIcon={<NavigateNext />}
        variant="contained"
        component={Link}
        to={nextPath}
      >
        Next
      </Button>
    </Stack>
  );
}
