import React, { Suspense, useState } from 'react';
import { Link, useNavigate, } from 'react-router';
import ShowDetails2 from './ShowDetails2/ShowDetails2';

const User1 = ({user}) => {
    const {id,name,website}=user;
    const [show,setShow] = useState(false);
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
   const navigate =useNavigate();
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
           <button onClick={()=>navigate("/")}>Home</button>

           <button onClick={()=>setShow(!show)}>
            {show?"Hide":"Show"}
             Details</button>
             {
                show && <Suspense fallback={<span>Loding...</span>}>
                    <ShowDetails2 userPromise={userPromise}></ShowDetails2>
                </Suspense>
             }
           
           
           
        </div>
        </div>
    );
};

export default User1;