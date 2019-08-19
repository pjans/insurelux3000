import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import createPolicy from "../actions/createPolicy";
import { fetchBrands, fetchModels } from "../actions";
import { getIsLoading, getBrands, getModels } from "../state/selectors";
import DatePickerField from "../shared/DatePickerField";
import { Formik } from "formik";
import { addDays, validate } from '../utils';


const AddPolicy = ({ createPolicy, brands, fetchBrands, models, fetchModels, history }) => {

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  const onSubmit = values => {
    const modelId = models.find(x => x.name === values.model).id;
    createPolicy({ ...values, modelId }, history.push);
  };

  const onBrandChange = ({ target: { value } }) => {
    if (value === "Choose brand...") return;
    const brand = brands.find(x => x.name === value);
    fetchModels(brand.id);
  }

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
          touched,
          isSubmitting
        }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="select" value={values.brand} onChange={onBrandChange}>
                    <option>Choose brand...</option>
                    {brands && brands.map(({ id, name }) => (
                      <option key={id}> {name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                {models.length > 0 &&
                  <Form.Group as={Col} controlId="model">
                     <Form.Label>Model</Form.Label>
                    <Form.Control as="select" value={values.model} onChange={handleChange}>
                      <option>Choose model...</option>
                      {models.map(({ id, name }) => (
                        <option key={id}>{name}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                }
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="owners">
                  <Form.Label>Owners</Form.Label>
                  <Form.Control value={values.owners} onChange={handleChange} placeholder="How many owners?" />
                </Form.Group>
                <Form.Group as={Col} controlId="kilometers">
                  <Form.Label>Kilometers</Form.Label>
                  <Form.Control value={values.kilometers} onChange={handleChange} placeholder="What is the mileage?" />
                </Form.Group>
              </Form.Row>

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
              {errors.model &&   <div>{errors.model}</div> }
              {errors.periodStart && touched.periodStart ? <div>{errors.periodStart}</div> : null}
              {errors.periodEnd && touched.periodEnd ? <div>{errors.periodEnd}</div> : null}
              {errors.owners && touched.owners ? <div>{errors.owners}</div> : null}
              {errors.kilometers && <div>{errors.kilometers}</div>}
              <Button variant="primary" type="submit" disabled={isSubmitting}>
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
  models: getModels(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = {
  createPolicy,
  fetchBrands,
  fetchModels
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPolicy);
