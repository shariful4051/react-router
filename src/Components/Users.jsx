import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import User1 from './User1';



const Users = () => {
    const users = useLoaderData()
   // console.log(users)
    return (
        <div>
            <p>card:{users.length}</p>
            <div>
                {
                    users.map(user=><User1 key={user.id} user={user}></User1>)
                }
            </div>

            </div>
    );
};

export default Users;