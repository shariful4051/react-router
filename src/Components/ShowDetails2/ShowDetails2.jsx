import React, { use } from 'react';

const ShowDetails2 = ({userPromise}) => {
    const user =use(userPromise);
    const {name,username,email}=user;
    
   // console.log(user)
    return (
        <div>
          <h4>Name:{name}</h4>  
          <h4>User Name:{username}</h4>
          <h4>Email:{email}</h4>
        </div>
    );
};

export default ShowDetails2;