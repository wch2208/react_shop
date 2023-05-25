import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import cards from "../../assets/ProductsData.json";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Cart() {
  return (
    <>
      <Grid container sx={{ mt: 9, flex: 1 }}>
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ ml: 4 }}>
            <Breadcrumbs
              separator={<NavigateNextRoundedIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Typography>홈</Typography>
              <Typography>장바구니</Typography>
            </Breadcrumbs>
          </Stack>
        </Grid>
        <Grid container>
          <Grid
            item
            sx={{
              mt: 4,
              ml: "auto",
              mr: "auto",
            }}
          >
            <img src={cards.products[0].imgUrl} alt={cards.products[0].title} />
          </Grid>
          <Grid item xs={12} md={7} sx={{ m: 4 }}>
            <Grid item>{cards.products[0].title}</Grid>
            <Grid item sx={{ mt: 2 }}>
              {cards.products[0].price}
              <br />
              *개수에 따라 가격 변화
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <Button variant="contained">+- 버튼</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Typography>총: 200,000</Typography>
          <Button>구매하기</Button>
        </Grid>
      </Grid>
    </>
  );
}
