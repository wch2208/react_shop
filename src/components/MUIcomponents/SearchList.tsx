import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useRecoilState } from "recoil";
import { SearchQueryAtom } from "../../store/atoms/SearchQueryAtom";
import { Link } from "react-router-dom";

export default function SearchList({ mode }: { mode: string }) {
  const [Products, setProducts] = useRecoilState(SearchQueryAtom);
  const handleClick = () => {
    setProducts([]);
  };
  return (
    <div
      onClick={handleClick}
      style={{ position: "absolute", width: "100vw", height: "100vh", top: 0 }}
    >
      <Box
        onBlur={handleClick}
        sx={{
          position: "absolute",
          top: mode === "mdDown" ? "97px" : "50px",
          right: "1px",
          width: mode === "mdDown" ? "100vw" : "300px",
          maxHeight: mode === "mdDown" ? "100vh" : "40vw",
          overflowY: "scroll",
          bgcolor: "background.paper",
          border: "1px solid #ccc",
        }}
      >
        <nav aria-label="main mailbox folders">
          <Divider />
          <List>
            {Products.map(product => (
              <ListItem disablePadding key={product.id}>
                <Link
                  to={`/product/` + `${product.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={handleClick}
                >
                  <ListItemButton>
                    <ListItemText
                      primary={product.title}
                      sx={{ color: "text.primary" }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </div>
  );
}
