import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userDetail = useLoaderData()
    console.log(userDetail)
    return (
        <div>
            <h3>it is user details</h3>
            <p>Name:{userDetail.name}</p>
            <p>Phone:{userDetail.phone}</p>
            <p>Company Name:{userDetail.company.name}</p>
        </div>
    );
};

export default UserDetails;