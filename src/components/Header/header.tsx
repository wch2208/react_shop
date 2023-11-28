import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Badge } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartItemCount } from "../../store/atoms/CartItemCount";
import { DarkModeIcon } from "../MUIcomponents/DarkMode";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TemporaryDrawer from "../MUIcomponents/drawer";
import React, { ChangeEvent, useState } from "react";
import { SearchQueryAtom } from "../../store/atoms/SearchQueryAtom";
import { ProductsState } from "../../store/atoms/ProductsAtom";
import SearchList from "../MUIcomponents/SearchList";

const Header = () => {
  const Count = useRecoilValue(CartItemCount);
  const [searchQuery, setSearchQuery] = useRecoilState(SearchQueryAtom);
  const products = useRecoilValue(ProductsState);
  const [toggleSearch, setToggleSearch] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const filteredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchQuery(filteredProducts);

    if (e.target.value === "") {
      setSearchQuery([]);
    }
  };
  const searchOut = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.value = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const targetProduct = searchQuery[0];
      navigate(`/product/${targetProduct.id}`);
      setSearchQuery([]);
      (e.target as HTMLInputElement).value = "";
    }
  };

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
            CH_Shop
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
            type="search"
            onChange={handleChange}
            onBlur={searchOut}
            onKeyDown={handleKeyDown}
          />
        </Hidden>

        <Hidden mdUp>
          <Button
            style={{
              maxWidth: "40px",
              minWidth: "40px",
            }}
          >
            <SearchRoundedIcon
              onClick={() => setToggleSearch(!toggleSearch)}
              color="action"
            />
          </Button>
        </Hidden>
        <Link to="/cart">
          <Button
            style={{
              maxWidth: "40px",
              minWidth: "40px",
              marginRight: "10px",
            }}
          >
            <Badge badgeContent={Count} color="secondary" overlap="rectangular">
              <ShoppingBasketOutlinedIcon color="action" />
            </Badge>
          </Button>
        </Link>
      </Toolbar>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Hidden mdUp>
          {toggleSearch ? (
            <>
              <TextField
                sx={{ borderTop: "1px solid #e7e7e7" }}
                fullWidth
                placeholder="Search"
                variant="standard"
                type="search"
                onChange={handleChange}
                onBlur={searchOut}
                autoFocus
                onKeyDown={handleKeyDown}
              />
              {searchQuery.length > 0 ? <SearchList mode="mdDown" /> : null}
            </>
          ) : null}
        </Hidden>
        <Hidden mdDown>
          {searchQuery.length > 0 ? <SearchList mode="mdUp" /> : null}
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Header;
