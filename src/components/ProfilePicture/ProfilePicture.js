import React, { useState, useEffect, useContext } from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
            alignContent: 'center',
        },
    })
);

const ProfilePicture = (props) => {
    const {commentId} = props.commentId; 
    const classes = useStyles(); 
    const [picture, setPicture] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/photos/${commentId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPicture(data));
    },[])

    return (
        <div>
            <Avatar alt="Remy Sharp" src={picture.url} className={classes.large} />
        </div>
    );
};

export default ProfilePicture;