import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// import the profile photo from the images folder
import profilePhoto from "../images/avatar.png";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

  return (
    <AppBar position="static">
      <Toolbar color="green">
        {/* Inside the IconButton, we can render various icons */}
        <IconButton
          size="large"
          edge="start"
          color="green"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* This is a simple Menu Icon wrapped in Icon */}
          <MenuIcon />
        </IconButton>
        {/* The Typography component applies default font weights and sizes */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Profile Header
        </Typography>
        {/* Add your profile photo and other details here */}
        <Avatar
          alt="Pavan Sai Chennam"
          src={profilePhoto}
          sx={{ ml: 2 }}
          onClick={handleClick}
        />
        {/* Add other details, such as your name */}
        <Typography
          variant="body1"
          sx={{ ml: 1, cursor: "pointer" }}
          onClick={handleClick}
        >
          Pavan Sai Chennam
        </Typography>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div style={{ padding: "16px" }}>
            <Avatar
              alt="Pavan Sai Chennam"
              src={profilePhoto}
              sx={{ marginRight: "16px" }}
            />
            <Typography variant="body1">Pavan Sai Chennam</Typography>
            <Typography variant="body2">University mail: pavansai.chennam@sjsu.edu</Typography>
            <Typography variant="body2">Personal mail: pchennam1998@gmail.com</Typography>
            <Typography variant="body2">Links: https:</Typography>
            {/* Add other details and links as needed */}
          </div>
        </Popover>
      </Toolbar>
    </AppBar>
  );
}
