import MaterialUISwitch from "../MUIcomponents/modeSwitchBtn";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Button, TextField, Badge } from "@material-ui/core";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import MyDrawer from "../MUIcomponents/drawer";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRecoilState } from "recoil";
import { DrawerOpen } from "../../store/atoms/DrawerOpen";

const Header = () => {
  const [open, setOpen] = useRecoilState(DrawerOpen);
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
        <Button className="homeBtn" href="/">
          React Shop
        </Button>
        <Hidden mdDown>
          <Link href="../Clothing">
            <Button>의류</Button>
          </Link>
          <Link href="../Jewelery">
            <Button>주얼리</Button>
          </Link>
          <Link href="../Electronics">
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
        <Button>
          <Badge badgeContent={10} color="secondary" overlap="rectangular">
            <ShoppingBasketOutlinedIcon />
          </Badge>
        </Button>
      </Toolbar>
    </Grid>
  );
};

export default Header;
