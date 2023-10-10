import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const product = {
  name: "Product 1",
  description: "This is a description of product 1",
  price: 9.99,
  image: "https://picsum.photos/200/300",
};

const ProductCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.name}
          height="250px"
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {product.name}
          </Typography>
          <Typography variant="body2" color="inherit" component="p">
            {product.description}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            component="p"
            sx={{ textAlign: "left" }}
          >
            ${product.price}
            <Button color="inherit" sx={{ position: "absolute", right: 7 }}>
              Add to Card
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
