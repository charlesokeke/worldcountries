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
    
    africanCountriesHandler = () => {
        let countryName = null
        const africanCountries = this.state.countries.filter((country) =>{
            return country.region.toLowerCase() === "africa" || 
            country.subregion.toLowerCase() === "western africa" ||
            country.subregion.toLowerCase() === "northern africa" ||
            country.subregion.toLowerCase() === "southern africa" ||
            country.subregion.toLowerCase() === "eastern africa"
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
            countryResult:africanCountries,
             countryDetails:null,
              numberOfCountries:africanCountries.length,
               countryRegion:countryName
            })
            
    }

    europeanCountriesHandler = () => {
        let countryName = null
        const europeanCountries = this.state.countries.filter((country) =>{
            return country.region.toLowerCase() === "europe" || 
            country.subregion.toLowerCase() === "western europe" ||
            country.subregion.toLowerCase() === "northern europe" ||
            country.subregion.toLowerCase() === "southern europe" ||
            country.subregion.toLowerCase() === "eastern europe"
        })
        .map((element,index) => {
            countryName = element.region
            return <CountryDetails 
                        key={index} 
                        country={element}
                        showCountryDetails= {this.getCountryDetails}
                    />
        })
        this.setState({
            countryResult:europeanCountries, 
            countryDetails:null,
            numberOfCountries:europeanCountries.length,
            countryRegion:countryName
        })
    }

    americasCountriesHandler = () => {
        let countryName = null
        const americasCountries = this.state.countries.filter((country) =>{
            return country.region.toLowerCase() === "americas" || 
            country.subregion.toLowerCase() === "western america" ||
            country.subregion.toLowerCase() === "north america" ||
            country.subregion.toLowerCase() === "south america" ||
            country.subregion.toLowerCase() === "central america"
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
            countryResult:americasCountries,
             countryDetails:null,
             numberOfCountries:americasCountries.length,
             countryRegion:countryName
            })
    }

    asiaCountriesHandler = () => {
        let countryName = null
        const asianCountries = this.state.countries.filter((country) =>{
            return country.region.toLowerCase() === "asia" || 
            country.subregion.toLowerCase() === "western asia" ||
            country.subregion.toLowerCase() === "northern asia" ||
            country.subregion.toLowerCase() === "southern asia" ||
            country.subregion.toLowerCase() === "eastern asia"
        })
        .map((element,index) => {
            countryName = element.region
            return <CountryDetails key={index} country={element} showCountryDetails= {this.getCountryDetails}/>
        })
        this.setState({
            countryResult:asianCountries,
             countryDetails:null, 
             numberOfCountries:asianCountries.length,
             countryRegion:countryName
            })
    }
    

    render () {
        console.log(this.state.numberOfCountries)
        
        return (
            <div style={{paddingTop:"100px", position:"relative"}}>
                {this.state.numberOfCountries ? 
                <span style={{position:"absolute", color:"purple",padding:"8px",fontWeight:"500",top:"10px", right:"20px",border:"2px solid #ccc"}}>Total Countries in {this.state.countryRegion}: {this.state.numberOfCountries}</span>:
                 null
                 }
                <main style={{display:"flex",justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingBottom:"10px",position:"relative"}} >
                        
                      <ul className={`list-group list-group-horizontal-lg ${styles.CountryRegions}`} >
                        <li className="list-group-item " onClick={this.asiaCountriesHandler}>Asia</li>
                        <li className="list-group-item" onClick={this.europeanCountriesHandler}>Europe</li>
                        <li className="list-group-item" onClick={this.americasCountriesHandler}>Americas</li>
                        <li className="list-group-item" onClick={this.africanCountriesHandler}>Africa</li>

                      </ul>
                      
                  </div>
                <div className={styles.inputcontainer}>
                    <label className={[styles.field, styles["a-field"], styles["a-field_a1"]].join(" ")}>
                        <input 
                            className={[styles["field__input"], styles["a-field__input"]].join(" ")} 
                            placeholder="e.g. Japan" required 
                            value={this.state.value} 
                            onChange={this.inputHandler}
                            onBlur={this.clearInput}
                        />
                        <span className={styles['a-field__label-wrap']}>
                        <span className={`${styles["a-field__label"]} text-muted`}>Search for countries </span>
                        </span>
                    </label>   
                </div>
                
                </main>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row",flexWrap:"wrap", padding:" 10px 10px 4rem 10px"}}>
                    {!this.state.countryDetails ? this.state.countryResult: <MoreCountryDetail data={this.state.countryDetails}/>}
                </div>
            </div>
            )
    }
}
 export default CountryContainer