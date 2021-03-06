import React from "react"
import styles from "./CountryDetails.module.css"
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const animationStyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}
const countryDetails = ({showCountryDetails,country:{flag,name, population,region,subregion,capital,languages,currencies},country}) => {

    function shortenName (name,num){
       if(name.length > num){
           return name.slice(0, num) + "..."
       }else{
           return name
       }

    }
    
    function getLanguages(array){
        let languages = "";
        array.forEach(element => {
            languages += element.name + ","
        })
        return languages.replace(/,\s*$/, "");
    }

    function getCurrency(array){
        let languages = "";
        array.forEach(element => {
            languages += `Name:${element.name || "None"}, Code:${element.code || "None"}, Symbol:${element.symbol || "None"}  `
        })
        return languages.replace(/,\s*$/, "");
    }

    return (
            <StyleRoot>
            <div className={`${styles.CardContainer} card mb-3`} onClick={() => showCountryDetails(country)} style={animationStyles.fadeIn}>
              <div className="row no-gutters">
                <div className="col-md-4" style={{borderRight:"1px solid #ccc"}}>
                  <img src={flag} className="card-img" alt="country-flag"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{shortenName(name,20)}</h5>
                    <p>
                        <small><strong>Population</strong>: {population}</small><br/>
                        <small><strong>Region</strong>: {region}</small><br/>
                        <small><strong>Sub-region</strong>: {subregion}</small><br/>
                        <small><strong>Capital</strong>: {capital}</small><br/>
                        <small><strong>Langugages</strong>: {getLanguages(languages)}</small><br/>
                        <small><strong>Currency</strong>: {shortenName(getCurrency(currencies),40)}</small>
                   </p>
                  </div>
                </div>
              </div>
            </div>  
          </StyleRoot>
    )
}

export default countryDetails;