import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Link, useParams } from "react-router-dom";
import { ProductsState } from "../../store/atoms/ProductsAtom";
import { useRecoilValue } from "recoil";
import { useUpdateCart } from "../../utils/useUpdateCart";
import { useEffect } from "react";

const ProductDetail: React.FC = () => {
  const products = useRecoilValue(ProductsState);
  const productId = window.location.pathname.split("/").pop();
  const product = products.find(product => `${product.id}` === productId);
  const { addCart } = useUpdateCart();
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [id]);

  return product ? (
    <Grid container sx={{ mt: 9, flex: 1 }}>
      <Grid item xs={12}>
        <Stack spacing={2} sx={{ ml: 4 }}>
          <Breadcrumbs
            separator={<NavigateNextRoundedIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Typography>Home</Typography>
            <Typography>{product.category}</Typography>
          </Breadcrumbs>
        </Stack>
      </Grid>
      <Grid container key={product.id}>
        <Grid
          item
          sx={{
            mt: 4,
            ml: "auto",
            mr: "auto",
          }}
          xs={4}
        >
          <img
            style={{ width: "100%", borderRadius: "20px" }}
            src={product.image}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={12} md={7} sx={{ m: 4, color: "text.primary" }}>
          <Grid item>{product.title}</Grid>
          <Grid
            item
            sx={{
              mt: 2,
              flex: 1,
            }}
          >
            {product.description}
          </Grid>
          <Grid
            container
            sx={{
              mt: 2,
            }}
          >
            <Grid item xs={12}>
              <Rating
                defaultValue={product.rating.rate}
                precision={0.1}
                readOnly
              />
              <Typography>
                {product.rating.rate}점{" / "}
                {product.rating.count}명 참여
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <Typography variant="h5">${product.price}</Typography>
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={addCart}
              id={product.id.toString()}
            >
              장바구니 담기
            </Button>
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              <Button variant="outlined" style={{ marginLeft: "10px" }}>
                장바구니 이동
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null;
};

export default ProductDetail;
