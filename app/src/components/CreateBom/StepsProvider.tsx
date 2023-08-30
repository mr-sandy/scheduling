import React, { Dispatch, createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export type StepInfo = { label: string; path: string };

const steps: StepInfo[] = [
  { label: "Summary", path: "/boms/create/summary" },
  { label: "Fundamentals", path: "/boms/create/fundamentals" },
  { label: "Gather Requirements", path: "/boms/create/gather-requirements" },
  { label: "Retailers", path: "/boms/create/retailers" },
  { label: "Apps", path: "/boms/create/apps" },
  { label: "Scorecards", path: "/boms/create/scorecards" },
  { label: "Publication Service", path: "/boms/create/publication-service" },
  { label: "Other Requirements", path: "/boms/create/other-requirements" },
  { label: "Review", path: "/boms/create/review" },
];

const StepsContext = createContext<StepInfo[]>(steps);
const ActiveStepContext = createContext<number>(0);

export function StepsProvider({ children }: { children: React.ReactElement }) {
  const location = useLocation();
  const activeStep = steps.findIndex((s) =>
    location.pathname.startsWith(s.path)
  );

  return (
    <StepsContext.Provider value={steps}>
      <ActiveStepContext.Provider value={activeStep}>
        {children}
      </ActiveStepContext.Provider>
    </StepsContext.Provider>
  );
}

export function useSteps() {
  return useContext(StepsContext);
}

export function useActiveStep() {
  return useContext(ActiveStepContext);
}
