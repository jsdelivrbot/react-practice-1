import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidites = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    // const lat = cityData.city.coord.lat;
    return (
      <tr key={ name }>
        <td><GoogleMap lon={ lon } lat={ lat } /></td>
        <td><Chart data={ temps } color="orange" units="K" /></td>
        <td><Chart data={ pressure } color="green" units="hpa" /></td>
        <td><Chart data={ humidites } color="black" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>Temperture (K)</th>
            <th>Pressure (hpa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  // const weather = state.weather;
  // return { weather: state.weather };
  // { wheter: weather}
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
