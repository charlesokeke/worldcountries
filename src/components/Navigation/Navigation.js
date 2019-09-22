import React from "react"
import styles from "./Navigation.module.css"

const Navigation = (props) => {

    return (
        <div className={styles.navbar}>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

export default Navigation