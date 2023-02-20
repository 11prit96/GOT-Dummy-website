import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

export async function getStaticPaths() {
  const res = await fetch("https://anapioficeandfire.com/api/houses");
  const data = await res.json();

  console.log(data)

  return {
    paths: data.map((item, index) => ({
      params: {
        id: (index + 1).toString()
      }
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://anapioficeandfire.com/api/houses/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      houses: data,
    },
  };
}

export default function SingleHouse({ houses }) {
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
        <Typography variant="h5" textAlign="center">{houses.name}</Typography>
        <Typography variant="subtitle2" textAlign="center">{houses.region}</Typography>
      </Card>
  );
}
