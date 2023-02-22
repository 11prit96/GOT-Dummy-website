import { Box, Card, Grid, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import Img4 from "../../public/assets/img_4.jpg";
import Image from "next/image";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const res = await fetch("https://anapioficeandfire.com/api/books");
      const data = await res.json();
      setBooks(data);
    }
    getBooks();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={Img4}
        style={{ position: "fixed", top: "0", right: "5" }}
        alt="books"
      />
      <Grid
        container
        spacing={8}
        sx={{
          my: "5rem",
          px: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "5",
        }}
      >
        {books.map((item, index) => (
          <Grid item xs="12" md="4" key={index}>
            <Link
              href={`/books/${index + 1}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  height: "8rem",
                  background: "whitesmoke",
                  transition: "all 1s linear",
                  "&:hover": {
                    background: "linear-gradient(to right, #4cb8c4, #dd5e89)",
                  },
                }}
              >
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="subtitle2">{item.country}</Typography>
                <Typography>{item.publisher}</Typography>
                <Typography>{item.released.slice(0, 10)}</Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
