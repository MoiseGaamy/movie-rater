import React, { useEffect,useState } from 'react';
import { Box, CircularProgress ,Grid, makeStyles } from '@material-ui/core';
import axios from "axios";
import { MOVIE_RATER_URL } from '../config/index.js';
import MovieCard from '../components/MovieCard.js';


const useStyles = makeStyles((theme) => ({
    movieContainer: {
        textAlign: "center",
        padding:"80px 10px  0px 10px"
    }
}))

export default function MovieRater() {
    const classes=useStyles()
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        axios.get( MOVIE_RATER_URL + "?&api_key=7c1104c928f1023474150c9f5688c3f5").then((response) => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response.data)
                const { results } = response.data;
                let newMovieData = []
                results.forEach((movie) => {
                    let movieObj = {
                        id: movie.id,
                        title: movie.title,
                        overwiew: movie.overwiew,
                        poster_path: movie.poster_path,
                        release_date: movie.release_date,
                        vote_average: movie.vote_average
                    }
                    newMovieData.push(movieObj)
                });
                setMovieData(newMovieData);
              }
         })
    }, [])
    return (
        <Box>
            {movieData ? (<Grid className={classes.movieContainer} container spacing={2}>
                    { movieData.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} image={movie.poster_path} />
            })}
            </Grid>) : ( <CircularProgress style={{marginTop: 100}}/>)}
        </Box>
    )
}
