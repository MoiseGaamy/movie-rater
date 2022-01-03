import axios from 'axios';
import React, { Component } from 'react'
import { CircularProgress, Box, Typography, Grid, Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite"
import { withStyles } from '@material-ui/styles';
import { MOVIE_ID_URL, MOVIE_IMG_API } from '../config/index.js';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/actions.js';
import Rating from './Rating.js';
import Comments from '../components/Comments.js';

const Styles = (theme) => ({
    movieImage: {
        height: "100%",
        width: "70%",
        marginLeft: "4rem"
    },
    Title: {
        fontSize: "18",
        fontFamily: "fantasy",
        fontWeight:"100"
    },
    commentContainer: {
        marginTop: "4rem",
        fontSize: "1.5rem",
    },
    email: {
        backgroundColor: "#6D9886"
    },
    movieContainer: {
        height: '84vh',
        backgroundColor: "#E6DDC4",
        color: "#000",
        marginTop: 74,
        textAlign: "center",
        borderRadius: 5,
        paddingTop:30
    },
    movieInfoContainer: {
        bottom: 10,
        position: "absolute",
        
    },
    seperator: {
        height: "0.01mm",
        width: "-95%"
    },
    favourite: {
        height: 50,
        width: 50,
        marginTop: 15
    },
    text: {
        fontSize:14,
        color: "#000",
        fontFamily:"Helvetica"
        
    },
    heading: {
        fontWeight:"bold"
    }
})

 class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: null
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const { id } = match?.params;
        console.log(id)
        axios.get(MOVIE_ID_URL + id + "?api_key=7c1104c928f1023474150c9f5688c3f5").then((res) => {
                console.log(res.data);
                this.setState({ movie: res.data })
            
        })
    }
     favChecker(movie){
        let found = false
        this.props.fav?.map((p) => {
           if (p.id === movie.id) {
                found = true
            } 
         })
        return found
    
    }
     render() {
         const { classes } = this.props;
        const { movie } = this.state
        if (movie) {
            const {  title ,overview , poster_path,  release_date, vote_average} = movie
            return (
                <div>
                <Grid container style={{marginTop:"6rem"}}>
                    <Grid item xs={12} sm={6}>
                    <img className={classes.movieImage} src={MOVIE_IMG_API+poster_path} alt='movieImage' />
                    </Grid>
                    <Grid  item xs={12} sm={6} >
                        <h1 className={classes.Title}>{title}</h1>
                        <Box className={classes.movieInfoContainer}>
                             <hr className={classes.seperator}/>
                             <Grid container>
                                 <Grid item md={2}>
                                     <Button className={classes.favourite} onClick={()=>this.props.toggleFav(movie)}>
                                         <FavoriteIcon style={{ color:this.favChecker(movie)?"red":"white",fontSize:50,backgroundColor:"#6D9886"}}/>
                                     </Button>
                                 </Grid>
                                 <Grid item md={2}>
                                     <Typography className={classes.text}>
                                         <p className={classes.heading}>Name</p>
                                             <br />
                                         {title}
                                     </Typography>
                                 </Grid>
                                 <Grid item md={6}>
                                     <Typography className={classes.text}>
                                        <p className={classes.heading}> Overview </p>
                                             <br />
                                         {overview}
                                     </Typography>
                                 </Grid>
                                 <Grid item md={4}>
                                     <Typography className={classes.text}>
                                        <p className={classes.heading}>release</p> 
                                             <br />
                                         {release_date}
                                     </Typography>
                                 </Grid>
                                 <Grid item md={2}>
                                     <Typography className={classes.text}>
                                        <p className={classes.heading}>vote</p>
                                             <br />
                                        <span style={{ color:"green"}}>{vote_average}</span>
                                     </Typography>
                                 </Grid>
                             </Grid>
                         </Box>
                    </Grid>
                    <Grid container style={{marginLeft:"4rem"}}>
                         <Grid xs={12} sm={6} ><Comments /></Grid>
                         <Grid xs={12} sm={6}className={classes.commentContainer} >
                             {this.props.com.map((comment)=>{
                                 return (<div >
                                     <p className={classes.email}>{comment.userEmail}</p>
                                     <Rating />
                                     <p>{comment.userComment}</p>
                                 </div>)
                             })}
                         </Grid>
                        
                    </Grid>
                </Grid>
 </div>
            )
        } else {
            return <CircularProgress />
        }
    }
}
const mSTP = (state) => {
    return {
        com: state.myComments,
        fav: state.favorites
    }
}
const mDTP = (dispatch) => ({
    toggleFav: (movie)=> dispatch(toggleFavorite(movie))
})
export default withStyles(Styles)(connect(mSTP,mDTP)(MovieDetails))


