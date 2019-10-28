import React,{PureComponent} from "react"
import CountryDetails from "../CountryDetails/CountryDetails"
import MapContainer from "../MapContainer/MapContainer"
import Axios from "axios"



class  MoreCountryDetails extends PureComponent {
    state ={
        cityDetailsPhotos:[],
        cityName:null,
        allCityPhotos:[]
    }

    componentDidMount(){
        const {data} = this.props
        console.log(data)
       
    }

    onMarkerClick = (cityDetails) =>{
        Axios.post("https://still-coast-42220.herokuapp.com/city_details",{cityDetails:cityDetails})
        .then(response => {
          //console.log(response.data.result)
          //console.log(response.data.result.name)
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
          
            this.setState({cityDetailsPhotos:cityPhotos.length ?
                 cityPhotos : "No photos available",
                 cityName:response.data.result.formatted_address})
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
       
        const {data:{callingCodes,latlng,timezones,regionalBlocs, translations,borders,altSpellings,topLevelDomain,area, name}, data} = this.props
        const {cityDetailsPhotos,cityName} = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 " style={{boxShadow:" 0px 2px 3px #ccc",paddingTop:"5px"}}>
                        <CountryDetails country={data} showCountryDetails={this.test}/>
                            <div style={{display:"flex",boxShadow:" 0px 2px 3px #ccc", position:"relative",boxSizing:"border-box", height:"100px",flexDirection:"row",backgroundColor:"#ccc",marginBottom:"3px", overflow:"auto",}}>
                                   {cityDetailsPhotos.length ? cityDetailsPhotos : 
                                   <h6 className="text-muted pt-3" style={{margin:"0 auto",boxSizing:"border-box"}}>Click Map Markers</h6>
                                } 
                            </div>
                            <p className="text-center"> <strong>{cityName ? ` ${cityName}` : null}</strong></p>
                        
                    </div>
                    <div className="col-md-6" style={{boxShadow:" 0px 2px 3px #ccc",paddingTop:'10px'}}>
                        <p style={{boxShadow:"0px 2px 3px",padding:"20px"}}>
                            <small><strong>Calling Codes: </strong>{this.parseData(callingCodes)}</small><br />
                            <small><strong>Latlng: </strong>{this.parseData(latlng)}</small><br />
                            <small><strong>Timezone: </strong>{this.parseData(timezones)}</small><br />
                            <small><strong>Regionalblocs: </strong>{regionalBlocs.length ? Object.values(regionalBlocs[0]).join(", ").replace(/,\s*$/, "") : "None available"}</small><br />
                            <small><strong>Translations: </strong>{this.parseObject(translations)}</small><br />
                            <small><strong>Borders: </strong>{this.parseData(borders)}</small><br />
                            <small><strong>AltSpelling: </strong>{this.parseData(altSpellings)}</small><br />
                            <small><strong>Translations: </strong>{this.parseData(altSpellings)}</small><br />
                            <small><strong>TopLevelDomain: </strong>{this.parseData(topLevelDomain)}</small><br />
                            <small><strong>Area: </strong>{`${area}km`}</small>
    
                        </p>
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-2 pl-0" style={{minHeight:"500px",boxShadow:" 0px 2px 3px #ccc"}}>
                        <MapContainer 
                         lat={ latlng.length ? latlng[0] : 0}
                         lng={latlng.length ? latlng[1]: 0}
                         countryname={name}
                         onMarkerClick={this.onMarkerClick}
                         />
                    </div>
                </div>
        </div>
        )
    }
   
}
export default MoreCountryDetails