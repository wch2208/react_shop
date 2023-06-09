import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import PurchaseModal from "./purchaseModal";
import { CartItemAtom } from "../../store/atoms/cartItemAtom";
import { useUpdateCart } from "../../utils/useUpdateCart";
import { TotalPriceSelector } from "../../store/selectors/TotalPriceSelector";

export default function Cart() {
  const cartItems = useRecoilValue(CartItemAtom);
  const { addCart, removeCart } = useUpdateCart();
  const totalCost = useRecoilValue(TotalPriceSelector);

  const CartProduct = cartItems.map(cartItem => {
    return (
      <Grid container key={cartItem.id} sx={{ mt: 4, p: 1 }}>
        <Grid
          item
          sx={{
            width: "100%",
            height: "320px",
            mt: "4px",
            ml: "auto",
            mr: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "20px",
            p: 2,
          }}
          md={4}
        >
          <Link to={`/product/` + `${cartItem.id}`}>
            <img
              style={{ height: "250px", width: "100%" }}
              src={cartItem.image}
              alt={cartItem.title}
            />
          </Link>
        </Grid>
        <Grid item xs={10} md={7} sx={{ m: 4, color: "text.primary" }}>
          <Grid item>
            <Typography variant="h6"> {cartItem.title}</Typography>
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <Typography variant="h5">${cartItem.price}</Typography>
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
              id={cartItem.id.toString()}
              onClick={removeCart}
              variant="contained"
              style={{
                maxWidth: "30px",
                minWidth: "30px",
              }}
            >
              -
            </Button>
            <p>{cartItem.quantity}</p>
            <Button
              id={cartItem.id.toString()}
              onClick={addCart}
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
    <Grid container className="outline" sx={{ mt: 9, flex: 1 }}>
      <Grid item xs={12} className="breadcrumbs">
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
      <Grid item md={9} className="products">
        {CartProduct}
      </Grid>
      <Grid
        item
        md={3}
        className="cartTotalSection"
        sx={{
          display: "flex",
          height: "40px",
          paddingRight: "10px",
          paddingLeft: "10px",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        gap={2}
      >
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          총 : ${totalCost}
        </Typography>
        <PurchaseModal />
      </Grid>
    </Grid>
  );
}
