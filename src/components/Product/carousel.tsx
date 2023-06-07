import Carousel from "react-material-ui-carousel";
import { Box } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const carouselImage = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2014/08/26/21/48/jeans-428613_960_720.jpg",
    alrText: "패션 카테고리",
    title: "의류",
    description: "편안하고 세련된 디자인",
    href: "/Clothing",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2017/08/06/17/13/diamond-2594307_960_720.jpg",
    alrText: "액세서리 카테고리",
    title: "주얼리",
    description: "더욱 빛나는 특별한 순간",
    href: "/Jewelery",
  },
  {
    id: 3,
    src: "https://wrtn-image-user-output.s3.ap-northeast-2.amazonaws.com/645b8270b1b37ef6674e23e2/1686157349165.png",
    alrText: "디지털 카테고리",
    title: "디지털",
    description: "최고의 성능, 품질, 가치",
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
          bottom: "190px",
          left: "17px",
          color: "white",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        {img.title}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "150px",
          left: "18px",
          color: "white",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        {img.description}
      </Typography>
      <Link to={img.href}>
        <Button
          variant="contained"
          sx={{ position: "absolute", bottom: "100px", left: "18px" }}
        >
          바로가기
        </Button>
      </Link>
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
