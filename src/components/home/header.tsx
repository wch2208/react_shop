import React from "react";
import MaterialUISwitch from "./modeSwitchBtn";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Button, TextField, Badge } from "@material-ui/core";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import MyDrawer from "./drawer";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRecoilState } from "recoil";
import { DrawerOpen } from "../../recoil/DrawerOpen";

const Header: React.FC = () => {
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
          <Link href="../Fashion" className="passionCategoryBtn">
            <Button className="passionCategoryBtn">패션</Button>
          </Link>
          <Link href="../Accesory" className="AccesaryCategoryBtn">
            <Button className="AccesaryCategoryBtn">액세서리</Button>
          </Link>
          <Link href="../Digital" className="DigitalCategoryBtn">
            <Button className="digitalCategoryBtn">디지털</Button>
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
