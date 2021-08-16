import { connect } from "react-redux";
import Total from "../components/Total.js";

const mapStateToProps = (state) => {
  return {
    total: state.cars.length,
  };
};

export default connect(mapStateToProps)(Total);
