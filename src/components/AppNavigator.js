import { AppBar, Toolbar , Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: 'black',
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        cursor: 'pointer',
        color: 'white',
        marginLeft: 20
    }
}))

export default function AppNavigator() {
    const classes = useStyles();
    return (
        <AppBar className={classes.AppBar} position="fixed">
            <Toolbar >
                <Link to='/' className={classes.link}>
                    <Typography variant="h6" className={classes.title}>Movie-Rater</Typography>
                </Link>
                <Link to='/favorite' className={classes.link}>
                    <Typography variant="h6" className={classes.title}>Favorites</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
