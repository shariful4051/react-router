import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>This is header.</h2>

            
               <nav>
                 <NavLink className='link' to="/">Home</NavLink>
                <NavLink className='link' to="/about">About</NavLink>
                 <NavLink className='link' to="/mobiles">Mobiles</NavLink>
                 <NavLink className='link' to="/users">Users</NavLink>
                 <NavLink className='link' to="/posts">Posts</NavLink>

               </nav>
            
        </div>
    );
};

export default Header;