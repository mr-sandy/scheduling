import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export function RetailerSelectorDialog({
  open,
  handleClose,
  handleSubmit,
  dialogValue,
  setDialogValue,
}: {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  dialogValue: any;
  setDialogValue: any;
}): JSX.Element {
  
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>New Retailer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Did you miss any film in our list? Please, add it!
          </DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            margin="normal"
            id="name"
            value={dialogValue.title}
            onChange={(event) =>
              setDialogValue({
                ...dialogValue,
                title: event.target.value,
              })
            }
            label="title"
            type="text"
            fullWidth
          />{" "}
          <TextField
            variant="outlined"
            margin="normal"
            label="Country"
            type="text"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="Website URL"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="outlined">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
