import React, { Component, PropTypes } from 'react';

import { defaultCenter } from '../../reducers/positionReducer';
import { geolocation } from '../../utils/geolocation';

import Map from './Map';


export default class MapContainer extends Component {

  static propTypes = {
    weather: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired,
  }

  state = {
    isZooming: false,
    centerPosition: defaultCenter,
  }

  componentDidMount() {
    if (this.props.weather && !this.props.weather.info) {
      this.props.fetchWeather(this.props.position);
    }

    geolocation()
      .then(this.succes)
      .catch(this.error);
  }

  onMapClick = (evt) => {
    // setTimeout to distinguish zoom and click
    // there is no need to change position on zoom
    setTimeout(() => {
      if (!this.state.isZooming) {
        const position = {
          lat: evt.latLng.lat(),
          lng: evt.latLng.lng()
        };
        this.props.fetchWeather(position);
      }
    }, 250);
  }

  onZoomChanged = () => {
    // setTimeout to distinguish zoom and click
    // there is no need to change position on zoom
    this.setState({
      isZooming: true
    }, () => setTimeout(() => this.setState({ isZooming: false }), 500));
  }


  succes = (val) => {
    const position = {
      lat: val.coords.latitude,
      lng: val.coords.longitude
    };

    this.props.fetchWeather(position);
    this.setState({ centerPosition: position });
  }

  error = () => {
    this.setState({
      centerPosition: this.props.position,
    });
  }

  render() {
    return (
      <Map
        onMapClick={this.onMapClick}
        onZoomChanged={this.onZoomChanged}
        defaultCenter={this.props.position}
        position={this.props.position}
        centerPosition={this.state.centerPosition}
      />
    );
  }
}
