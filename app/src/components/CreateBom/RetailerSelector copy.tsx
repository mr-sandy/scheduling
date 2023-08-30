import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Retailer } from "../../services/retailersService";
import { useRetailers } from "../RetailerListProvider";
import { useBom, useBomDispatch } from "../BomProvider";
import { setProperty } from "../../state/bom/bomActions";
import { RetailerSelectorDialog } from "./RetailerSelectorDialog";
import CollapsingBox from "./CollapsingBox";

interface RetailerOptionType extends Retailer {
  inputValue?: string;
}

const filter = createFilterOptions<RetailerOptionType>();

export default function RetailerSelector() {
  const [value, setValue] = React.useState<RetailerOptionType | null>(null);
  const [open, toggleOpen] = React.useState(false);
  const retailers = useRetailers();
  const bom = useBom();
  const dispatch = useBomDispatch();

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
            <li {...props}>{option.retailerId}</li>
          )}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Free solo dialog" />
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
