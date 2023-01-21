import React,{PureComponent} from "react"
import Axios from "axios"
import CountryDetails from "../../components/CountryDetails/CountryDetails"
import MoreCountryDetail from "../../components/MoreCountryDetails/MoreCountryDetails"
import styles from "./CountryContainer.module.css"
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const animationStyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

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
        Axios.get("https://restcountries.com/v3.1/all").then(response => {
            this.setState({countries:response.data})
        }).catch(error =>{
            console.log(error)
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

    }
    
    continentCountriesHandler = (regions) => {
        let countryName = null
        const showCountriesInContinent = this.state.countries.filter((country) =>{
            return regions.includes(country.region.toLowerCase())  || regions.includes(country.subregion.toLowerCase())
            
        })
        .map((element,index) => {
            countryName = element.region
             return <CountryDetails 
                        key={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)} 
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
        const {numberOfCountries, value, countryDetails, countryResult} = this.state
        
        return (
            <div style={{paddingTop:"100px", position:"relative",boxSizing:"border-box"}}>
                {numberOfCountries ? 
                <StyleRoot>
                <div className={styles.countryCount} style={animationStyles.fadeIn}>
                    Total countries in {this.state.countryRegion.toLowerCase()}: <span style={{fontSize:"12px",borderRadius:"50%",padding:"5px", color:"#fff", backgroundColor:'#563d7c'}}>{this.state.numberOfCountries}</span>
                    </div>
                </StyleRoot>
                    :
                 null
                 }
                <main style={{display:"flex",justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingBottom:"10px",position:"relative",flexDirection:"column"}} >
                        <h6 style={{lineHeight:"1.6",boxShadow:"0px 2px 3px #ccc",padding:"2px 30px",marginBottom:"0px",fontWeight:"550",color:"#495057",wordSpacing:"normal",letterSpacing:"2px"}}>Countries by continent</h6>
                        <div style={{margin:"0px",padding:"0px",height:"13px"}}>
                            <div style={{display:"inline-block",width:"1px",height:"100%",margin:"0px 43px",backgroundColor:"#ccc"}}> </div>
                            <div style={{display:"inline-block",width:"1px",height:"100%",margin:"0px 44px",backgroundColor:"#ccc"}}></div>
                            <div style={{display:"inline-block",width:"1px",height:"100%",margin:"0px 44px",backgroundColor:"#ccc"}}></div>
                            <div style={{display:"inline-block",width:"1px",height:"100%",margin:"0px 43px",backgroundColor:"#ccc"}}></div>
                        </div>
                      <ul className={`list-group list-group-horizontal-lg ${styles.CountryRegions}`} >
                        <li className="list-group-item "onClick={() => this.continentCountriesHandler( ["asia","western asia","south-eastern asia","northern asia", "southern asia","central asia","eastern asia"])}>Asia</li>
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
                        <div className={styles['a-field__label-wrap']}>
                        <div className={`${styles["a-field__label"]} text-muted`}>Search for countries </div>
                        </div>
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
