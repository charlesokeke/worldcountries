import React,{PureComponent} from "react"
import Axios from "axios"
import CountryDetails from "../../components/CountryDetails/CountryDetails"
import MoreCountryDetail from "../../components/MoreCountryDetails/MoreCountryDetails"
import styles from "./CountryContainer.module.css"



class CountryContainer extends PureComponent {
    state = {
        countries:[],
        value:'',
        countryResult:[],
        countryDetails: null,
        numberOfCountries:null,
        countryRegion: null
    } 
    componentDidMount (){
        Axios.get("https://restcountries.eu/rest/v2/all").then(response => {
            this.setState({countries:response.data})
        })
    }
    componentDidUpdate() {
        window.scrollTo(0, 0)
      }

    inputHandler = (event) => {
            const countrySearchResult = this.state.countries.filter(country => {
                return country.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        .map((element,index) => {
            return <CountryDetails key={index} country={element} showCountryDetails= {this.getCountryDetails}/>
        })
        this.setState({
            countryResult:countrySearchResult,
             countryDetails:null,
             value:event.target.value,
             numberOfCountries:null
            })
    }

   

    clearInput = () => {
        this.setState({value: ''})
    }
    getCountryDetails = (data) => {
        this.setState({
            countryDetails:data,numberOfCountries:null
        })
        console.log(data)
    }
    
    continentCountriesHandler = (regions) => {
        let countryName = null
        const showCountriesInContinent = this.state.countries.filter((country) =>{
            return regions.includes(country.region.toLowerCase())  || regions.includes(country.subregion.toLowerCase())
            
        })
        .map((element,index) => {
            countryName = element.region
             return <CountryDetails 
                        key={index} 
                        country={element} 
                        showCountryDetails={this.getCountryDetails}
                    />
        })
        this.setState({
            countryResult:showCountriesInContinent,
             countryDetails:null,
              numberOfCountries:showCountriesInContinent.length,
               countryRegion:countryName
            })
            
    }

   
    render () {
        //console.log(this.state.numberOfCountries)
        const {numberOfCountries, value, countryDetails, countryResult} = this.state
        
        return (
            <div style={{paddingTop:"100px", position:"relative",boxSizing:"border-box"}}>
                {numberOfCountries ? 
                <span style={{position:"absolute", color:"purple",padding:"8px",fontWeight:"500",top:"10px", right:"20px",border:"2px solid #ccc"}}>Total Countries in {this.state.countryRegion}: {this.state.numberOfCountries}</span>:
                 null
                 }
                <main style={{display:"flex",justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingBottom:"10px",position:"relative"}} >
                        
                      <ul className={`list-group list-group-horizontal-lg ${styles.CountryRegions}`} >
                        <li className="list-group-item " onClick={() => this.continentCountriesHandler( ["asia","western asia","south-eastern asia","northern asia", "southern asia","central asia","eastern asia"])}>Asia</li>
                        <li className="list-group-item" onClick={() => this.continentCountriesHandler( ["europe","western europe","northern europe", "southern europe","central europe","eastern europe","western europe"])}>Europe</li>
                        <li className="list-group-item" onClick={() => this.continentCountriesHandler( ["americas","western america","northern america", "south america","central america"])}>Americas</li>
                        <li className="list-group-item" onClick={() => this.continentCountriesHandler( ["africa","western africa","northern africa", "southern africa","eastern africa"])}>Africa</li>

                      </ul>
                      
                  </div>
                <div className={styles.inputcontainer}>
                    <label className={[styles.field, styles["a-field"], styles["a-field_a1"]].join(" ")}>
                        <input 
                            className={[styles["field__input"], styles["a-field__input"]].join(" ")} 
                            placeholder="e.g. Japan" required 
                            value={value} 
                            onChange={this.inputHandler}
                            onBlur={this.clearInput}
                        />
                        <span className={styles['a-field__label-wrap']}>
                        <span className={`${styles["a-field__label"]} text-muted`}>Search for countries </span>
                        </span>
                    </label>   
                </div>
                
                </main>
                <div style={{display:"flex", boxSizing:"border-box",justifyContent:"center", alignItems:"center", flexDirection:"row",flexWrap:"wrap", padding:" 10px 10px 6rem 10px"}}>
                    {!countryDetails ? countryResult: <MoreCountryDetail data={countryDetails}/>}
                </div>
            </div>
            )
    }
}
 export default CountryContainer