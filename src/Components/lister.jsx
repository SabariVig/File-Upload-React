import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const Lister = ({ data }) => {
  const display = data.data.name.map(lols => (

      <Link className="Link" to={lols} >
    <ListItem  style={{"marginLeft":"15%","width":"70%"}} button key={lols} className="list-font" >
      <ListItemIcon style={{"fontSize":"2.2em"}}>
      <i className="far fa-file-alt"></i>
      </ListItemIcon>
        <ListItemText style={{"fontSize":"1.8em"}} primary={lols} />
      <ListItemIcon >
      <i style={{"fontSize":"1em"}} class="fas fa-external-link-alt"></i>
      </ListItemIcon>
    </ListItem>
      </Link>
  
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
