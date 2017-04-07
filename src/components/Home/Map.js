import React, { Component } from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapComp = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    {...props}
  >
    <Marker position={props.markerPosition} />
  </GoogleMap>
));

export default class Map extends Component {

  render() {
    return (
      <GoogleMapComp
        containerElement={
          <div style={{ height: '100%' }} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        onClick={this.props.onMapClick}
        onZoomChanged={this.props.onZoomChanged}
        defaultCenter={this.props.defaultCenter}
        markerPosition={this.props.position}
        center={this.props.centerPosition}
      />
    );
  }
}
