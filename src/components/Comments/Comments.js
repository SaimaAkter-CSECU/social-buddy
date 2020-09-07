import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../PostDetail/PostDetail';
import Comment from '../Comment/Comment';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const Comments = () => {
    const postId = useContext(PostContext); 
    const [comments, setComments] = useState([]); 

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    },[])

    return (
        <Accordion defaultExpanded>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
            >
                <div >
                    <Typography>
                        <a>
                            {comments.length} comments
                        </a>
                    </Typography>
                </div>
            </AccordionSummary>
            <Divider />
            <AccordionDetails > 
                <div>
                    {
                        comments.map(comment => <Comment comment={comment}></Comment>)
                    }
                </div>
            </AccordionDetails>
        </Accordion>  
    );
};

export default Comments;