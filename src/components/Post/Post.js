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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
        padding: '0 30px',
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
                <div className={classes.postDetails}>
                    <Typography variant="h4" className={classes.postTitle}>
                        {title}
                    </Typography>
                    <Typography noWrap className={classes.postBody}>
                        {body}
                    </Typography>
                </div>
                <Button className={classes.postButton} onClick={() => {handleClick(id)}}>Read More</Button>
            </Paper>
        </Grid>
    );
};

export default Post;