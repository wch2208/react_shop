import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Icons } from "./icon";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

const Footer: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mt: 5,
        p: 5,
        height: "300px",
        backgroundColor: "background.paper",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Grid item>
        <Typography color={"text.primary"} variant="h6">
          CH_Shop
        </Typography>
      </Grid>
      <Icons />
      <Grid
        container
        direction="row"
        columnSpacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Link to="https://www.facebook.com">
            <Tooltip title="Facebook" placement="bottom" arrow enterDelay={100}>
              <FacebookIcon sx={{ color: "text.primary" }} />
            </Tooltip>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://www.instagram.com">
            <Tooltip
              title="Instagram"
              placement="bottom"
              arrow
              enterDelay={100}
            >
              <InstagramIcon sx={{ color: "text.primary" }} />
            </Tooltip>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://www.github.com">
            <Tooltip title="Github" placement="bottom" arrow enterDelay={100}>
              <GitHubIcon sx={{ color: "text.primary" }} />
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
      <Grid item sx={{ color: "text.primary" }}>
        Copyright © 2023 WonChanHee
      </Grid>
    </Grid>
  );
};

export default Footer;
