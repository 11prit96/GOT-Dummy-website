import { Box, Container, Toolbar } from "@mui/material";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
