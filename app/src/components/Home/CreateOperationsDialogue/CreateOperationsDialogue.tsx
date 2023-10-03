import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { StartStage } from "./stages";
import { SetSearchTermsStage } from "./stages/SetSearchTermsStage";
import { ReviewStage } from "./stages/ReviewStage";
import { ConfirmStage } from "./stages/ConfirmStage";

enum Stages {
  Start = 0,
  SetParams,
  Confirm,
  Review,
}

export function CreateOperationsDialogue({
  open,
  handleClose,
  defaultClient,
  defaultRetailer,
  defaultOperationType,
}: {
  open: boolean;
  handleClose: () => void;
  defaultClient?: string;
  defaultRetailer?: string;
  defaultOperationType?: string;
}) {
  const [client, setClient] = useState<string>(defaultClient || "");
  const [retailer, setRetailer] = useState<string>(defaultRetailer || "");
  const [operationType, setOperationType] = useState<string>(
    defaultOperationType || ""
  );
  const [stage, setStage] = useState<Stages>(Stages.Start);
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>Create Operations</DialogTitle>
      <DialogContent sx={{ minHeight: 400 }}>
        {stage === Stages.Start && (
          <StartStage
            client={client}
            setClient={setClient}
            retailer={retailer}
            setRetailer={setRetailer}
            operationType={operationType}
            setOperationType={setOperationType}
          />
        )}
        {stage === Stages.SetParams && operationType === "search" && (
          <SetSearchTermsStage
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
          />
        )}
      </DialogContent>
      <DialogActions sx={{ padding: 3 }}>
        {stage === Stages.Start && (
          <Button onClick={handleClose}>Cancel</Button>
        )}
        {stage !== Stages.Start && stage !== Stages.Review && (
          <Button onClick={() => setStage(stage - 1)}>Back</Button>
        )}
        {stage < Stages.Confirm && (
          <Button onClick={() => setStage(stage + 1)} variant="outlined">
            Next
          </Button>
        )}
        {stage === Stages.Confirm && (
          <Button
            onClick={() => {
              setStage(stage + 1);
            }}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        )}
        {stage === Stages.Review && (
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
