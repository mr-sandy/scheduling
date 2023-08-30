import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Retailer } from "../../../services/retailersService";
import { useRetailers } from "../../RetailerListProvider";
import { RetailerSelectorDialog } from "../RetailerSelectorDialog";

interface RetailerOptionType extends Retailer {
  inputValue?: string;
}

const filter = createFilterOptions<RetailerOptionType>();

export default function RetailerSelector() {
  const [value, setValue] = React.useState<RetailerOptionType | null>(null);
  const [open, toggleOpen] = React.useState(false);
  const retailers = useRetailers();

  const handleClose = () => {
    setDialogValue({
      title: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      retailerId: dialogValue.title,
    });
    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        sx={{ border: "none", borderColor: "#fff" }}
        fullWidth
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              retailerId: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        options={retailers as RetailerOptionType[]}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.retailerId;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => (
          <li {...props}>
            {`${option.retailerId} (${option.domain
              ?.replace("https://", "")
              .replace("http://", "")
              .replace("www.", "")})`}
          </li>
        )}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} size="small" variant="outlined" />
        )}
      />
      <RetailerSelectorDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        dialogValue={dialogValue}
        setDialogValue={setDialogValue}
      />
    </React.Fragment>
  );
}
