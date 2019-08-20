import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import DatePickerField from "../shared/DatePickerField";
import { Spinner, Col, Button, Form } from 'react-bootstrap';
import { fetchBrands, fetchModels, premiumCalculation, createPolicy } from "../actions";
import { getIsLoading, getBrands, getModels, getCalculationResult } from "../state/selectors";
import { addDays, validate } from '../utils';

const AddPolicy = ({ createPolicy, brands, fetchBrands, models, fetchModels, premiumCalculation, isLoading, calculationResult, history }) => {

   useEffect(() => {
      fetchBrands();
   }, [fetchBrands]);

   const onSubmit = values => {
      const model = models.find(x => x.name === values.model);
      if (values.calculate) {
         premiumCalculation({ ...values, modelId: model.id });
      } else {
         createPolicy({ ...values, modelId: model.id }, history.push);
      }
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
            initialValues={{ calculate: false }}
         >
            {({
               handleSubmit,
               handleChange,
               values,
               setFieldValue,
               errors,
               isValid
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
                        {errors.model && <small>{errors.model}</small>}
                     </Form.Group>
                     <Form.Group as={Col} controlId="model">
                        {models.length > 0 && (<>
                              <Form.Label>Model</Form.Label>
                              <Form.Control as="select" value={values.model} onChange={handleChange}>
                                 <option>Choose model...</option>
                                 {models.map(({ id, name }) => (
                                    <option key={id}>{name}</option>
                                 ))}
                              </Form.Control>
                           </>)}
                     </Form.Group>
                  </Form.Row>

                  <Form.Row>
                     <Form.Group as={Col} controlId="owners">
                        <Form.Label>Owners</Form.Label>
                        <Form.Control value={values.owners} onChange={handleChange} placeholder="How many owners?" />
                        {errors.owners && <small>{errors.owners}</small>}
                     </Form.Group>
                     <Form.Group as={Col} controlId="kilometers">
                        <Form.Label>Kilometers</Form.Label>
                        <Form.Control value={values.kilometers} onChange={handleChange} placeholder="What is the mileage?" />
                        {errors.kilometers && <small>{errors.kilometers}</small>}
                     </Form.Group>
                  </Form.Row>

                  <Form.Row>
                     <Col> <Form.Label>Start date</Form.Label> </Col>
                     <Col> <Form.Label>End date</Form.Label> </Col>
                  </Form.Row>

                  <Form.Row>
                     <Form.Group as={Col} >
                        <DatePickerField
                           name="periodStart"
                           value={values.periodStart}
                           onChange={setFieldValue}
                           placeholder="Period start"
                        />
                     </Form.Group>
                     <Form.Group as={Col}>
                        {values.periodStart &&
                              <DatePickerField
                                 name="periodEnd"
                                 value={values.periodEnd}
                                 onChange={setFieldValue}
                                 placeholder="Period end"
                                 minDate={addDays(values.periodStart, 120)}
                                 maxDate={addDays(values.periodStart, 720)}
                              />}
                     </Form.Group>
                  </Form.Row>

                  <Form.Row>
                     <Col>{errors.periodStart && <small>{errors.periodStart}</small>}</Col>
                     <Col>{errors.periodEnd && <small>{errors.periodEnd}</small>}</Col>
                  </Form.Row>

                  <Form.Row>
                     <Col >
                        {calculationResult && <h4>Calculation result: {calculationResult}</h4>}
                     </Col>
                     <Col>
                        {isLoading && <Spinner animation="grow" className="d-flex justify-content-center" />}
                        <Button
                           className="col-md-3 ml-1 float-right"
                           id="add-policy-button"
                           onClick={() => setFieldValue('calculate', false)}
                           variant="primary"
                           type="submit"
                           disabled={!isValid}
                        >
                              Add policy
                        </Button>
                        <Button
                           className="col-md-3 float-right"
                           id="calculate-policy-button"
                           onClick={() => setFieldValue('calculate', true)}
                           variant="secondary"
                           type="submit"
                           disabled={!isValid}
                        >
                              Calculate
                        </Button>
                     </Col>
                  </Form.Row>
               </Form>
            )}
         </Formik>
      </div>
   );
};

const mapStateToProps = state => ({
   brands: getBrands(state),
   models: getModels(state),
   isLoading: getIsLoading(state),
   calculationResult: getCalculationResult(state),
});

const mapDispatchToProps = {
   createPolicy,
   fetchBrands,
   fetchModels,
   premiumCalculation
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(AddPolicy);
