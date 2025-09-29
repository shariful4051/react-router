import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    //console.log(post)
    return (
        <div style={{
            border:'2px solid red',
            margin:'20px'
        }}>
            <h3>card-n0-{post.id}</h3>
            <p>Title:{post.title}</p>
            <Link to={`/posts/${post.id}`}>Post Details</Link>
        </div>
    );
};

export default Post;