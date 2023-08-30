import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { Link } from "react-router-dom";
import { useActiveStep, useSteps } from "./StepsProvider";

export function Steps() {
  const steps = useSteps();
  const activeStep = useActiveStep();

  return (
    <Box p={4} sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, path }) => (
          <Step key={label} completed={false}>
            <StepButton component={Link} color="inherit" to={path}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
