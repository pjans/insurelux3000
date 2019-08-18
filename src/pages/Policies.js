import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchPolicies from "../actions/fetchPolicies";
import { getPolicies, getIsLoading } from "../state/selectors";
import Policy from '../shared/Policy';
import CardDeck from 'react-bootstrap/CardDeck';
import Spinner from 'react-bootstrap/Spinner';

const Policies = ({ fetchPolicies, policies, isLoading }) => {

  useEffect(() => {
    fetchPolicies(0, 10);
  }, [fetchPolicies]);

  return (
    <div>
      <h2>Policies</h2>
      {isLoading && <Spinner animation="border" />}
      <CardDeck>
        {policies && policies.map(item => (
          <Policy key={item.id} {...item} />
        ))}
      </CardDeck>
    </div>
  );
};

const mapStateToProps = state => ({
  policies: getPolicies(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = {
  fetchPolicies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Policies);
