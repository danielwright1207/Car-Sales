import React from "react";
import { connect } from "react-redux";
// import { connect } from "react-redux";
///this where we will remove a feature
import { removeNewFeature } from "../actions/featureListActions";

const AddedFeature = (props) => {
  const handleRemove = () => {
    props.removeNewFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemove}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     car: state.car,
//   };
// };
export default connect(null, { removeNewFeature })(AddedFeature);
