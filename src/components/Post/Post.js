import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Typography, Avatar} from '@material-ui/core';
import { useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    postPaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'lightyellow',
    },
    postTitle: {
        color: 'black', 
        fontSize: '25px', 
        padding: '10px 0px',
        textTransform: 'capitalize', 
    },
    postBody: {
        textAlign: 'justify',
        overflow: 'hidden',
        width: '100%',
        marginBottom: '10px',
    },
    postButton: {
        marginTop: '10px', 
    },
  })
);

const Post = (props) => { 
    const classes = useStyles(); 
    const {id, title, body} = props.post; 
    const history = useHistory();

    const handleClick = (postId) => {
        const url = `/posts/${postId}`;
        history.push(url);
    }
    return (
        <Grid item xs={12} md={4}>
            
            <Paper className={classes.postPaper}>
                <Typography variant="h4" className={classes.postTitle}>
                    {title}
                </Typography>
                <Typography noWrap className={classes.postBody}>
                    {body}
                </Typography>
                
                <Button className={classes.postButton} variant="outlined" color="primary" onClick={() => {handleClick(id)}}>Read More</Button>
            </Paper>
        </Grid>
    );
};

export default Post;