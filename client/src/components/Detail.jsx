import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findDetail, setDetail } from '../actions';
import styles from "./detail.module.css"

export default function Detail(props) {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(findDetail(props.match.params.id));
        return () => { dispatch(setDetail(undefined)) };
    }, [dispatch])

    let movieDetail = useSelector((state) => state.detail)

    return (
        <div>

            {
                movieDetail === undefined ?
                    <div className={styles.loading}>
                        <img src={"https://i.pinimg.com/originals/5c/dd/ad/5cddadeb5ed4d48a582cfeb328160826.gif"} height='600px' />

                    </div>
                    :
                    <div className={styles.detail} key={movieDetail.id}>
                        <Link to='/home'>
                            <button className={styles.btn}>BACK</button>
                        </Link>
                        <div>
                            <h1>{movieDetail.title}</h1>
                            <img src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`} height="400"/>
                            <img src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`} height="400" />
                            <h3>genres</h3>
                            {
                                movieDetail.genres.map(g => (
                                    <h6>{g.name}</h6>
                                ))
                            }
                            <h3>homepage: {movieDetail.homepage}</h3>
                            <h3>id: {movieDetail.id}</h3>
                            <h3>language: {movieDetail.original_language}</h3>
                            <h3>original title: {movieDetail.original_title}</h3>
                            <h3>overview: {movieDetail.overview}</h3>
                            <h3>popularity: {movieDetail.popularity}</h3>
                            <h3>release_date: {movieDetail.release_date}</h3>
                            <h3>revenue: {movieDetail.revenue}</h3>
                            <h3>runtime: {movieDetail.runtime}</h3>
                            <h3>status: {movieDetail.status}</h3>
                            <h3>production companies</h3>
                            {
                                movieDetail.production_companies.map(g => (
                                    <h6>{g.name}</h6>
                                ))
                            }
                            <h3>tagline: {movieDetail.tagline}</h3>
                            <h3>vote_average: {movieDetail.vote_average}</h3>
                            <h3>vote_count: {movieDetail.vote_count}</h3>
                            
                        </div>

                    </div>
            }

        </div>
    )
}