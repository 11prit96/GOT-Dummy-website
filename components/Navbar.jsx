import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import theme from "@/src/theme";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "black",
        opacity: "0.4",
        height: "4rem",
        width: "100vw",
        zIndex: "10",
        position: "fixed",
        left:0,
        top: {md: 0},
        bottom: {xs: 0}
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Typography variant="h4" sx={{ color: "whitesmoke" }}>
          GOT UI
        </Typography>
      </Link>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/books" activeClassName="active" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "whitesmoke", marginRight: "2rem" }}>
            Books
          </Typography>
        </Link>
        <Link href="/houses" activeClassName="active" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "whitesmoke", marginRight: "2rem" }}>
            Houses
          </Typography>
        </Link>
        <Link href="/characters" activeClassName="active" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "whitesmoke" }}>Characters</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
