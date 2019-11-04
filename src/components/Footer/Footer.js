import React,{ Component } from "react"
import styles from "./Footer.module.css"
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const animationStyles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class Footer extends Component {
    state = {
        scrollBarShowing:false
    }
    componentDidMount(){
        window.onscroll = () =>{
            if(!this.state.scrollBarShowing){
            this.setState({scrollBarShowing:true})
        } 
    }
   }
    top =() =>{
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
          });
    }
    render(){
        return (
            <div className={styles.footer}>
                <p className="text-muted" style={{padding:"0px",margin:"0px"}}> &copy;Copyright Chukwuemeka Okeke 2019</p>
                {this.state.scrollBarShowing ? (
                        <StyleRoot>
                        <div className={styles.innerFooter} style={animationStyles.fadeIn}>
                            <button className={styles.top} onClick={this.top}>Top</button>
                        </div>
            
                        </StyleRoot>
                
                ) : null}
                
            </div>
        )
    }

}

export default Footer