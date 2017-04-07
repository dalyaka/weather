import React, { Component, PropTypes } from 'react';

import styles from './WeatherInfo.styl';

function getCelsius(f) {
  const temp = Math.round(f - 273.15);
  return temp > 0 ? `+${temp} °C` : `${temp} °C`;
}

export default class WeatherInfo extends Component {

  static propsTypes = {
    weather: PropTypes.object.isRequired,
  }

  renderFormattedRow(title, fTemp) {
    return (
      <div className={styles.weatherItem}>
        <div className={styles.title}>{title}</div>
        <div className={styles.temp}>{getCelsius(fTemp)}</div>
      </div>
    );
  }


  render() {
    const { temp, weather, humidity } = this.props.weather;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {this.renderFormattedRow('Утро', temp.morn)}
          {this.renderFormattedRow('День', temp.day)}
          {this.renderFormattedRow('Ночь', temp.night)}

          <div className={styles.humidity}>
            <div className={styles.humidityTitle}>Влажность</div>
            <div>{humidity}%</div>
          </div>

          <div className={styles.description}>
            <img
              src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
              alt={weather[0].description}
              className={styles.icon}
            />
            <div>{weather[0].description}</div>
          </div>


        </div>
      </div>

    );
  }
}
