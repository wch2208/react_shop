import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Icons } from "./icon";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";

const Footer: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#f2f2f2",
        mt: 5,
        p: 5,
        height: "300px",
      }}
    >
      <Grid item>
        <Typography>React Shop</Typography>
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
          <Link href="https://www.facebook.com">
            <Tooltip title="Facebook" placement="bottom" arrow enterDelay={100}>
              <FacebookIcon />
            </Tooltip>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.instagram.com">
            <Tooltip
              title="Instagram"
              placement="bottom"
              arrow
              enterDelay={100}
            >
              <InstagramIcon />
            </Tooltip>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.github.com">
            <Tooltip title="Github" placement="bottom" arrow enterDelay={100}>
              <GitHubIcon />
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
      <Grid item>Copyright © 2023 WonChanHee</Grid>
    </Grid>
  );
};

export default Footer;
