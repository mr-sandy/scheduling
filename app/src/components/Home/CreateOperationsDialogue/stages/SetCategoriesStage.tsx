import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  DialogContentText,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
import { Padding } from "@mui/icons-material";
import { allCategories, Category } from "./categories";

function CategoryRow({
  category,
  indent = 0,
}: {
  category: Category;
  indent?: number;
}) {
  return (
    <>
      <ListItem
        key={category.name}
        disablePadding
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <ListItemButton
          // onClick={handleToggle(value)}
          dense
        >
          <ListItemIcon
            sx={{ minWidth: "initial", paddingLeft: indent ? indent * 3 : 0 }}
          >
            <Checkbox
              edge="start"
              // checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
              //     // checked={checked[0] && checked[1]}
              //     // indeterminate={checked[0] !== checked[1]}
              //     // onChange={handleChange1}
            />
          </ListItemIcon>
          <ListItemText id={category.name} primary={category.name} />
        </ListItemButton>
      </ListItem>
      {category.children?.map((category) => (
        <CategoryRow category={category} indent={indent ? indent + 1 : 1} />
      ))}
    </>
  );
}

export function SetCategoriesStage({
  categories,
  setCategories,
}: {
  categories: string[];
  setCategories: (value: string[]) => void;
}) {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label={<Typography variant="body2">Child 1</Typography>}
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label={<Typography variant="body2">Child 2</Typography>}
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <Stack spacing={3} paddingTop={3}>
      <DialogContentText>
        Enter one or more search terms for the new operations.
      </DialogContentText>
      <Paper>
        <Box sx={{ padding: 2, borderBottom: 1, borderColor: "divider" }}>
          <Typography variant="body2" component="span" fontWeight={500}>
            Category
          </Typography>
        </Box>
        <List disablePadding>
          {allCategories.map((category) => (
            <CategoryRow category={category} />
          ))}
        </List>
      </Paper>
    </Stack>
  );
}
