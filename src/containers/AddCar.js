import { connect } from "react-redux";
import AddCar from "../components/AddCar.js";
import { addCar } from "../redux/actions.js";

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
  };
};

export default connect(null, mapDispatchToProps)(AddCar);
