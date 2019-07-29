import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


const Lister = ({ data,variable ,ic1Click,ic2Click,ic1,ic2,ic3}) => {
 





  const display = data[variable].map(lols => (
    <ListItem
    style={{width:"90%" ,marginLeft:"7%"}}
      button
      className="list-font"
      key={lols}
    >
      <ListItemIcon >
      <img alt="" src={ic1} height="25"/>
      </ListItemIcon>

      <ListItemText style={{ fontSize: "1em" }} primary={lols} />

      <div  className="Link" onClick={() => ic1Click(lols)} >
        <ListItemIcon>
        <img alt="" height="20" src={ic2}/>
        </ListItemIcon>
      </div>

    <div onClick={()=>ic2Click(lols)}>
        <ListItemIcon>
        <img alt="" height="20" src={ic3}/>
        </ListItemIcon>
    </div>


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
