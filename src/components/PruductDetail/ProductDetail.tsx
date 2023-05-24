import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import cards from "../../assets/ProductsData.json";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";

export default function ProductDetail() {
  console.log(cards.products);
  return (
    <>
      <Grid container sx={{ mt: 9, flex: 1 }}>
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ ml: 4 }}>
            <Breadcrumbs
              separator={<NavigateNextRoundedIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Typography>{cards.products[0].category}</Typography>
              <Typography>{cards.products[0].title}</Typography>
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
            <Grid
              item
              sx={{
                mt: 2,
                flex: 1,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              nulla, enim voluptas nihil unde totam voluptate expedita natus
              dolore, maxime vitae dignissimos veritatis distinctio repudiandae
              consequatur facere cum perferendis iusto. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ad corrupti magni perspiciatis
              vero ea quo delectus autem placeat officiis, consequuntur
              repellendus repudiandae. Impedit, eveniet officia! Veritatis,
              natus? Unde, quo sequi.
            </Grid>
            <Grid
              container
              sx={{
                mt: 2,
              }}
            >
              <Rating
                defaultValue={cards.products[0].rating}
                precision={0.5}
                readOnly
              />
              <Grid item xs={6} sx={{ ml: 2 }}>
                {cards.products[0].rating} / {cards.products[0].reviewer} 참여
              </Grid>
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              {cards.products[0].price}
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <Button variant="contained">장바구니 담기</Button>
              <Link href="/cart">
                <Button variant="outlined" style={{ marginLeft: "10px" }}>
                  장바구니 이동
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
