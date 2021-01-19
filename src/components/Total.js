import React from "react";
import { connect } from "react-redux";
// import { newTotal } from "../actions/featureListActions";

const Total = (props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { additionalPrice, car } = state;

  return { car: car, additionalPrice: additionalPrice };
};
export default connect(mapStateToProps, null)(Total);
