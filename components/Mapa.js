import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const greatPlaceStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)'
}
const AnyReactComponent = ({ text }) => <div style={greatPlaceStyle} ><LocationOnIcon></LocationOnIcon></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -8.0692327,
      lng: -34.8876135
    },
    zoom: 15,
    text: 'Seu imovél aqui!'
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDl3HwEn9anA5uJIdXECcvK7HdDgZuOoP4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={this.props.text}

          />          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;