import { Box, Card, Grid, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Characters() {
  const [GOTcharacters, setGOTCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch("https://anapioficeandfire.com/api/characters");
      const data = await res.json();
      setGOTCharacters(data);
    }
    getCharacters();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/img_6.jpg')",
        backgroundPosition: "bottom left",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={8} sx={{my: "5rem", px: "5rem"}}>
        {GOTcharacters.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.url}>
            <Link
              href={`/characters/${index + 1}`}
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
                <Typography variant="h5">{item.aliases}</Typography>
                <Typography variant="subtitle2">{item.name}</Typography>
                <Typography>{item.culture}</Typography>
                <Typography>{item.gender}</Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
