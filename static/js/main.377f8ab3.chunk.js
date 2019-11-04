(window["webpackJsonpmay-countries-app"]=window["webpackJsonpmay-countries-app"]||[]).push([[0],{209:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),i=(a(91),a(92),a(8)),c=a(9),s=a(11),u=a(10),m=a(12),p=a(13),d=a.n(p),f=a(53),g=a.n(f),h=a(16),y=a(18),E=a(37),b={fadeIn:{animation:"x 1s",animationName:y.a.keyframes(h.fadeIn,"fadeIn")}},x=function(e){var t=e.showCountryDetails,a=e.country,n=a.flag,r=a.name,o=a.population,i=a.region,c=a.subregion,s=a.capital,u=a.languages,m=a.currencies,p=e.country;function d(e,t){return e.length>t?e.slice(0,t)+"...":e}return l.a.createElement(E.a,null,l.a.createElement("div",{className:"".concat(g.a.CardContainer," card mb-3"),onClick:function(){return t(p)},style:b.fadeIn},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4",style:{borderRight:"1px solid #ccc"}},l.a.createElement("img",{src:n,className:"card-img",alt:"country-flag"})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},d(r,20)),l.a.createElement("p",null,l.a.createElement("small",null,l.a.createElement("strong",null,"Population"),": ",o),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Region"),": ",i),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Sub-region"),": ",c),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Capital"),": ",s),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Langugages"),": ",function(e){var t="";return e.forEach((function(e){t+=e.name+","})),t.replace(/,\s*$/,"")}(u)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Currency"),": ",d(function(e){var t="";return e.forEach((function(e){t+="Name:".concat(e.name||"None",", Code:").concat(e.code||"None",", Symbol:").concat(e.symbol||"None","  ")})),t.replace(/,\s*$/,"")}(m),40))))))))},C=a(38),v=a(24),_=a(85),k={width:"100%",height:"100%"},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],nextPageToken:null,cityDetail:[],showspinner:!0},a.getMoreCities=function(){a.state.nextPageToken&&d.a.post("https://still-coast-42220.herokuapp.com/token",{nextPageToken:a.state.nextPageToken}).then((function(e){var t=e.data.results.map((function(e,t){return l.a.createElement(v.Marker,{position:e.geometry.location,title:e.formatted_address,key:e.formatted_address,onClick:function(){return a.props.onMarkerClick(e.place_id)}})}));a.setState((function(a,n){return{data:[].concat(Object(C.a)(a.data),Object(C.a)(t)),nextPageToken:e.data.next_page_token}}))})).catch((function(e){console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){e.state.nextPageToken?e.getMoreCities():clearInterval(t)}),5e3);d.a.post("https://still-coast-42220.herokuapp.com/cities",{cities:"cities in "+this.props.countryname}).then((function(t){var a=t.data.results.map((function(t,a){return l.a.createElement(v.Marker,{position:t.geometry.location,title:t.formatted_address,key:t.formatted_address,onClick:function(){return e.props.onMarkerClick(t.place_id)}})}));e.setState({data:a,nextPageToken:t.data.next_page_token})})).catch((function(t){console.log(t),e.setState({showspinner:!1})}))}},{key:"render",value:function(){return l.a.createElement(v.Map,{google:this.props.google,zoom:5,style:k,initialCenter:{lat:this.props.lat,lng:this.props.lng}},this.state.data.length?this.state.data:l.a.createElement("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}},this.state.showspinner?l.a.createElement(_.a,{animation:"border",variant:"info"}):"No data available"))}}]),t}(n.Component),N=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyDBUOAf-TRFXcQkDLaGk4kiQZ7ZJSyJzJc"})(w),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cityDetailsPhotos:[],cityName:null,allCityPhotos:[]},a.onMarkerClick=function(e){d.a.post("https://still-coast-42220.herokuapp.com/city_details",{cityDetails:e}).then((function(e){var t=e.data.result.photos.map((function(e){return l.a.createElement("img",{key:e.photo_reference,src:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=".concat(e.photo_reference,"&key=AIzaSyDBUOAf-TRFXcQkDLaGk4kiQZ7ZJSyJzJc"),className:"card-img-top",alt:"pic",style:{display:"block",maxWidth:"230px",maxHeight:"95px",width:"auto",height:"auto"},width:"300px",height:"200px"})}));a.setState({cityDetailsPhotos:t.length?t:"No photos available",cityName:e.data.result.formatted_address})})).catch((function(e){console.log(e)}))},a.parseData=function(e){var t="";return e.length?(e.forEach((function(e){t+=e.toString()+","})),t.replace(/,\s*$/,"")):"None available"},a.test=function(){},a.parseObject=function(e){var t="";return Object.values(e).length?(Object.entries(e).forEach((function(e){t+=e[0]+": 0"+e[1]+", "})),t.replace(/,\s*$/,"")):"None available"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data;console.log(e)}},{key:"render",value:function(){var e=this.props,t=e.data,a=t.callingCodes,n=t.latlng,r=t.timezones,o=t.regionalBlocs,i=t.translations,c=t.borders,s=t.altSpellings,u=t.topLevelDomain,m=t.area,p=t.name,d=e.data,f=this.state,g=f.cityDetailsPhotos,h=f.cityName;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 ",style:{boxShadow:" 0px 2px 3px #ccc",paddingTop:"5px"}},l.a.createElement(x,{country:d,showCountryDetails:this.test}),l.a.createElement("div",{style:{display:"flex",boxShadow:" 0px 2px 3px #ccc",position:"relative",boxSizing:"border-box",height:"100px",flexDirection:"row",backgroundColor:"#ccc",marginBottom:"3px",overflow:"auto"}},g.length?g:l.a.createElement("h6",{className:"text-muted pt-3",style:{margin:"0 auto",boxSizing:"border-box"}},"Click Map Markers")),l.a.createElement("p",{className:"text-center"}," ",l.a.createElement("strong",null,h?" ".concat(h):null))),l.a.createElement("div",{className:"col-md-6",style:{boxShadow:" 0px 2px 3px #ccc",paddingTop:"10px"}},l.a.createElement("p",{style:{boxShadow:"0px 2px 3px",padding:"20px"}},l.a.createElement("small",null,l.a.createElement("strong",null,"Calling Codes: "),this.parseData(a)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Latlng: "),this.parseData(n)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Timezone: "),this.parseData(r)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Regionalblocs: "),o.length?Object.values(o[0]).join(", ").replace(/,\s*$/,""):"None available"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Translations: "),this.parseObject(i)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Borders: "),this.parseData(c)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"AltSpelling: "),this.parseData(s)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Translations: "),this.parseData(s)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"TopLevelDomain: "),this.parseData(u)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("strong",null,"Area: "),"".concat(m,"km"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 pt-2 pl-0",style:{minHeight:"500px",boxShadow:" 0px 2px 3px #ccc"}},l.a.createElement(N,{lat:n.length?n[0]:0,lng:n.length?n[1]:0,countryname:p,onMarkerClick:this.onMarkerClick}))))}}]),t}(n.PureComponent),O=a(7),S=a.n(O),j={fadeIn:{animation:"x 1s",animationName:y.a.keyframes(h.fadeIn,"fadeIn")}},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={countries:[],value:"",countryResult:[],countryDetails:null,numberOfCountries:null,countryRegion:null},a.inputHandler=function(e){var t=a.state.countries.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})).map((function(e,t){return l.a.createElement(x,{key:t,country:e,showCountryDetails:a.getCountryDetails})}));a.setState({countryResult:t,countryDetails:null,value:e.target.value,numberOfCountries:null})},a.clearInput=function(){a.setState({value:""})},a.getCountryDetails=function(e){a.setState({countryDetails:e,numberOfCountries:null})},a.continentCountriesHandler=function(e){var t=null,n=a.state.countries.filter((function(t){return e.includes(t.region.toLowerCase())||e.includes(t.subregion.toLowerCase())})).map((function(e,n){return t=e.region,l.a.createElement(x,{key:n,country:e,showCountryDetails:a.getCountryDetails})}));a.setState({countryResult:n,countryDetails:null,numberOfCountries:n.length,countryRegion:t})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://restcountries.eu/rest/v2/all").then((function(t){e.setState({countries:t.data})}))}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.state,a=t.numberOfCountries,n=t.value,r=t.countryDetails,o=t.countryResult;return l.a.createElement("div",{style:{paddingTop:"100px",position:"relative",boxSizing:"border-box"}},a?l.a.createElement(E.a,null,l.a.createElement("div",{className:S.a.countryCount,style:j.fadeIn},"Total countries in ",this.state.countryRegion.toLowerCase(),": ",l.a.createElement("span",{style:{fontSize:"12px",borderRadius:"50%",padding:"5px",color:"#fff",backgroundColor:"#563d7c"}},this.state.numberOfCountries))):null,l.a.createElement("main",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"10px",position:"relative",flexDirection:"column"}},l.a.createElement("h6",{style:{lineHeight:"1.6",boxShadow:"0px 2px 3px #ccc",padding:"2px 30px",marginBottom:"0px",fontWeight:"550",color:"#495057",wordSpacing:"normal",letterSpacing:"2px"}},"Countries by continent"),l.a.createElement("div",{style:{margin:"0px",padding:"0px",height:"13px"}},l.a.createElement("div",{style:{display:"inline-block",width:"1px",height:"100%",margin:"0px 43px",backgroundColor:"#ccc"}}," "),l.a.createElement("div",{style:{display:"inline-block",width:"1px",height:"100%",margin:"0px 44px",backgroundColor:"#ccc"}}),l.a.createElement("div",{style:{display:"inline-block",width:"1px",height:"100%",margin:"0px 44px",backgroundColor:"#ccc"}}),l.a.createElement("div",{style:{display:"inline-block",width:"1px",height:"100%",margin:"0px 43px",backgroundColor:"#ccc"}})),l.a.createElement("ul",{className:"list-group list-group-horizontal-lg ".concat(S.a.CountryRegions)},l.a.createElement("li",{className:"list-group-item ",onClick:function(){return e.continentCountriesHandler(["asia","western asia","south-eastern asia","northern asia","southern asia","central asia","eastern asia"])}},"Asia"),l.a.createElement("li",{className:"list-group-item",onClick:function(){return e.continentCountriesHandler(["europe","western europe","northern europe","southern europe","central europe","eastern europe","western europe"])}},"Europe"),l.a.createElement("li",{className:"list-group-item",onClick:function(){return e.continentCountriesHandler(["americas","western america","northern america","south america","central america"])}},"Americas"),l.a.createElement("li",{className:"list-group-item",onClick:function(){return e.continentCountriesHandler(["africa","western africa","northern africa","southern africa","eastern africa"])}},"Africa"))),l.a.createElement("div",{className:S.a.inputcontainer},l.a.createElement("label",{className:[S.a.field,S.a["a-field"],S.a["a-field_a1"]].join(" ")},l.a.createElement("input",{className:[S.a.field__input,S.a["a-field__input"]].join(" "),placeholder:"e.g. Japan",required:!0,value:n,onChange:this.inputHandler,onBlur:this.clearInput}),l.a.createElement("div",{className:S.a["a-field__label-wrap"]},l.a.createElement("div",{className:"".concat(S.a["a-field__label"]," text-muted")},"Search for countries "))))),l.a.createElement("div",{style:{display:"flex",boxSizing:"border-box",justifyContent:"center",alignItems:"center",flexDirection:"row",flexWrap:"wrap",padding:" 10px 10px 6rem 10px"}},r?l.a.createElement(D,{data:r}):o))}}]),t}(n.PureComponent),T=a(84),R=a.n(T),M=function(e){return l.a.createElement("div",{className:R.a.navbar},l.a.createElement("a",{href:"#s",onClick:function(){window.location.reload(!1)}},"World Countries"))},P=a(33),A=a.n(P),B={fadeIn:{animation:"x 1s",animationName:y.a.keyframes(h.fadeIn,"fadeIn")}},z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={scrollBarShowing:!1},a.top=function(){window.scroll({top:0,left:0,behavior:"smooth"})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){e.state.scrollBarShowing||e.setState({scrollBarShowing:!0})}}},{key:"render",value:function(){return l.a.createElement("div",{className:A.a.footer},l.a.createElement("p",{className:"text-muted",style:{padding:"0px",margin:"0px"}}," \xa9Copyright Chukwuemeka Okeke 2019"),this.state.scrollBarShowing?l.a.createElement(E.a,null,l.a.createElement("div",{className:A.a.innerFooter,style:B.fadeIn},l.a.createElement("button",{className:A.a.top,onClick:this.top},"Top"))):null)}}]),t}(n.Component);var H=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(M,null),l.a.createElement("div",{className:"ContentWrapper"},l.a.createElement(I,null)),l.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,a){e.exports={footer:"Footer_footer__hRRDu",top:"Footer_top__2tNwK",innerFooter:"Footer_innerFooter__BNdYW"}},53:function(e,t,a){e.exports={CardContainer:"CountryDetails_CardContainer__1U56-"}},7:function(e,t,a){e.exports={field:"CountryContainer_field__2w458",CountryRegions:"CountryContainer_CountryRegions__1LTkF",field__input:"CountryContainer_field__input__2HNgI","a-field":"CountryContainer_a-field__3rPaK","a-field__input":"CountryContainer_a-field__input__g-4Vw","a-field__label-wrap":"CountryContainer_a-field__label-wrap__1FHWD","a-field__label":"CountryContainer_a-field__label__1GMHy","a-field_a1":"CountryContainer_a-field_a1__A99le","a-field_a2":"CountryContainer_a-field_a2__369P9","a-field_a3":"CountryContainer_a-field_a3__36G7c",inputcontainer:"CountryContainer_inputcontainer__21jeY",countryCount:"CountryContainer_countryCount__PQ-2Y"}},84:function(e,t,a){e.exports={navbar:"Navigation_navbar__5T4dT"}},86:function(e,t,a){e.exports=a(209)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.377f8ab3.chunk.js.map