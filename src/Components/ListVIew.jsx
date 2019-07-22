import React, { Component } from "react";
import axios from "axios";
import Lister from "./lister";

export class FileList extends Component {
  state = {
    data: "",
    display: false
  };

  getdata = async () => {
    const data = await axios.get("https://83g8t.sse.codesandbox.io/list");
    // console.log(data);
    this.setState({ data });
    this.setState({ display: true });
    // console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <button onClick={this.getdata}>Get Data</button>

        {this.state.display && <Lister data={this.state.data} />}
      </div>
    );
  }
}

export default FileList;
