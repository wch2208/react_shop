import React from "react";
import MaterialUISwitch from "./modeSwitchBtn";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Button, TextField, Container, Badge } from "@material-ui/core";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import MyDrawer from "./drawer";
import Link from "@mui/material/Link";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container
      style={{
        position: "sticky",
        top: 0,
        maxWidth: "100vw",
        backgroundColor: "#ffffff",
        zIndex: 9,
      }}
    >
      <MyDrawer
        open={open}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Toolbar>
          <Button
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
          >
            <DensityMediumRoundedIcon />
          </Button>
          <Button className="homeBtn" href="/">
            React Shop
          </Button>
          <Link href="../Fashion" className="passionCategoryBtn">
            <Button className="passionCategoryBtn">패션</Button>
          </Link>
          <Link href="../Accesory" className="AccesaryCategoryBtn">
            <Button className="AccesaryCategoryBtn">액세서리</Button>
          </Link>
          <Link href="../Digital" className="DigitalCategoryBtn">
            <Button className="digitalCategoryBtn">디지털</Button>
          </Link>
        </Toolbar>
        <Toolbar>
          <MaterialUISwitch />
          <TextField
            placeholder="Search"
            onChange={e => console.log(e.target.value)}
          />
          <Button>
            <Badge badgeContent={10} color="secondary" overlap="rectangular">
              <ShoppingBasketOutlinedIcon />
            </Badge>
          </Button>
        </Toolbar>
      </Toolbar>
    </Container>
  );
};

export default Header;
