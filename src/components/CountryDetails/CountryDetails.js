import React from "react"
import styles from "./CountryDetails.module.css"


const countryDetails = ({showCountryDetails,country:{flag,name, population,region,subregion,capital,languages,currencies},country}) => {
    
    function shortenName (name){
       if(name.length > 25){
           return name.slice(0, 20) + "..."
       }else{
           return name
       }

    }
    function shortenCurrencyName (name){
      if(name.length > 40){
          return name.slice(0, 40) + "..."
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
            <div className={`${styles.CardContainer} card mb-3`} onClick={() => showCountryDetails(country)} >
              <div className="row no-gutters">
                <div className="col-md-4" style={{borderRight:"1px solid #ccc"}}>
                  <img src={flag} className="card-img" alt="country-flag"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{shortenName(name)}</h5>
                    <p>
                        <small><strong>Population</strong>: {population}</small><br/>
                        <small><strong>Region</strong>: {region}</small><br/>
                        <small><strong>Sub-region</strong>: {subregion}</small><br/>
                        <small><strong>Capital</strong>: {capital}</small><br/>
                        <small><strong>Langugages</strong>: {getLanguages(languages)}</small><br/>
                        <small><strong>Currency</strong>: {shortenCurrencyName(getCurrency(currencies))}</small>


                  </p>
                  </div>
                </div>
              </div>
            </div>  
    )
}

export default countryDetails;