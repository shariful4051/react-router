import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>This is header.</h2>

            
               <nav>
                 <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                 <NavLink to="/mobiles">Mobiles</NavLink>
                 <NavLink to="/users">Users</NavLink>
                 <NavLink to="/posts">Posts</NavLink>

               </nav>
            
        </div>
    );
};

export default Header;