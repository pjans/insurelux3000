import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import createPolicy from "../actions/createPolicy";
import { getPolicies, getIsLoading } from "../state/selectors";
import { Formik } from "formik";
import * as yup from "yup";

const AddPolicy = ({ createPolicy }) => {
  const schema = yup.object({
    modelId: yup.string().required(),
    periodStart: yup.string().required(),
    periodEnd: yup.string().required(),
    owners: yup.string().required(),
    kilometers: yup.string().required(),
  });

  const onSubmit = ({modelId, periodStart, periodEnd, owners, kilometers}) => {
    
    const params = {
      modelId,
      period: { start: periodStart, end: periodEnd },
      owners,
      kilometers
    };

    createPolicy(params);
  };

  return (
    <div className="add-policy">
      <h2>Add policy</h2>
      <Formik
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          values,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="periodStart">
                <Form.Label>Start</Form.Label>
                <Form.Control
                  placeholder="Period start"
                  onChange={handleChange}
                  value={values.periodStart}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="periodEnd">
                <Form.Label>End</Form.Label>
                <Form.Control
                  placeholder="Period end"
                  onChange={handleChange}
                  value={values.periodEnd}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="modelId">
                <Form.Label>Model Id</Form.Label>
                <Form.Control as="select" value={values.modelId} onChange={handleChange}>
                  <option>Choose...</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="owners">
                <Form.Label>Owners</Form.Label>
                <Form.Control value={values.owners} onChange={handleChange}/>
              </Form.Group>

              <Form.Group as={Col} controlId="kilometers">
                <Form.Label>Kilometers</Form.Label>
                <Form.Control value={values.kilometers} onChange={handleChange}/>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Add policy
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => ({
  policies: getPolicies(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = {
  createPolicy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPolicy);
