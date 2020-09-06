import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Post from '../Post/Post';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '30px', 
    }
  })
);

const Posts = () => {
    const classes = useStyles(); 
    const [posts, setPosts] = useState([]); 

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data)); 
    }, []); 
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </Grid>
        </div>
    );
};

export default Posts;