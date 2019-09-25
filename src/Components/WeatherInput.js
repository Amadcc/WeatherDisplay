import React from "react";
import { Formik, Field } from "formik";
import Form from "./styles/Form";

const initialValues = {
  city: ""
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
          {props.error && <p className="weather__error">{ props.error }</p> }
        </div>
        <button type="submit">Search</button>
      </fieldset>
    </Form>
  </Formik>
);

export default WeatherInput;
