import React, { Component } from "react";
import WeatherInput from "./WeatherInput";

const KEY = "455137f97981800c10482bbc6539fba2";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      country: "",
      temperature: "",
      main: "",
      description: "",
      error: ""
    };
  }

  getWeatherInfo = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.value;
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country},uk&APPID=${KEY}`
    );
    const data = await api.json();
    if (data.name) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        main: data.weather[0].main,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: "",
        country: "",
        temperature: "",
        main: "",
        description: "",
        error: "Please enter existing city."
      });
    }
  };

  render() {
    const { city, country, temperature, main, description, error } = this.state;
    return (
      <WeatherInput
        getWeatherInfo={this.getWeatherInfo}
        city={city}
        country={country}
        temperature={temperature}
        main={main}
        description={description}
        error={error}
      />
    );
  }
}

export default Weather;
