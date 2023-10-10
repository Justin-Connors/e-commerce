import React from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../components/Card";

const Home = () => {
  return (
    <div>
      <Typography variant="h4">Welcome to our E-commerce Website</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <ProductCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <ProductCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div>
            <ProductCard />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
