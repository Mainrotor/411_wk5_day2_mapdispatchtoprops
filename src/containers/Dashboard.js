import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import { removeCar } from "../redux/actions.js";
// import { removeCar } action here

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.cars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCar: (index) => dispatch(removeCar(index)),
  };
};

// add mapDispatchToProps function here

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
