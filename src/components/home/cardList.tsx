import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useRecoilState } from "recoil";
import { Product, ProductsAtom } from "../../recoil/ProductsAtom";
import { useEffect } from "react";

const CardList = ({ category }) => {
  const [products, setProducts] = useRecoilState<Product[]>(ProductsAtom);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((res: Product[]) => setProducts(res))
      .catch(err => console.log(err));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(products);
  return (
    <Grid container sx={{ mt: 7 }}>
      <Grid
        item
        xs={12}
        sx={{
          width: "100vw",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        {category}
      </Grid>
      {products
        .filter(product => product.category.includes(category))
        .map(product => {
          return (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Link underline="none" href={`/product/` + `${product.id}`}>
                <Card sx={{ m: 1 }}>
                  <CardMedia
                    sx={{ height: "320px", objectFit: "contain" }}
                    component="img"
                    src={product.image}
                    alt={product.title}
                  />
                  <CardContent
                    sx={{
                      textUnderlineOffset: "none",
                      height: "180px",
                      backgroundColor: "#f3f4f6",
                    }}
                  >
                    <Typography variant="body2">{product.title}</Typography>
                    <br />
                    <Typography variant="h6">${product.price}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CardList;
