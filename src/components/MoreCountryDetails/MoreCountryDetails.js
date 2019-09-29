import React,{PureComponent} from "react"
import CountryDetails from "../CountryDetails/CountryDetails"
import MapContainer from "../MapContainer/MapContainer"
import Axios from "axios"



class  MoreCountryDetails extends PureComponent {
    state ={
        cityDetailsPhotos:[],
        cityName:null
    }

    onMarkerClick = (cityDetails) =>{
        Axios.post("http://localhost:3001/city_details",{cityDetails:cityDetails})
        .then(response => {
          console.log(response.data.result)
          console.log(response.data.result.name)
          const cityPhotos = response.data.result.photos.map((element) => {
              return  <img 
                        key={element.photo_reference} 
                        src={ `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${element.photo_reference}&key=AIzaSyDBUOAf-TRFXcQkDLaGk4kiQZ7ZJSyJzJc`} 
                        className="card-img-top" 
                        alt="pic"
                        style={{display:"block",maxWidth:"230px", maxHeight:"95px",width:"auto",height:"auto"}}
                        width="300px"
                        height="200px" 
                       />
          })
            this.setState({cityDetailsPhotos:cityPhotos,cityName:response.data.result.name})
          
        })
        .catch(error => {
          console.log(error)
        })
    
      }

     parseData = (array) => {
        let languages = "";
        if(array.length){ 
        array.forEach(element => {
            languages += element.toString() + ","
        })
        return languages.replace(/,\s*$/, "");
        }else{
            return "None available"
        }
    }

    test =  () => {

    }

    parseObject=  (obj) => {
        let objectEntries = ''
       if(Object.values(obj).length){
            Object.entries(obj).forEach(element => {
                objectEntries += element[0] + ": " + + "" + element[1] + ", "
        })
        return objectEntries.replace(/,\s*$/, "");
       }else{
           return "None available"
       }
       
    }
    render () {
        console.log(this.state.cityDetailsPhotos)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 " style={{boxShadow:" 0px 2px 3px #ccc",paddingTop:"5px"}}>
                        <CountryDetails country={this.props.data } showCountryDetails={this.test}/>
                            <div style={{display:"flex",boxShadow:" 0px 2px 3px #ccc", position:"relative",boxSizing:"border-box", height:"100px",flexDirection:"row",backgroundColor:"#ccc",marginBottom:"3px", overflow:"auto",}}>
                                   {this.state.cityDetailsPhotos.length ? this.state.cityDetailsPhotos : <h6 className="text-muted pl-1">Click markers for city photos</h6>} 
                            </div>
                            <p className="text-center"> <strong>{this.state.cityName ? `The city of ${this.state.cityName}` : null}</strong></p>
                        
                    </div>
                    <div className="col-md-6" style={{boxShadow:" 0px 2px 3px #ccc",paddingTop:'10px'}}>
                        <p style={{boxShadow:"0px 2px 3px",padding:"20px"}}>
                            <small><strong>Calling Codes: </strong>{this.parseData(this.props.data.callingCodes)}</small><br />
                            <small><strong>Latlng: </strong>{this.parseData(this.props.data.latlng)}</small><br />
                            <small><strong>Timezone: </strong>{this.parseData(this.props.data.timezones)}</small><br />
                            <small><strong>Regionalblocs: </strong>{this.props.data.regionalBlocs.length ? 
                            Object.values(this.props.data.regionalBlocs[0]).join(", ").replace(/,\s*$/, "") : "None available"}</small><br />
                            <small><strong>Translations: </strong>{this.parseObject(this.props.data.translations)}</small><br />
                            <small><strong>Borders: </strong>{this.parseData(this.props.data.borders)}</small><br />
                            <small><strong>AltSpelling: </strong>{this.parseData(this.props.data.altSpellings)}</small><br />
                            <small><strong>Translations: </strong>{this.parseData(this.props.data.altSpellings)}</small><br />
                            <small><strong>TopLevelDomain: </strong>{this.parseData(this.props.data.topLevelDomain)}</small><br />
                            <small><strong>Area: </strong>{`${this.props.data.area}km`}</small>
    
    
    
                        </p>
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-2" style={{minHeight:"500px"}}>
                        <MapContainer 
                         lat={ this.props.data.latlng.length ?this. props.data.latlng[0] : 0}
                         lng={this.props.data.latlng.length ? this.props.data.latlng[1]: 0}
                         countryname={this.props.data.name}
                         onMarkerClick={this.onMarkerClick}
                         />
                    </div>
                </div>
        </div>
        )
    }
   
}
export default MoreCountryDetails