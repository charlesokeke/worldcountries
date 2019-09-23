import React from "react"
import styles from "./Footer.module.css"

const footer= (props) => {

    return (
        <div className={styles.footer}>
            <p className="text-muted"> &copy;Copyright Chukwuemeka Okeke 2019</p>
            
        </div>
    )
}

export default footer