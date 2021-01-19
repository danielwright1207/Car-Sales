import React from "react";
import { connect } from "react-redux";
// this is where were adding new features
import { addNewFeature } from "../actions/featureListActions";
const AdditionalFeature = (props) => {
  // console.log(props);
  const { name, id, price, addNewFeature } = props;
  const handleAdd = () => {
    addNewFeature({ name, id, price });
  };
  return (
    <li>
      {/* {this.props.AdditionalFeature.map((feature, index) => (
        <h4 key={index} onClick={() => this.props.addNewFeature(feature)}></h4>
      ))} */}
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAdd}>
        Add
      </button>
      {name} (+{price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return { car: state.car };
};
export default connect(mapStateToProps, { addNewFeature })(AdditionalFeature);
