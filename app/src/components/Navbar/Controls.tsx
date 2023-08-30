import { Stack, Button, IconButton, InputBase, Paper } from "@mui/material";
import { AddCircle as Add, Search as SearchIcon } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useBomDispatch } from "../BomProvider";
import { initialiseBom } from "../../state/bom/bomActions";

export function Controls() {
  const bomDispatch = useBomDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isCreateBomPage = location.pathname.startsWith("/boms/create");

  function handleCreateBomClick() {
    bomDispatch(initialiseBom());
    navigate("/boms/create/summary");
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Paper
        component="form"
        sx={{
          p: "0px 4px",
          display: "flex",
          alignItems: "center",
          width: "400px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter BOM number or client name"
          inputProps={{ "aria-label": "Enter BOM number or client name" }}
        />
      </Paper>
      <Button
        variant="contained"
        color="secondary"
        disabled={isCreateBomPage}
        startIcon={<Add />}
        onClick={() => handleCreateBomClick()}
      >
        New BOM
      </Button>
    </Stack>
  );
}
