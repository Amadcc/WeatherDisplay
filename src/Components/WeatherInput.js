import React from "react";
import { Formik, Field } from "formik";
import Form from "./styles/Form";

const initialValues = {
  city: "",
  country: ""
};

const WeatherInput = props => (
  <Formik initialValues={initialValues}>
    <Form onSubmit={props.getWeatherInfo}>
      <fieldset>
        <h1 className="title">Weather</h1>
        <div className="text">
          <label htmlFor="city">
            <Field name="city" placeholder="City" />
          </label>
          <label htmlFor="country">
            <Field name="country" placeholder="Country" />
          </label>
        </div>
        <div>
          {props.country && props.city && (
            <p>
              Location: {props.city}, {props.country}
            </p>
          )}
          {props.temperature && <p>Temperature: {props.temperature}</p>}
          {props.main && <p>Main: {props.main}</p>}
          {props.description && <p>Conditions: {props.description}</p>}
        </div>
        <button type="submit">Search</button>
      </fieldset>
    </Form>
  </Formik>
);

export default WeatherInput;
