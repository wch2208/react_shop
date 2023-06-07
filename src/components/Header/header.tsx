import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRecoilValue } from "recoil";
import { CartItemCount } from "../../store/atoms/CartItemCount";
import { DarkModeIcon } from "../../utils/DarkMode";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TemporaryDrawer from "../MUIcomponents/drawer";

const Header = () => {
  const Count = useRecoilValue(CartItemCount);

  return (
    <Grid
      container
      justifyContent={"space-between"}
      sx={{
        position: "fixed",
        top: 0,
        bgcolor: "background.paper",
        color: "text.primary",
        zIndex: 10,
        width: "100vw",
        boxShadow: "0px 0px 10px #e7e7e7",
      }}
    >
      <Toolbar sx={{ p: 0 }}>
        <Hidden mdUp>
          <TemporaryDrawer />
        </Hidden>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            color="primary"
            sx={{ fontSize: "17px", color: "text.primary" }}
          >
            React Shop
          </Button>
        </Link>
        <Hidden mdDown>
          <Link to="../clothing">
            <Button
              color="primary"
              sx={{ fontSize: "20px", color: "text.primary" }}
            >
              의류
            </Button>
          </Link>
          <Link to="../jewelery">
            <Button
              color="primary"
              sx={{ fontSize: "20px", color: "text.primary" }}
            >
              주얼리
            </Button>
          </Link>
          <Link to="../electronics">
            <Button
              color="primary"
              sx={{ fontSize: "20px", color: "text.primary" }}
            >
              디지털
            </Button>
          </Link>
        </Hidden>
      </Toolbar>
      <Toolbar
        sx={{
          p: 0,
          display: "flex",
          justifyContent: "flex-end",
          width: "30%",
        }}
      >
        <DarkModeIcon />
        <Hidden mdDown>
          <TextField
            placeholder="Search"
            variant="standard"
            onChange={e => console.log(e.target.value)}
          />
        </Hidden>
        <Hidden mdUp>
          <SearchRoundedIcon sx={{ marginLeft: "12px" }} />
        </Hidden>
        <Link to="/cart">
          <Button>
            <Badge badgeContent={Count} color="secondary" overlap="rectangular">
              <ShoppingBasketOutlinedIcon color="action" />
            </Badge>
          </Button>
        </Link>
      </Toolbar>
    </Grid>
  );
};

export default Header;
