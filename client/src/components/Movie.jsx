import React from "react";
import { useState, useEffect } from 'react';
import styles from "./home.module.css"



export default function Movie({ image, title, id }){

    useEffect(() => {
        return () => { image = null};
    }, [])

    return(
        <div>
            <h3 className={styles.title}>{title}</h3>
            <img src={image} height= "330" alt="image not found" />
        </div>
    )
}