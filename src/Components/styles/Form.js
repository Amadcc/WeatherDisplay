import styled, { keyframes } from 'styled-components';
import { Form as Forme } from "formik";

const loading = keyframes`
  from {
    background-position: 0 0;
    rotate: 0;
  }

  to {
    background-position: 100% 100%;
    rotate: 360deg;
  }
`;

const Form = styled(Forme)`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: none;
  padding: 20px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  max-width:470px;
  width:100%;
  margin: 0 auto;
  label {
    display: block;
    margin-bottom: 2px;
  }
  input,
  textarea,
  select {
    width: 93%;
    padding: 0.8em 0.3em;
    font-size: 1rem;
    border: 1px solid #c0cad8;
    border-radius: 4px;
    &:focus {
      outline: 0;
      border-color: hsla(0, 96%, 82%, 1);
    }
  }
  button,
  input[type='submit'] {
    width: 95%;
    border-radius: 4px;
    background: #1ac6ff;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin-top: 5%;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  .title {
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-bottom: 10px !important; 
  }
  @media (min-width: 900px) {
    .text {
      display: inline-table;
      width: 100%;
      height: auto;
      label {
        display: inherit;
        width: 48%;
        vertical-align: top;
        &[for="countryName"] {
          margin-left: 1.1em;
        }
      }
    }
  }
`;

export default Form;