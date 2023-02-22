import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import FlagIcon from "@mui/icons-material/Flag";
import Link from "next/link";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        display: { xs: "flex", md: "none" },
        position: "fixed",
        bottom: "0",
        left: "0",
        right: 0,
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      value={value}
      onChange={handleChange}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      </Link>
      <Link href="/books" style={{ textDecoration: "none" }}>
        <BottomNavigationAction
          label="Books"
          value="books"
          icon={<LocalLibraryIcon />}
        />
      </Link>
      <Link href="/houses" style={{ textDecoration: "none" }}>
        <BottomNavigationAction
          label="Houses"
          value="houses"
          icon={<FlagIcon />}
        />
      </Link>
      <Link href="/characters" style={{ textDecoration: "none" }}>
        <BottomNavigationAction
          label="Characters"
          value="characters"
          icon={<SelfImprovementIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
