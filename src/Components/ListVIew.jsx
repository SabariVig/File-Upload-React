import React, { Component } from "react";
import axios from "axios";
import Lister from "./lister";
import { GooSpinner } from "react-spinners-kit";


export class FileList extends Component {
  state = {
    data: "",
    display: false
  };

   OpenLink = async lols => {
    window.location.href = process.env.REACT_APP_API_ID+"/uploads/" + lols;
  };

    

  async componentDidMount() 
   {
    const {data} = await axios.get(process.env.REACT_APP_API_ID+"list");
    // console.log(data);
    this.setState({ data });
    this.setState({ display: true });
    // console.log(this.state.data);

  };

  render() {
    return (
      <div>
        {/* <button onClick={this.getdata}>Get Data</button> */}
        <div   style={{marginLeft:"50%",marginTop:60,marginBottom:30}}><GooSpinner
      size={30}
      color="#128DFF"
      loading={!this.state.data} /></div>
        {this.state.display && <Lister data={this.state.data} variable="name" ic1Click={this.OpenLink}  ic2Click={{}}  ic1="file--v2" ic2="download" ic3="external-link" />}
      </div>
    );
  }
}

export default FileList;
