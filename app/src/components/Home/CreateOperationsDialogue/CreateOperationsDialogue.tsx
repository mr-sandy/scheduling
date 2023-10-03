import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Stack,
  Box,
} from "@mui/material";
import ClientSelector from "./ClientSelector";

export function CreateOperationsDialogue({
  open,
  handleClose,
  defaultClient,
}: {
  open: boolean;
  handleClose: () => void;
  defaultClient?: string;
}) {
  const [client, setClient] = useState<string>(defaultClient || "");

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Create Operations</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <ClientSelector
            value={client}
            onChange={(value) => setClient(value)}
          />
          <ClientSelector
            value={client}
            onChange={(value) => setClient(value)}
          />
          <ClientSelector
            value={client}
            onChange={(value) => setClient(value)}
          />
          <ClientSelector
            value={client}
            onChange={(value) => setClient(value)}
          />
          <ClientSelector
            value={client}
            onChange={(value) => setClient(value)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
