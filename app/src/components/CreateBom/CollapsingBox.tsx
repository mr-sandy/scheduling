import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import { IconButton, IconButtonProps, Button } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface ExpandIconProps {
  expand: boolean;
}

const ExpandMoreButton = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return (
    <IconButton
      {...other}
      sx={{ padding: "0px", marginBottom: "10px", clear: "both" }}
    />
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandMoreIcon = styled((props: ExpandIconProps) => {
  return <ExpandMore />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(90deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CollapsingBox(props: React.PropsWithChildren) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Collapse in={expanded} collapsedSize={40} component={Box}>
      <Button
        variant="outlined"
        onClick={handleExpandClick}
        endIcon={<ExpandMoreIcon expand={expanded} />}
      >
        Send
      </Button>
      {props.children}
    </Collapse>
  );
}
