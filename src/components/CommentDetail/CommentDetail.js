import React from 'react';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const CommentDetail = (props) => {
    const {name, body, email} = props.commentDetails; 
    const classes = useStyles(); 
    return (
        <div>
            <Typography varient="h5" className={classes.name}>{name}</Typography>
            <Typography varient="p" className={classes.commentBody}>{body}</Typography>
            <Typography varient="p" className={classes.email}>by {email}</Typography>
        </div>
    );
};

export default CommentDetail;