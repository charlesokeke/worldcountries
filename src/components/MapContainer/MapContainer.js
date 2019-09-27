import React,{Component} from "react"
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import Axios from "axios"

const mapStyles = {
    width: '100%',
    height: '100%',
    
  };
class MapContainer extends Component {
  state ={
    data:[],
    
  }
  //https://still-coast-42220.herokuapp.com/cities
  componentDidMount() {
    Axios.post("https://still-coast-42220.herokuapp.com/cities",{cities:"cities in " + this.props.countryname})
    .then(response => {
      console.log(response.data.results)
      const cities = response.data.results.map((element,index) =>{
        return <Marker position={element.geometry.location} title={element.formatted_address} key={index}/>
      })
      this.setState({data:cities})
    })
    .catch((error) => {
        console.log(error)
    })

  }

    render(){
      console.log(this.state.data)
        return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
        >
            
            {this.state.data}
        </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDBUOAf-TRFXcQkDLaGk4kiQZ7ZJSyJzJc'
  })(MapContainer);