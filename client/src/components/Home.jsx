import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, } from '../actions';
import Paginado from './paginado';
import Movie from './Movie';
import styles from "./home.module.css"


export default function Home() {
    const dispatch = useDispatch();
    const allMovies = useSelector((state) => state.movies);
    const [order, setOrder] = useState("");
    const [actualPage, setActualPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(20);
    const indexOfLastMovie = actualPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const actualMovies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);
    // tener cada pagina 
    /* function handleFilterByActivities(e){
        const valorSelect= e.target.value
        const filteredCountries = [...allCountries].filter((c) => c.activity.name === valorSelect)
        dispatch(filterCountriesByActivity(filteredCountries))
    } */

    const paginado = (pageNumber) => {
        setActualPage(pageNumber)
    }








    useEffect(() => {
        dispatch(getMovies());
        console.log(actualMovies)
    }, [])



    return (
        <div >
            {
                actualMovies.length > 0 ?

                    <div className={styles.home}>
                        <Paginado
                            moviesPerPage={moviesPerPage}
                            allMovies={allMovies.length}
                            paginado={paginado}
                        />
                        <div className={styles.container}>
                            {actualMovies && actualMovies.map((movie, i) => (

                                <div className={styles.card} key={i}>
                                    <Link to={"/movie/" + movie.id}>
                                        <Movie title={movie.title} image={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                                    </Link>
                                </div>

                            ))}
                        </div>
                    </div>
                    :
                    <div className={styles.loading}>
                        <img src={"https://i.pinimg.com/originals/5c/dd/ad/5cddadeb5ed4d48a582cfeb328160826.gif"} height='600px' />

                    </div>
            }
        </div >
    )
}