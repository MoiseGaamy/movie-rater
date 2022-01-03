import { Card, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { MOVIE_IMG_API } from '../config/index.js';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        margin:"auto",
        width: 130,
        height: 200
    },
    card: {
        cursor: 'pointer',
        "&:hover": {
            backgroundColor:'rgb(90,90,90)',
        }
    },
    cardContent: {
        textAlign:"center",
    },
    link: {
        textDecoration:'none'
    }
}))

export default function MovieCard(props) {
     const classes = useStyles()

    const { movie , image } = props;
    const { id, title } = movie;
    return (
        <Grid item xs={12} sm={2} key={movie.id}>
            <Link to={'/movie/' + id} className={classes.link}>
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={MOVIE_IMG_API+image}></CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            {title}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}
