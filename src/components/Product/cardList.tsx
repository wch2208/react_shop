import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useRecoilValue } from "recoil";
import { ProductsList } from "../../store/selectors/FetchApi";

//상품목록 렌더링

interface CardListProps {
  category: string;
  i: number;
}

const CardList = ({ category, i }: CardListProps) => {
  const products = useRecoilValue(ProductsList);

  return (
    <Grid
      container
      sx={{ mt: 7, ml: "auto", mr: "auto", maxWidth: "1344px", flex: "1" }}
    >
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
        .map((product, index) => {
          return index < i ? (
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
          ) : null;
        })}
    </Grid>
  );
};

export default CardList;
