import React from "react"
import styles from "./Navigation.module.css"

const Navigation = (props) => {

    function reload (){
        window.location.reload(false)
    }

    return (
        <div className={styles.navbar}>
            <a href="" onClick={reload}>World Countries</a>
            
        </div>
    )
}

export default Navigation