import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetail =useLoaderData();
    const{id,title,body}= postDetail;
    return (
        <div>
            <p>id:{id}</p>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
        </div>
    );
};

export default PostDetails;