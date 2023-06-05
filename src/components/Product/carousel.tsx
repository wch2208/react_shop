import Carousel from "react-material-ui-carousel";
import { Box } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const carouselImage = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2014/08/26/21/48/jeans-428613_960_720.jpg",
    alrText: "패션 카테고리",
    title: "Clothing",
    description: "이제 막 도착한 패션 청바지를 구입해보세요.",
    href: "/Clothing",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2017/08/06/17/13/diamond-2594307_960_720.jpg",
    alrText: "액세서리 카테고리",
    title: "Jewelery",
    description: "다양한 상품을 둘러보세요.",
    href: "/Jewelery",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2016/06/08/09/53/digital-storage-media-1443484_960_720.jpg",
    alrText: "디지털 카테고리",
    title: "Electronics",
    description: "여러 상품이 있습니다.",
    href: "/Electronics",
  },
];

const images = carouselImage.map(img => {
  return (
    <Paper key={img.id} sx={{ boxShadow: "none" }}>
      <img
        src={img.src}
        alt={img.alrText}
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: "178px",
          left: "58px",
          color: "white",
          fontSize: "20px",
        }}
      >
        {img.title}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "150px",
          left: "58px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {img.description}
      </Typography>
      <Button
        variant="contained"
        sx={{ position: "absolute", bottom: "100px", left: "58px" }}
        href={img.href}
      >
        바로가기
      </Button>
    </Paper>
  );
});

const CarouselSection: React.FC = () => {
  return (
    <Box>
      <Carousel autoPlay={true} animation="slide" indicators={true}>
        {images}
      </Carousel>
    </Box>
  );
};

export default CarouselSection;