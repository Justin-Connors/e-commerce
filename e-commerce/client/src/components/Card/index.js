import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
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
          height="140"
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="h6" color="text.primary" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
