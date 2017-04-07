import React, { Component, PropTypes } from 'react';

import cn from 'classnames';

import WeatherInfo from './WeatherInfo';
import Chart from './Chart';

import styles from './Weather.styl';

const filters = [
  'Сегодня',
  'Завтра',
  'Неделя',
];


export default class Weather extends Component {

  static propsTypes = {
    weather: PropTypes.object.isRequired,
  }

  state = {
    currentFilter: filters[0],
  }

  getPopulation(population) {
    return population > 0 ? `, ${population} человек` : '';
  }


  renderFilters(currentFilter) {
    return filters.map(filter =>
      <div
        className={cn(styles.filter, { [styles.active]: filter === currentFilter })}
        onClick={() => this.setState({ currentFilter: filter })}
        key={filter}
      >
        {filter}
      </div>
    );
  }

  render() {
    if (!this.props.weather.info) {
      return null;
    }

    const { currentFilter } = this.state;

    const { weather } = this.props;

    const weatherInfo = currentFilter === filters[0] ? weather.info.list[0] :
      (currentFilter === filters[1] ? weather.info.list[1] : weather.info.list);

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {this.renderFilters(currentFilter)}
        </div>
        <div className={styles.cityName}>
          <div>{weather.info.city.name}{this.getPopulation(weather.info.city.population)}</div>
        </div>
        {currentFilter !== filters[2] && <WeatherInfo weather={weatherInfo} />}
        {currentFilter === filters[2] && weather.info &&
          // !weather.loading &&
          <div className={styles.chartContainer}>
            <Chart weather={weather.info.list} />
          </div>
        }
      </div>

    );
  }
}
