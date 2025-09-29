import React from 'react';
import { Link } from 'react-router';

const User1 = ({user}) => {
    const {id,name,website}=user;
    return (
        <div>
            <div style={{
                border:"2px solid red",
                margin:'4px'

            }}>
           <h4>card no-{id}</h4> 
           <p>Name:{name}</p>
           <p>Website:{website}</p>
           <Link to={`/users/${id}`}><button>Details</button></Link>
           
           
        </div>
        </div>
    );
};

export default User1;