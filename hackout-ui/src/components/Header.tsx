import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [finderOpen, setFinderOpen] = useState(false);
  const handleFinderOpen = () => setFinderOpen(true);
  const handleFinderClose = () => setFinderOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleFavouritePopup = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const FavoritesOpen = Boolean(anchorEl);
  const id = finderOpen ? "simple-popper" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={12} color="transparent">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: {
              lg: "2rem",
              sm: "0rem",
            },
            marginRight: {
              lg: "2rem",
              sm: "0rem",
            },
          }}
        >
          <Box sx={{ flexDirection: "row", cursor: "pointer" }}>
            <Typography
              variant="h4"
              noWrap
              component="div"
              color={"primary"}
              sx={{ flexGrow: 1, display: "inline" }}
            >
              Elon
            </Typography>
            <Typography
              variant="h6"
              color={"secondary"}
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: "inline" }}
            >
              Musk
            </Typography>
          </Box>
          <Box sx={{ flexDirection: "row" }}>
            <IconButton
              onClick={handleFinderOpen}
              component={motion.button}
              whileTap={{ scale: 0.7 }}
              color="secondary"
            >
              <AddAPhotoIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={toggleFavouritePopup}
              aria-describedby={id}
              component={motion.button}
              whileTap={{ scale: 0.7 }}
            >
              <CollectionsIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={toggleFavouritePopup}
              aria-describedby={id}
              component={motion.button}
              whileTap={{ scale: 0.7 }}
            >
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider />
    </Box>
  );
};

export default Header;
