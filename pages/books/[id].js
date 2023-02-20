import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingleBook() {
  const router = useRouter();
  const { id } = router.query;

  const [book, setBook] = useState({});

  useEffect(() => {
    async function getBook() {
      const res = await fetch(`https://anapioficeandfire.com/api/books/${id}`);
      const data = await res.json();
      setBook(data);
    }
    if (router.isReady) {
      getBook();
    }
  }, [id, router.isReady]);

  return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          background: "linear-gradient(to right, #4cb8c4, #dd5e89)",
          height: "20rem",
          width: "20rem",
          margin: "10rem auto"
        }}
      >
        <Typography variant="h5">{book.name}</Typography>
        <Typography variant="subtitle2">{book.country}</Typography>
        <Typography>{book.publisher}</Typography>
      </Card>
  );
}
