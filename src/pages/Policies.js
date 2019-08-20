import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchPolicies from "../actions/fetchPolicies";
import { getPolicies, getIsLoading } from "../state/selectors";
import Policy from '../shared/Policy';
import { CardDeck, Spinner } from 'react-bootstrap';

const Policies = ({ fetchPolicies, policies, isLoading }) => {
   useEffect(() => {
      fetchPolicies(0, 100);
   }, [fetchPolicies]);

   return (
      <div className="policies">
         <h2>Policies</h2>
         {isLoading && <div className="loading"><Spinner animation="border" /></div>}
         <CardDeck className="d-flex justify-content-center">
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
