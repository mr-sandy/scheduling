import { useState } from "react";
import { Box } from "@mui/material";
import { Results } from "./Results/Results";
import { Filters } from "./Filters/Filters";
import { CreateOperationsDialogue } from "./CreateOperationsDialogue";
import { useSearchParams } from "react-router-dom";

export function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const defaultClient = searchParams.get("client") || "";
  const defaultRetailer = searchParams.get("retailer") || "";
  const defaultOperationType = searchParams.get("operationType") || "";
  const defaultMultistore = searchParams.get("multistore") === "true";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          padding: 2,
          borderRight: 0,
          borderColor: "#e0e0e0",
          height: "calc(100vh - 64px)",
          width: 350,
          boxShadow: 3,
        }}
      >
        <Filters />
      </Box>
      <Box
        sx={{
          paddingTop: 2,
          paddingLeft: 3,
          paddingRight: 3,
          flexGrow: 1,
        }}
      >
        <Results onCreateClick={() => setShowModal(true)} />
      </Box>
      {showModal && (
        <CreateOperationsDialogue
          open={showModal}
          handleClose={() => setShowModal(false)}
          defaultClient={defaultClient}
          defaultRetailer={defaultRetailer}
          defaultOperationType={defaultOperationType}
          defaultMultistore={defaultMultistore}
        />
      )}
    </Box>
  );
}
