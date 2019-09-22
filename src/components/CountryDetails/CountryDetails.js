import React from "react"
import styles from "./CountryDetails.module.css"


const countryDetails = (props) => {
    
    function shortenName (name){
       if(name.length > 25){
           return name.slice(0, 20) + "..."
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
            languages += `Name:${element.name}, Code:${element.code}, Symbol:${element.symbol}  `
        })
        return languages.replace(/,\s*$/, "");
    }

    return (
            <div className={`${styles.CardContainer} card mb-3`} onClick={() => props.showCountryDetails(props.country)} >
              <div className="row no-gutters">
                <div className="col-md-4" style={{borderRight:"1px solid #ccc"}}>
                  <img src={props.country.flag} className="card-img" alt="country-flag"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{shortenName(props.country.name)}</h5>
                    <p>
                        <small><strong>Population</strong>: {props.country.population}</small><br/>
                        <small><strong>Region</strong>: {props.country.region}</small><br/>
                        <small><strong>Sub-region</strong>: {props.country.subregion}</small><br/>
                        <small><strong>Capital</strong>: {props.country.capital}</small><br/>
                        <small><strong>Langugages</strong>: {getLanguages(props.country.languages)}</small><br/>
                        <small><strong>Currency</strong>: {props.country.currencies[0].name}</small>


                  </p>
                  </div>
                </div>
              </div>
            </div>  
    )
}

export default countryDetails;