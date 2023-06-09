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
// import bgVideo from "../images/BGVideo.mp4";
import "./header.css";

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
    <div className="App">
      <AppBar position="static" sx={{ height: "100px" }}>
        <Toolbar sx={{ backgroundColor: "#6082B6", height: "100%" }}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black", fontSize: "24px", fontWeight: "bold"}}
          >
            Portfolio
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
            sx={{ ml: 1, cursor: "pointer", color: "black", fontSize: "18px", fontWeight: "bold"}}
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
                sx={{ 
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100px",
                    height: "100px",
                    align: "center" 
                   }}
              />
              <Typography variant="body1">Pavan Sai Chennam</Typography>
              <Typography variant="body1">MSSE Grad at SJSU</Typography>
              <Typography variant="body2"><a href="mailto: pavansai.chennam@sjsu.edu" target="_blank" rel="noopener noreferrer">pavansai.chennam@sjsu.edu</a>
</Typography>
              <Typography variant="body2"><a href="mailto: pchennam1998@gmail.com" target="_blank" rel="noopener noreferrer">pchennam1998@gmail.com</a>
</Typography>
              <Typography variant="body2"><a href="https://www.github.com/pchennam1998" target="_blank" rel="noopener noreferrer">Link to Github account</a>
</Typography>
              <Typography variant="body2"><a href="https://www.linkedin.com/in/pavan-sai-c-223b15148/" target="_blank" rel="noopener noreferrer">Link to LinkedIn</a>
</Typography>
              {/* Add other details and links as needed */}
            </div>
          </Popover>
        {/* <video className="video-background" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
