import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import { useRecoilValue } from "recoil";
import { ProductsList } from "../../store/selectors/FetchApi";

const ProductDetail = () => {
  //상품리스트 가져오기
  const products = useRecoilValue(ProductsList);
  //클릭이벤트 감지, CartItems 상태에 업데이트 해야함
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as Element;
    if (target.id === "addToCartBtn") {
      console.log(target);
    }
  };
  //productId : 주소의 마지막 id에 해당하는 문자열 참조
  const pathArr = window.location.pathname.split("/");
  const productId: string = pathArr[pathArr.length - 1];

  //targetProduct : 아이디 일치하는 객체만 참조
  const targetProduct = products.filter(product => {
    if (`${product.id}` === productId) {
      return product;
    }
  });

  //targetProduct 랜더링하기

  return (
    <>
      <Grid container sx={{ mt: 9, flex: 1 }}>
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ ml: 4 }}>
            <Breadcrumbs
              separator={<NavigateNextRoundedIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Typography>Home</Typography>
              <Typography>{targetProduct[0].category}</Typography>
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
            xs={4}
          >
            <img
              style={{ width: "100%" }}
              src={targetProduct[0].image}
              alt={targetProduct[0].title}
            />
          </Grid>
          <Grid item xs={12} md={7} sx={{ m: 4 }}>
            <Grid item>{targetProduct[0].title}</Grid>
            <Grid
              item
              sx={{
                mt: 2,
                flex: 1,
              }}
            >
              {targetProduct[0].description}
            </Grid>
            <Grid
              container
              sx={{
                mt: 2,
              }}
            >
              <Grid item xs={12}>
                <Rating
                  defaultValue={targetProduct[0].rating.rate}
                  precision={0.1}
                  readOnly
                />
                <Typography>
                  {targetProduct[0].rating.rate}점{" / "}
                  {targetProduct[0].rating.count}명 참여
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <Typography variant="h5">${targetProduct[0].price}</Typography>
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleClick}
                id={"addToCartBtn"}
              >
                장바구니 담기
              </Button>
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
};

export default ProductDetail;
