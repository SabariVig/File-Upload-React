import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import FileUpload from "./Components/Form";
import Header from "./Components/Header";
import FileList from "./Components/ListVIew";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div className="App">
    <Header />
    <FileUpload style={{ marginTop: 150 }} />
    <FileList />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
