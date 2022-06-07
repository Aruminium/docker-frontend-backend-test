import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";

const ButtonAppBar = () => {
  const router = useRouter();
  const handler = (herf: string): void => {
    router.push(herf);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ flexGrow: 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">TEST</Typography>
          <Button color="inherit" onClick={() => handler("/")}>
            SignUp
          </Button>
          <Button color="inherit" onClick={() => handler("/search")}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
