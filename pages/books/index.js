import { Box, Card, Grid, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  console.log(books);
  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/img_4.jpg')",
        backgroundPosition: "top right",
        // backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={8} sx={{my: "5rem", px: "5rem"}}>
        {books.map((item, index) => (
          <Grid item xs="12" md="6" key={index}>
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
                  background: "linear-gradient(to right, #4cb8c4, #dd5e89)",
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
