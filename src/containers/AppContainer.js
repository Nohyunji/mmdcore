import App from "../App";
import { connect } from "react-redux";

const mapStateToProps = ({ App }) => {
  return {
    lan: App.lan,
  };
};

const AppContainer = connect(mapStateToProps, {})(App);

export default AppContainer;
