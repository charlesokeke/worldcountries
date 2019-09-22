import React from "react"
import CountryDetails from "../CountryDetails/CountryDetails"
import MapContainer from "../MapContainer/MapContainer"



const moreCountryDetails = (props) => {

    function parseData (array){
        let languages = "";
        if(array.length){ 
        array.forEach(element => {
            languages += element.toString() + ","
        })
        return languages.replace(/,\s*$/, "");
        }else{
            return null
        }
    }

    function test () {

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 " style={{boxShadow:" 0px 2px 3px #ccc"}}>
                    <CountryDetails country={props.data } showCountryDetails={test}/>
                </div>
                <div className="col-md-6" style={{boxShadow:" 0px 2px 3px #ccc",paddingTop:'10px'}}>
                    <p style={{boxShadow:"0px 2px 3px",padding:"20px"}}>
                        <small><strong>Calling Codes: </strong>{parseData(props.data.callingCodes)}</small><br />
                        <small><strong>Latlng: </strong>{parseData(props.data.latlng)}</small><br />
                        <small><strong>Timezone: </strong>{parseData(props.data.timezones)}</small><br />
                        <small><strong>Regionalblocs: </strong></small><br />
                        <small><strong>Translations: </strong></small><br />
                        <small><strong>Borders: </strong>{parseData(props.data.borders)}</small><br />
                        <small><strong>AltSpelling: </strong>{parseData(props.data.altSpellings)}</small><br />
                        <small><strong>Translations: </strong>{parseData(props.data.altSpellings)}</small><br />
                        <small><strong>TopLevelDomain: </strong>{parseData(props.data.topLevelDomain)}</small><br />
                        <small><strong>Area: </strong>{`${props.data.area}km`}</small>



                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-2 pl-2 pr-2" style={{minHeight:"500px"}}>
                    <MapContainer lat={ props.data.latlng.length ? props.data.latlng[0] : 0} lng={props.data.latlng.length ? props.data.latlng[1]: 0}/>
                </div>
            </div>
    </div>
    )
}
export default moreCountryDetails