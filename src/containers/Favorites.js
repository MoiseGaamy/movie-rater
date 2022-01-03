import { Box, Grid,withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard.js'

const styles = (theme) => ({
    movieContainer: {
        height: "100vh",
        backgroundColor: "rgb(68,68,68)",
        paddingTop: 80,
        textAlign:"center"
    }

})

export class Favorites extends Component {
    render() {
        const {classes, fav} = this.props
        return (
            <Box>
                <Grid container spacing={2} className={classes.movieContainer}>
                    {fav.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} image={movie.poster_path}/>
                    })}
                </Grid>
           </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    fav: state.favorites
})

const mapDispatchToProps =(dispatch)=> ({
    
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Favorites))

