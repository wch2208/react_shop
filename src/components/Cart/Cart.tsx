import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ProductsList } from "../../store/selectors/FetchApi";
import { useRecoilValue } from "recoil";

export default function Cart() {
  const products = useRecoilValue(ProductsList);

  const CartList = products.map(product => {
    return (
      <Grid container>
        <Grid
          item
          sx={{
            mt: 4,
            ml: "auto",
            mr: "auto",
          }}
          xs={2}
        >
          <img
            style={{ width: "100%" }}
            src={product.image}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={10} md={7} sx={{ m: 4 }}>
          <Grid item>
            <Typography variant="h6"> {product.title}</Typography>
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <Typography variant="h5">${product.price}</Typography>
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              style={{
                maxWidth: "30px",
                minWidth: "30px",
              }}
            >
              -
            </Button>
            <p>{1}</p>
            <Button
              variant="contained"
              style={{
                maxWidth: "30px",
                minWidth: "30px",
              }}
            >
              +
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <>
      <Grid container className="outline" sx={{ mt: 9, flex: 1 }}>
        <Grid
          item
          xs={12}
          className="breadcrumbs"
          sx={{ border: "1px solid red" }}
        >
          <Stack spacing={2} sx={{ ml: 4 }}>
            <Breadcrumbs
              separator={<NavigateNextRoundedIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Typography>Home</Typography>
              <Typography>장바구니</Typography>
            </Breadcrumbs>
          </Stack>
        </Grid>
        <Grid item md={9} className="products" sx={{ border: "1px solid red" }}>
          {CartList}
        </Grid>
        <Grid
          item
          md={3}
          className="cartTotalSection"
          sx={{
            display: "flex",
            height: "40px",
            paddingleft: "10px",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          gap={2}
        >
          <Typography variant="h6">총 : $999.99</Typography>
          <Button
            variant="contained"
            style={{
              maxWidth: "100px",
              minWidth: "100px",
              minHeight: "30px",
            }}
          >
            구매하기
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
