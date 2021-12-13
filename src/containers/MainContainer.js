import Main from "../components/Main";
import { connect } from "react-redux";

const mapStateToProps = ({ App }) => {
  return {
    lan: App.lan,
  };
};

const MainContainer = connect(mapStateToProps, {})(Main);

export default MainContainer;
