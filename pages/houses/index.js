import { Box, Card, Grid, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import Img9 from "../../public/assets/img_9.jpg";
import Image from "next/image";

export default function Houses() {
  const [GOThouses, setGOTHouses] = useState([]);

  useEffect(() => {
    async function getHouses() {
      const res = await fetch("https://anapioficeandfire.com/api/houses");
      const data = await res.json();
      setGOTHouses(data);
    }
    getHouses();
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
      <Image src={Img9} alt="houses" style={{ position: "fixed", top: "0" }} />
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
        {GOThouses.map((item, index) => (
          <Grid item xs="12" sm="6" key={item.url}>
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
                  minHeight: "8.5rem",
                  padding: "1rem",
                  background: "whitesmoke",
                  transition: "all 1s linear",
                  "&:hover": {
                    background: "linear-gradient(to right, #4cb8c4, #dd5e89)",
                  },
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
