import AppContainer from "./containers/AppContainer";
import React from "react";
import thunk from "redux-thunk";
import reducers from "./store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import "./index.css";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
