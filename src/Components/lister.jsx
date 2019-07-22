import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const Lister = ({ data }) => {
  const OpenLink = async lols => {
    window.location.href = "https://83g8t.sse.codesandbox.io/uploads/" + lols;
  };

  const display = data.data.name.map(lols => (
    <ListItem
      style={{ marginLeft: "15%", width: "70%" }}
      button
      className="list-font"
      key={lols}
    >
      <ListItemIcon style={{ fontSize: "2.2em" }}>
      <span class="jam jam-file"></span>
      </ListItemIcon>

      <ListItemText style={{ fontSize: "1em" }} primary={lols} />

      <Link className="Link" onClick={() => OpenLink(lols)} to="/">
        <ListItemIcon>
        <span style={{fontSize:"2em"}} className="jam jam-download"></span>
        </ListItemIcon>
      </Link>
    </ListItem>
  ));
  return (
    <div>
      <List component="nav" aria-label="Main mailbox folders">
        {display}
      </List>
    </div>
  );
};
export default Lister;
