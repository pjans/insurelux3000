import React, {  useEffect } from "react";
import { connect } from "react-redux";
import fetchBrands from "../actions/fetchBrands";
import { getBrands } from "../state/selectors";

const Policies = ({ fetchBrands, brands }) => {
  
  useEffect(() => {
    fetchBrands();
  },[fetchBrands]);

  return (
    <>
      <h2>Policies</h2>
      <ul>
        {brands && brands.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  brands: getBrands(state)
});

const mapDispatchToProps = {
  fetchBrands
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Policies);
