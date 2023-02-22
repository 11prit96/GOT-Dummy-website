import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../styles/NavBar.module.css";
import { useRouter } from "next/router";
import LabelBottomNavigation from "./ButtonNavigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "black",
        opacity: "0.4",
        height: "4rem",
        width: "100%",
        zIndex: "10",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <LabelBottomNavigation />
      <Link href="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="h4"
          className={router.asPath === "/" ? styles.active : styles.nonActive}
        >
          GOT UI
        </Typography>
      </Link>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/books" style={{ textDecoration: "none" }}>
          <Typography
            className={
              router.asPath === "/books" ? styles.active : styles.nonActive
            }
            sx={{ marginRight: "2rem" }}
          >
            Books
          </Typography>
        </Link>
        <Link href="/houses" style={{ textDecoration: "none" }}>
          <Typography
            className={
              router.pathname === "/houses" ? styles.active : styles.nonActive
            }
            sx={{ marginRight: "2rem" }}
          >
            Houses
          </Typography>
        </Link>
        <Link href="/characters" style={{ textDecoration: "none" }}>
          <Typography
            className={
              router.asPath === "/characters" ? styles.active : styles.nonActive
            }
          >
            Characters
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
