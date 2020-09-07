import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import CommentDetail from '../CommentDetail/CommentDetail';

const useStyles = makeStyles((theme) => ({
    commentbox: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    comment: {
      backgroundColor: '#f1f1f1', 
      borderRadius: '20px',
    },
    commentPaper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    name: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        padding: '7px 10px 7px 20px',
    },
    commentBody: {
        paddingLeft: '20px',
        color: 'darkslategray', 
    },
    email:{
        padding: '5px 5px 5px 20px',
        fontWeight: '400',
        color: 'lightslategray', 
    },
  }));

const Comment = (props) => {
    const comment= props.comment; 
    const id = props.comment.id; 
    const classes = useStyles(); 

    return (
        <div className={classes.commentbox}>
            <Paper className={classes.commentPaper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item md={2}>
                        <ProfilePicture commentId={id}></ProfilePicture>
                    </Grid>
                    <Grid item xs md={10} className={classes.comment}>
                        <CommentDetail commentDetails={comment}></CommentDetail>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Comment;