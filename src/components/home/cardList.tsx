import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import cards from "../../assets/ProductsData.json";

const CardList = () => {
  // const cards = [
  //   {
  //     id: 1,
  //     title: "Card 1",
  //     price: "300,000",
  //     img: "https://picsum.photos/200/300",
  //     category: "fashion",
  //   },
  //   {
  //     id: 2,
  //     title: "Card 2",
  //     price: "200,000",
  //     img: "https://picsum.photos/200/300",
  //     category: "fashion",
  //   },
  //   {
  //     id: 3,
  //     title: "Card 3",
  //     price: "100,000",
  //     img: "https://picsum.photos/200/300",
  //     category: "fashion",
  //   },
  //   {
  //     id: 4,
  //     title: "Card 4",
  //     price: "50,000",
  //     img: "https://picsum.photos/200/300",
  //     category: "fashion",
  //   },
  // ];

  //https://fakestoreapi.com/products api를 가져오는 함수
  // const fetchData = async () => {
  //   await fetch("https://fakestoreapi.com/products")
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // };
  // fetchData();

  // const [cards, setCards] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("../../assets/ProductsData.json");

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Failed to fetch the product data", error);
  //   }
  // };

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch the product data", error);
    }
  };

  fetchData();

  return (
    <Grid container sx={{ mt: 7 }}>
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
        패션
      </Grid>
      {cards.products.map(card => {
        return (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <Card sx={{ m: 1 }}>
              <CardMedia component="img" src={card.imgUrl} alt={card.title} />
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
