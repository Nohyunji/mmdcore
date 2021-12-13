import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import MainContainer from "./containers/MainContainer";

import "./App.css";

const App = () => {
  return (
    <div id="App">
      <Header />
      <Route exact path="/" component={MainContainer} />
      <Footer />
    </div>
  );
};

export default App;
