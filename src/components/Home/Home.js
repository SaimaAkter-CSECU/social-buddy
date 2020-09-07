import React from 'react';
import Navbar from '../Navbar/Navbar';
import Posts from '../Posts/Posts';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    homeRoot: {
        flexGrow: 1,
        paddingTop: '90px', 
        background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(244,226,110,1) 100%);',
    }
  })
);

const Home = () => {
    const classes = useStyles(); 
    return (
    <Grid container direction="column">
        <Grid item>
            <Navbar></Navbar>
        </Grid>
        <Grid item container className={classes.homeRoot}>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10}>
                <Posts></Posts>
            </Grid>
            <Grid item xs={false} sm={1} />
        </Grid>
    </Grid>


    );
};

export default Home;