import React, { useContext, useEffect, useState, createContext } from 'react';
import { PostContext } from '../PostDetail/PostDetail';
import Comment from '../Comment/Comment';

export const CommentContext = createContext(); 
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
        <CommentContext.Provider value={comments.id}>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </CommentContext.Provider>
    );
};

export default Comments;