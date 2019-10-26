import React,{Fragment} from 'react';
import './App.css';
import CountryContainer from "./containers/Countries/CountryContainer"
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Fragment>
    <Navigation />
    <div className="ContentWrapper">
      <CountryContainer />
    </div>
    <Footer />
    </Fragment>
  );
}

export default App;
