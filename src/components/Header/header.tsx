import MaterialUISwitch from "../MUIcomponents/modeSwitchBtn";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Button, TextField, Badge } from "@material-ui/core";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import MyDrawer from "../MUIcomponents/drawer";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRecoilState, useRecoilValue } from "recoil";
import { DrawerOpen } from "../../store/atoms/DrawerOpen";
import { CartItemCount } from "../../store/atoms/CartItemCount";

const Header = () => {
  const [open, setOpen] = useRecoilState(DrawerOpen);
  const Count = useRecoilValue(CartItemCount);

  return (
    <Grid
      container
      justifyContent={"space-between"}
      sx={{
        position: "fixed",
        top: 0,
        backgroundColor: "#ffffff",
        zIndex: 10,
        width: "100vw",
        boxShadow: "0px 0px 10px #e7e7e7",
      }}
    >
      <MyDrawer
        open={open}
        handleClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Toolbar sx={{ p: 0 }}>
        <Hidden mdUp>
          <Button
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
          >
            <DensityMediumRoundedIcon />
          </Button>
        </Hidden>
        <Link to="/">
          <Button className="homeBtn">React Shop</Button>
        </Link>
        <Hidden mdDown>
          <Link to="../clothing">
            <Button>의류</Button>
          </Link>
          <Link to="../jewelery">
            <Button>주얼리</Button>
          </Link>
          <Link to="../electronics">
            <Button>컴퓨터 주변기기</Button>
          </Link>
        </Hidden>
      </Toolbar>
      <Toolbar sx={{ p: 0 }}>
        <MaterialUISwitch />
        <Hidden mdDown>
          <TextField
            placeholder="Search"
            onChange={e => console.log(e.target.value)}
          />
        </Hidden>
        <Hidden mdUp>
          <SearchRoundedIcon />
        </Hidden>
        <Link to="/cart">
          <Button>
            <Badge badgeContent={Count} color="secondary" overlap="rectangular">
              <ShoppingBasketOutlinedIcon />
            </Badge>
          </Button>
        </Link>
      </Toolbar>
    </Grid>
  );
};

export default Header;
