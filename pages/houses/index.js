import { Box, Card, Grid, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Houses() {
  const [GOThouses, setGOTHouses] = useState([]);

  useEffect(() => {
    async function getHouses() {
      const res = await fetch("https://anapioficeandfire.com/api/houses");
      const data = await res.json();
      console.log("data", data);
      setGOTHouses(data);
    }
    getHouses();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/img_9.jpg')",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={8} sx={{ my: "5rem", px: "5rem" }}>
        {GOThouses.map((item, index) => (
          <Grid item xs="12" sm="6" md="4" key={item.url}>
            <Link
              href={`/houses/${index + 1}`}
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
                <Typography variant="subtitle2">{item.region}</Typography>
                <Typography sx={{ textAlign: "center" }}>
                  {item.coatOfArms}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
