import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../../sagas/weatherSagas';

import MapContainer from './MapContainer';
import Weather from './Weather';

import styles from './Home.styl';

const mapStateToProps = state => ({
  weather: state.weather,
  position: state.position,
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchWeather }, dispatch);

class Home extends Component {

  static propTypes = {
    weather: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <Weather weather={this.props.weather} />
        <div className={styles.map}>
          <MapContainer
            fetchWeather={this.props.fetchWeather}
            weather={this.props.weather}
            position={this.props.position}
          />
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
