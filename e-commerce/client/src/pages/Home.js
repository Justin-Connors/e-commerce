import React from "react";
import { CssBaseline, Grid, Typography } from "@mui/material";
import ProductCard from "../components/Card";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <CssBaseline />
      <Typography variant="h4">Welcome to our E-commerce Website</Typography>
      <Grid container spacing={1}>
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
