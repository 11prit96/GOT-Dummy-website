import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://anapioficeandfire.com/api/characters/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
  };
}

export default function SingleCharacter({ characters }) {
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
        <Typography variant="h5">{characters.aliases}</Typography>
        <Typography variant="subtitle2">{characters.culture}</Typography>
        <Typography>{characters.name}</Typography>
        <Typography>{characters.gender}</Typography>
      </Card>
  );
}
