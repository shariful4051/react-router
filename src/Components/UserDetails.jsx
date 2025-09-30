import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const userDetail = useLoaderData()
     const navigate = useNavigate()
    console.log(userDetail)
    return (
        <div>
            <h3>it is user details</h3>
            <p>Name:{userDetail.name}</p>
            <p>Phone:{userDetail.phone}</p>
            <p>Company Name:{userDetail.company.name}</p>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;