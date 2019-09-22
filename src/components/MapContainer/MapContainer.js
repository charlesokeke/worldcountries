import React,{Component} from "react"
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };
class MapContainer extends Component {

    render(){
        return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
        >
            <Marker position={{ lat: this.props.lat, lng: this.props.lng}} />
        </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDBUOAf-TRFXcQkDLaGk4kiQZ7ZJSyJzJc'
  })(MapContainer);