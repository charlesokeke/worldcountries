(window["webpackJsonpmay-countries-app"]=window["webpackJsonpmay-countries-app"]||[]).push([[0],{2:function(e,t,a){e.exports={field:"CountryContainer_field__2w458",CountryRegions:"CountryContainer_CountryRegions__1LTkF",field__input:"CountryContainer_field__input__2HNgI","a-field":"CountryContainer_a-field__3rPaK","a-field__input":"CountryContainer_a-field__input__g-4Vw","a-field__label-wrap":"CountryContainer_a-field__label-wrap__1FHWD","a-field__label":"CountryContainer_a-field__label__1GMHy","a-field_a1":"CountryContainer_a-field_a1__A99le","a-field_a2":"CountryContainer_a-field_a2__369P9","a-field_a3":"CountryContainer_a-field_a3__36G7c",inputcontainer:"CountryContainer_inputcontainer__21jeY"}},23:function(e,t,a){e.exports={CardContainer:"CountryDetails_CardContainer__1U56-"}},24:function(e,t,a){e.exports={navbar:"Navigation_navbar__5T4dT"}},25:function(e,t,a){e.exports={footer:"Footer_footer__hRRDu"}},26:function(e,t,a){e.exports=a(65)},31:function(e,t,a){},32:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),i=(a(31),a(32),a(6)),c=a(7),s=a(10),u=a(8),m=a(11),p=a(9),d=a.n(p),g=a(23),f=a.n(g),E=function(e){return l.a.createElement("div",{className:"".concat(f.a.CardContainer," card mb-3"),onClick:function(){return e.showCountryDetails(e.country)}},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4",style:{borderRight:"1px solid #ccc"}},l.a.createElement("img",{src:e.country.flag,className:"card-img",alt:"country-flag"})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},(t=e.country.name).length>25?t.slice(0,20)+"...":t),l.a.createElement("p",null,l.a.createElement("small",null,l.a.createElement("strong",null,"Population"),": ",e.country.population),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Region"),": ",e.country.region),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Sub-region"),": ",e.country.subregion),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Capital"),": ",e.country.capital),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Langugages"),": ",function(e){var t="";return e.forEach((function(e){t+=e.name+","})),t.replace(/,\s*$/,"")}(e.country.languages)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Currency"),": ",e.country.currencies[0].name))))));var t},y=a(12),h={width:"100%",height:"100%"},C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.post("https://still-coast-42220.herokuapp.com/cities",{cities:"cities in "+this.props.countryname}).then((function(t){console.log(t.data.results);var a=t.data.results.map((function(e,t){return l.a.createElement(y.Marker,{position:e.geometry.location,title:e.formatted_address,key:t})}));e.setState({data:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement(y.Map,{google:this.props.google,zoom:8,style:h,initialCenter:{lat:this.props.lat,lng:this.props.lng}},this.state.data)}}]),t}(n.Component),_=Object(y.GoogleApiWrapper)({apiKey:"AIzaSyDBUOAf-TRFXcQkDLaGk4kiQZ7ZJSyJzJc"})(C),b=function(e){function t(e){var t="";return e.length?(e.forEach((function(e){t+=e.toString()+","})),t.replace(/,\s*$/,"")):"None available"}return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 ",style:{boxShadow:" 0px 2px 3px #ccc",paddingTop:"5px"}},l.a.createElement(E,{country:e.data,showCountryDetails:function(){}})),l.a.createElement("div",{className:"col-md-6",style:{boxShadow:" 0px 2px 3px #ccc",paddingTop:"10px"}},l.a.createElement("p",{style:{boxShadow:"0px 2px 3px",padding:"20px"}},l.a.createElement("small",null,l.a.createElement("strong",null,"Calling Codes: "),t(e.data.callingCodes)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Latlng: "),t(e.data.latlng)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Timezone: "),t(e.data.timezones)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Regionalblocs: "),e.data.regionalBlocs.length?Object.values(e.data.regionalBlocs[0]).join(", ").replace(/,\s*$/,""):"None available"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Translations: "),function(e){var t="";return Object.values(e).length?(Object.entries(e).forEach((function(e){t+=e[0]+": 0"+e[1]+", "})),t.replace(/,\s*$/,"")):"None available"}(e.data.translations)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Borders: "),t(e.data.borders)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"AltSpelling: "),t(e.data.altSpellings)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Translations: "),t(e.data.altSpellings)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"TopLevelDomain: "),t(e.data.topLevelDomain)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Area: "),"".concat(e.data.area,"km"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 pt-2 pl-2 pr-2",style:{minHeight:"500px"}},l.a.createElement(_,{lat:e.data.latlng.length?e.data.latlng[0]:0,lng:e.data.latlng.length?e.data.latlng[1]:0,countryname:e.data.name}))))},v=a(2),w=a.n(v),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={countries:[],value:"",countryResult:[],countryDetails:null,numberOfCountries:null,countryRegion:null},a.inputHandler=function(e){var t=a.state.countries.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})).map((function(e,t){return l.a.createElement(E,{key:t,country:e,showCountryDetails:a.getCountryDetails})}));a.setState({countryResult:t,countryDetails:null,value:e.target.value,numberOfCountries:null})},a.clearInput=function(){a.setState({value:""})},a.getCountryDetails=function(e){a.setState({countryDetails:e,numberOfCountries:null}),console.log(e)},a.continentCountriesHandler=function(e){var t=null,n=a.state.countries.filter((function(t){return e.includes(t.region.toLowerCase())||e.includes(t.subregion.toLowerCase())})).map((function(e,n){return t=e.region,l.a.createElement(E,{key:n,country:e,showCountryDetails:a.getCountryDetails})}));a.setState({countryResult:n,countryDetails:null,numberOfCountries:n.length,countryRegion:t})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://restcountries.eu/rest/v2/all").then((function(t){e.setState({countries:t.data})}))}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return console.log(this.state.numberOfCountries),l.a.createElement("div",{style:{paddingTop:"100px",position:"relative",boxSizing:"border-box"}},this.state.numberOfCountries?l.a.createElement("span",{style:{position:"absolute",color:"purple",padding:"8px",fontWeight:"500",top:"10px",right:"20px",border:"2px solid #ccc"}},"Total Countries in ",this.state.countryRegion,": ",this.state.numberOfCountries):null,l.a.createElement("main",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"10px",position:"relative"}},l.a.createElement("ul",{className:"list-group list-group-horizontal-lg ".concat(w.a.CountryRegions)},l.a.createElement("li",{className:"list-group-item ",onClick:function(){return e.continentCountriesHandler(["asia","western asia","south-eastern asia","northern asia","southern asia","central asia","eastern asia"])}},"Asia"),l.a.createElement("li",{className:"list-group-item",onClick:function(){return e.continentCountriesHandler(["europe","western europe","northern europe","southern europe","central europe","eastern europe","western europe"])}},"Europe"),l.a.createElement("li",{className:"list-group-item",onClick:function(){return e.continentCountriesHandler(["americas","western america","northern america","south america","central america"])}},"Americas"),l.a.createElement("li",{className:"list-group-item",onClick:function(){return e.continentCountriesHandler(["africa","western africa","northern africa","southern africa","eastern africa"])}},"Africa"))),l.a.createElement("div",{className:w.a.inputcontainer},l.a.createElement("label",{className:[w.a.field,w.a["a-field"],w.a["a-field_a1"]].join(" ")},l.a.createElement("input",{className:[w.a.field__input,w.a["a-field__input"]].join(" "),placeholder:"e.g. Japan",required:!0,value:this.state.value,onChange:this.inputHandler,onBlur:this.clearInput}),l.a.createElement("span",{className:w.a["a-field__label-wrap"]},l.a.createElement("span",{className:"".concat(w.a["a-field__label"]," text-muted")},"Search for countries "))))),l.a.createElement("div",{style:{display:"flex",boxSizing:"border-box",justifyContent:"center",alignItems:"center",flexDirection:"row",flexWrap:"wrap",padding:" 10px 10px 4rem 10px"}},this.state.countryDetails?l.a.createElement(b,{data:this.state.countryDetails}):this.state.countryResult))}}]),t}(n.PureComponent),N=a(24),k=a.n(N),D=function(e){return l.a.createElement("div",{className:k.a.navbar},l.a.createElement("a",{href:"#home"},"World Countries"))},O=a(25),j=a.n(O),S=function(e){return l.a.createElement("div",{className:j.a.footer},l.a.createElement("p",{className:"text-muted"}," \xa9Copyright Chukwuemeka Okeke 2019"))};var R=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(D,null),l.a.createElement("div",{className:"ContentWrapper"},l.a.createElement(x,null)),l.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.06d2b7a8.chunk.js.map