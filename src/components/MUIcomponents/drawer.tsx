import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import { Link } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/clothing" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItemText primary="의류" sx={{ color: "text.primary" }} />
          </ListItemButton>
        </Link>
        <Link to="/jewelery" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItemText primary="주얼리" sx={{ color: "text.primary" }} />
          </ListItemButton>
        </Link>
        <Link to="/electronics" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItemText primary="디지털" sx={{ color: "text.primary" }} />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map(anchor => (
        <React.Fragment key={anchor}>
          <DensityMediumRoundedIcon
            color="primary"
            sx={{
              fontSize: "28px",
              color: "text.primary",
              cursor: "pointer",
              mt: "3px",
              ml: "5px",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </DensityMediumRoundedIcon>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
