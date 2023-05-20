import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const CardList = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      price: "300,000",
      img: "https://picsum.photos/200/300",
      category: "fashion",
    },
    {
      id: 2,
      title: "Card 2",
      price: "200,000",
      img: "https://picsum.photos/200/300",
      category: "fashion",
    },
    {
      id: 3,
      title: "Card 3",
      price: "100,000",
      img: "https://picsum.photos/200/300",
      category: "fashion",
    },
    {
      id: 4,
      title: "Card 4",
      price: "50,000",
      img: "https://picsum.photos/200/300",
      category: "fashion",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
      >
        패션
      </Grid>
      {cards.map(card => {
        return (
          <Grid item xs={6} sm={6} md={3} key={card.id}>
            <Card sx={{ maxWidth: 296 }}>
              <CardMedia
                sx={{ p: 3 }}
                component="img"
                src={card.img}
                alt={card.title}
              />
              <CardContent sx={{ backgroundColor: "#f3f4f6" }}>
                <Typography variant="h6">{card.title}</Typography>
                <br />
                <Typography>{card.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
