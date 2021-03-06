import React, { useEffect, useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../Comments/Comments';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(244,226,110,1) 100%)',
        padding: '30px 0px',
        minHeight: '100vh', 
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      borderRadius: '20px', 
    },
    post: {
        padding: '20px 20px 40px 20px' , 
        borderBottom: '1px solid #ececec',
    },
    title: {
        textTransform: 'capitalize', 
        textAlign: 'left', 
        margin: '10px 5px', 
        color: 'indianred', 
    },
    body: {
        textAlign: 'left',
        padding: '20px 5px', 
    },
  })
);

export const PostContext = createContext(); 

const PostDetail = () => {
    const {postId} = useParams(); 
    const classes = useStyles(); 

    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setPost(data));
    },[]);
    const {title, body} = post; 

    return (
        <PostContext.Provider value={postId}>
            <Grid item container className={classes.root}>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <div className={classes.post}>
                            <Typography variant="h3" className={classes.title}>
                                {title}
                            </Typography>
                            <Typography variant="p" className={classes.body}>
                                {body}
                            </Typography>
                        </div>
                        <Comments></Comments>
                    </Paper>
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </PostContext.Provider>
    );
};

export default PostDetail;