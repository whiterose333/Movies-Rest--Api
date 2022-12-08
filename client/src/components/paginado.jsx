import React from 'react';
import styles from "./home.module.css"



export default function Paginado ({moviesPerPage, allMovies, paginado}){
    const pageNumbers = []

    for (let i= 0; i < Math.ceil(allMovies/moviesPerPage); i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
            <ul className={styles.paginado}>
                {pageNumbers && pageNumbers.map(number => {
                return(
                    
                        <li key= {number}>
                        <button className={styles.btn} onClick= {() => paginado(number)}>{number}</button>
                        
                        </li>   
                    )
                })}
            </ul>
        </nav>
    )
}