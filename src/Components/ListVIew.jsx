import React, { Component } from "react";
import axios from "axios";
import Lister from "./lister";

export class FileList extends Component {
  state = {
    data: ""
  };

  getdata = async () => {
    const  data  = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(data)
    this.setState({ data });

     console.log(this.state.data)
  };

  render() {
    return (
      <div>
        <button onClick={this.getdata}>lol</button>
      </div>
    );
  }
}

export default FileList;
