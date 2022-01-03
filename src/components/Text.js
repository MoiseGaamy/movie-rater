import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import React from 'react'
import Comments from './Comments.js'
import { connect } from "react-redux";
import { toggleFavorite } from '../actions/actions.js';
import Rating from '../containers/Rating.js';

const useStyles = makeStyles((theme) => ({
    movieImage: {
        height: "100%",
        width: "70%",
        marginLeft: "4rem"
    },
    textTitle: {
        color: "#fff",
        fontSize: "18",
        fontFamily: "fantasy"
    },
    commentContainer: {
        marginTop: "4rem",
        fontSize: "1.5rem",
    },
    email: {
        backgroundColor: "#6D9886"
    }
}))



const Text = ({ com, toggleFav, fav }) => {
     console.log(fav);
    const classes = useStyles()
    let title = "InTouchable";
    let overview = "this movie takls about how jonh snow leave the snow jafkjafoiajjfoaiofiafjaj;f a;jfa;oijfiajfioa";
    let release_date = "12/8/2020";
    let vote_average = 7.3

    const favChecker = (overview) => {
        let found = false
        // eslint-disable-next-line array-callback-return
        fav?.map(p => {
           if (p.id === overview.id) {
                found = true
            } 
         })
        return found
    
    }
    return (
        <div>
                       <Grid container style={{marginTop:"6rem"}}>
                           <Grid item xs={12} sm={6}>
                           <img className={classes.movieImage} src="images/im.jpg" alt='movieImage' />
                           </Grid>
                           <Grid  item xs={12} sm={6} >
                               <h1>{title}</h1>
                               <Box className={classes.movieInfoContainer}>
                                    <hr className={classes.seperator}/>
                                    <Grid container>
                                        <Grid item md={2}>
                                            <Button className={classes.favourite} onClick={()=>toggleFav(overview)}>
                                                <FavoriteIcon style={{ color:favChecker(overview)?"red":"white",fontSize:50}}/>
                                            </Button>
                                        </Grid>
                                        <Grid item md={2}>
                                            <Typography className={classes.text}>
                                                Name
                                                    <br />
                                                {title}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Typography className={classes.text}>
                                                Overview
                                                    <br />
                                                {overview}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={2}>
                                            <Typography className={classes.text}>
                                                release
                                                    <br />
                                                {release_date}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={2}>
                                            <Typography className={classes.text}>
                                                average
                                                    <br />
                                                {vote_average}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                           </Grid>
                           <Grid container style={{marginLeft:"4rem"}}>
                                <Grid xs={12} sm={6} ><Comments /></Grid>
                                <Grid xs={12} sm={6}className={classes.commentContainer} >
                                    {com.map((comment)=>{
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

export default connect(mSTP,mDTP) (Text)
