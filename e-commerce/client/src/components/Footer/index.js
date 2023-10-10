import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      color="inherit"
      sx={{
        p: 1,
        mt: "auto",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "2rem",
        backgroundColor: "#292929",
        layer: 1,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="inherit" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://github.com/Justin-Connors">
            Justin Connors
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
