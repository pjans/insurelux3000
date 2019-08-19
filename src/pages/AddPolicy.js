import React, { useEffect } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import createPolicy from "../actions/createPolicy";
import fetchBrands from "../actions/fetchBrands";
import { getIsLoading, getBrands } from "../state/selectors";
import DatePickerField from "../shared/DatePickerField";
import { Formik } from "formik";
import { addDays, validate } from '../utils';


const AddPolicy = ({ createPolicy, brands, fetchBrands, history: { push } }) => {

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  const onSubmit = values => {
    createPolicy(values, push);
  };

  return (
    <div className="add-policy">
      <h2>Add policy</h2>
      <Formik
        onSubmit={onSubmit}
        validate={validate}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          setFieldValue,
          errors,
          touched
        }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="periodStart">
                  <Form.Label>Start </Form.Label>
                  <DatePickerField
                    name="periodStart"
                    value={values.periodStart}
                    onChange={setFieldValue}
                    placeholder="Period start"
                  />
                </Form.Group>
                {values.periodStart && <Form.Group as={Col} controlId="periodEnd">
                  <Form.Label>End </Form.Label>
                  <DatePickerField
                    name="periodEnd"
                    value={values.periodEnd}
                    onChange={setFieldValue}
                    placeholder="Period end"
                    minDate={addDays(values.periodStart, 120)}
                    maxDate={addDays(values.periodStart, 720)}
                  />
                </Form.Group>}
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="modelId">
                  <Form.Label>Model Id</Form.Label>
                  <Form.Control as="select" value={values.modelId} onChange={handleChange}>
                    <option>Choose...</option>
                    {brands && brands.map(({ id, name }) => (
                      <option>{id} {name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="owners">
                  <Form.Label>Owners</Form.Label>
                  <Form.Control value={values.owners} onChange={handleChange} placeholder="How many owners?" />
                </Form.Group>

                <Form.Group as={Col} controlId="kilometers">
                  <Form.Label>Kilometers</Form.Label>
                  <Form.Control value={values.kilometers} onChange={handleChange} placeholder="What is the mileage?" />
                </Form.Group>
              </Form.Row>
              {errors.modelId && touched.modelId ? <div>{errors.modelId}</div> : null}
              {errors.periodStart && touched.periodStart ? <div>{errors.periodStart}</div> : null}
              {errors.periodEnd && touched.periodEnd ? <div>{errors.periodEnd}</div> : null}
              {errors.owners && touched.owners ? <div>{errors.owners}</div> : null}
              {errors.kilometers && <div>{errors.kilometers}</div>}
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
  brands: getBrands(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = {
  createPolicy,
  fetchBrands
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPolicy);
