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
    nextPageToken:null,
    cityDetail:[]
    
  }
  //https://still-coast-42220.herokuapp.com/cities
  componentDidMount() {
    var stop = setInterval(() =>{
      if(this.state.nextPageToken){
        console.log('hello')
        this.getMoreCities()
      }else{
        clearInterval(stop)
      }
    
    },5000)
    Axios.post("http://localhost:3001/cities",{cities:"cities in " + this.props.countryname})
    .then(response => {
      console.log(response.data.results)
      const cities = response.data.results.map((element,index) =>{
        return <Marker position={element.geometry.location}
                    title={element.formatted_address}
                    key={element.formatted_address} 
                    onClick={() => this.props.onMarkerClick(element.place_id)}
                />
      })
      this.setState({data:cities,nextPageToken:response.data.next_page_token})
    })
    .catch((error) => {
        console.log(error)
    })

  }

  getMoreCities = () =>{
    if(this.state.nextPageToken){
      Axios.post("http://localhost:3001/token",{nextPageToken:this.state.nextPageToken})
      .then(response =>{
        const cities = response.data.results.map((element,index) =>{
          return <Marker 
                    position={element.geometry.location}
                    title={element.formatted_address} key={element.formatted_address} 
                    onClick={() => this.props.onMarkerClick(element.place_id)} 
                  />
        })
        this.setState((state,props) => {
          return {data:[...state.data, ...cities],nextPageToken:response.data.next_page_token}
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  
    render(){
        return (
          
              <Map
                google={this.props.google}
                zoom={5}
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