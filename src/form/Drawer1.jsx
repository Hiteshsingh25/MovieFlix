import React, { useState } from "react";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import "./Form.css";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import MovieIcon from "@mui/icons-material/Movie";

export default function Drawer1() {
  const [state1, setState1] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open1) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    console.log({ [anchor]: open1 });
    setState1({ ...state1, [anchor]: open1 });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "black",
        height:"100%"
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="drawer" sx={{
        backgroundColor:"black",
       
      }} >
        {["Inbox", "Starred", "Send email", "Drafts"].map((item, index) => (
          <ListItem className="listitem" key={item} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <MailIcon color="primary" />
                ) : (
                  <SendIcon color="primary" />
                )}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="drawer">
        {["All mail", "Trash", "Spam"].map((item, index) => (
          <ListItem className="listitem" key={item} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <MailIcon color="primary" />
                ) : (
                  <SendIcon color="primary" />
                )}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ fontSize: "30px", marginTop: "11px" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MovieIcon size={50} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state1[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
