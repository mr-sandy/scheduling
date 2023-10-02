import { Box } from "@mui/material";
import { OperationsTable } from "./OperationsTable";
import { Filters } from "./Filters";

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
          width: 300,
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
        <OperationsTable />
      </Box>
    </Box>
  );
}
