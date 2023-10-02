import { Box } from "@mui/material";
import { Results } from "./Results/Results";
import { Filters } from "./Filters/Filters";

export function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          padding: 3,
          borderRight: 1,
          borderColor: "#e0e0e0",
          height: "calc(100vh - 64px)",
          width: 350,
        }}
      >
        <Filters />
      </Box>
      <Box
        sx={{
          padding: 3,
          flexGrow: 1,
        }}
      >
        <Results />
      </Box>
    </Box>
  );
}
