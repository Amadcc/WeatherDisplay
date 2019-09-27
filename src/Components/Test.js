import React, { Component } from "react";
import GetWeather from "./Components/GetWeather"
import styled from "styled-components";

class App extends Component {

  render() {
    return (
      <Wrapper>
        <GetWeather />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  text-align: center;
  nav ul li {
    display: inline-block;
    margin: 0.5em;
    a.active {
      font-weight: bold;
    }
  }
`;
