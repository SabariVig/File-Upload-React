import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


const Lister = ({ data,variable ,ic1Click,ic2Click,ic1,ic2,ic3}) => {
 
const li1=`https://img.icons8.com/material-rounded/20/000000/${ic1}.png`
const li2=`https://img.icons8.com/material-rounded/20/000000/${ic2}.png`
const li3=`https://img.icons8.com/material-rounded/20/000000/${ic3}.png`



  const display = data[variable].map(lols => (
    <ListItem
    style={{width:"90%" ,marginLeft:"7%"}}
      button
      className="list-font"
      key={lols}
    >
      <ListItemIcon >
      <img alt="" src={li1}/>
      </ListItemIcon>

      <ListItemText style={{ fontSize: "1em" }} primary={lols} />

      <div  className="Link" onClick={() => ic1Click(lols)} >
        <ListItemIcon>
        <img alt="" src={li2}/>
        </ListItemIcon>
      </div>

    <div onClick={()=>ic2Click(lols)}>
        <ListItemIcon>
        <img alt="" src={li3}/>
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
